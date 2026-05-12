"use client";
// 챔피언스 팀 빌더와 계산기 프로토타입 화면

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AuthPanel } from "@/components/auth-panel";
import { useSession } from "next-auth/react";
import {
  REGULATION_MA_ELIGIBLE_COUNT,
  REGULATION_MA_MEGA_COUNT,
  regulationMAAbilityNameKo,
  regulationMAEligiblePokemon,
  type ChampionsPokemon,
} from "@/data/champions-regulation-ma";
import {
  Activity,
  BarChart3,
  Calculator,
  ChevronDown,
  Crosshair,
  Database,
  Save,
  Search,
  Shield,
  Swords,
  Target,
  Zap,
} from "lucide-react";

type StatKey = "hp" | "atk" | "def" | "spa" | "spd" | "spe";
type DamageClass = "physical" | "special";
type NatureModifier = 0.9 | 1 | 1.1;
type StatusCondition = "none" | "burn";
type WeatherCondition = "none" | "sun" | "rain" | "sand" | "snow";
type FieldCondition = "none" | "electric" | "grassy" | "psychic" | "misty";

type Pokemon = ChampionsPokemon & {
  role: string;
  ability: string;
  item: string;
  moves: string[];
  base: Record<StatKey, number>;
  sp: Record<StatKey, number>;
};

type Move = {
  name: string;
  displayName: string;
  type: string;
  power: number;
  class: DamageClass;
};

type SavedTeam = {
  id: string;
  label: string;
  strategyName: string;
  pokemonIds: string[];
  pokemonNames?: string[];
  createdAt: string;
  owner: string;
};

type DamageOptions = {
  moveType: string;
  movePower: number;
  attackSp: number;
  attackIv: number;
  manualAttackStat: number;
  defenseHpSp: number;
  defenseHpIv: number;
  manualDefenseHp: number;
  defenseSp: number;
  defenseIv: number;
  manualDefenseStat: number;
  attackNature: NatureModifier;
  defenseNature: NatureModifier;
  attackStage: number;
  defenseStage: number;
  baseMultiplier: number;
  status: StatusCondition;
  weather: WeatherCondition;
  field: FieldCondition;
  attackerAbility: string;
  defenderAbility: string;
  attackerItem: string;
  defenderItem: string;
  critical: boolean;
  charge: boolean;
  helpingHand: boolean;
  battery: boolean;
  powerSpot: boolean;
  flowerGift: boolean;
  steelSpirit: boolean;
  fairyAura: boolean;
  darkAura: boolean;
  auraBreak: boolean;
  ruinSword: boolean;
  ruinTablets: boolean;
  ruinBeads: boolean;
  ruinVessel: boolean;
  spread: boolean;
  reflect: boolean;
  lightScreen: boolean;
  auroraVeil: boolean;
  friendGuard: boolean;
};

const statLabels: Record<StatKey, string> = {
  hp: "H",
  atk: "A",
  def: "B",
  spa: "C",
  spd: "D",
  spe: "S",
};

const natureOptions: { label: string; value: NatureModifier }[] = [
  { label: "하락 0.9x", value: 0.9 },
  { label: "보정 없음", value: 1 },
  { label: "상승 1.1x", value: 1.1 },
];

const pokemonTypes = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
];

const statusOptions: { label: string; value: StatusCondition }[] = [
  { label: "없음", value: "none" },
  { label: "화상", value: "burn" },
];

const weatherOptions: { label: string; value: WeatherCondition }[] = [
  { label: "없음", value: "none" },
  { label: "쾌청", value: "sun" },
  { label: "비", value: "rain" },
  { label: "모래바람", value: "sand" },
  { label: "눈", value: "snow" },
];

const fieldOptions: { label: string; value: FieldCondition }[] = [
  { label: "없음", value: "none" },
  { label: "일렉트릭필드", value: "electric" },
  { label: "그래스필드", value: "grassy" },
  { label: "사이코필드", value: "psychic" },
  { label: "미스트필드", value: "misty" },
];

const commonAbilityOptions = ["없음", "적응력", "천하장사", "선파워", "철주먹", "테크니션", "멀티스케일", "두꺼운지방", "하드록", "필터"];
const commonItemOptions = ["없음", "생명의구슬", "구애머리띠", "구애안경", "달인의띠", "타입 강화", "돌격조끼", "반감열매"];
const fixedBattleLevel = 50;

const strategies = [
  {
    name: "메가 에이스 밸런스",
    note: "메가 에이스 1축 + 속도 제어 + 교체 안정성을 동시에 챙기는 표준형.",
    slots: ["Mega Ace", "Speed Control", "Pivot", "Breaker", "Defensive Glue", "Cleaner"],
  },
  {
    name: "트릭룸 컨트롤",
    note: "저속 고화력 포켓몬을 중심으로 턴 압축과 후반 정리를 노리는 구조.",
    slots: ["Setter", "Slow Attacker", "Redirect", "Wallbreaker", "Reset", "Endgame"],
  },
  {
    name: "빠른 공격형",
    note: "선공 압박과 2타 범위를 넓혀 상대 선출을 강제하는 대면 중심 구조.",
    slots: ["Lead", "Fast Nuke", "Priority", "Coverage", "Anti Setup", "Cleaner"],
  },
  {
    name: "날씨 사이클",
    note: "날씨 시동과 교체 압박을 이용해 유리한 데미지 교환을 반복한다.",
    slots: ["Weather Setter", "Abuser", "Pivot", "Check", "Utility", "Closer"],
  },
];

const roleCycle = ["Mega Ace", "Special Nuke", "Pivot", "Defensive Glue", "Breaker", "Support Answer", "Speed Control", "Cleaner"];

const defaultMovesByType: Record<string, string> = {
  Dragon: "Dragon Claw",
  Flying: "Fly",
  Normal: "Extreme Speed",
  Fairy: "Moonblast",
  Psychic: "Psychic",
  Rock: "Power Gem",
  Water: "Surf",
  Fire: "Flamethrower",
  Dark: "Kowtow Cleave",
  Poison: "Sludge Bomb",
  Steel: "Iron Head",
  Ground: "Earth Power",
  Grass: "Energy Ball",
  Electric: "Thunderbolt",
  Bug: "Bug Buzz",
  Fighting: "Close Combat",
  Ghost: "Shadow Ball",
  Ice: "Ice Beam",
};

function defaultSpFor(pokemon: ChampionsPokemon): Record<StatKey, number> {
  const attackingStat = pokemon.base.atk >= pokemon.base.spa ? "atk" : "spa";
  const spread: Record<StatKey, number> = { hp: 0, atk: 0, def: 0, spa: 0, spd: 2, spe: 32 };
  spread[attackingStat] = 32;
  if (pokemon.base.spe < 60) {
    spread.hp = 32;
    spread.spe = 0;
  }
  return spread;
}

function buildPokemonSet(pokemon: ChampionsPokemon, index: number): Pokemon {
  const primaryMove = defaultMovesByType[pokemon.types[0]] ?? "Extreme Speed";
  const secondaryMove = pokemon.types[1] ? defaultMovesByType[pokemon.types[1]] ?? "Protect" : "Protect";

  return {
    ...pokemon,
    role: roleCycle[index % roleCycle.length],
    ability: pokemon.abilities[0] ?? "unknown",
    item: "미정",
    moves: [primaryMove, secondaryMove, "Protect", "Coverage"],
    sp: defaultSpFor(pokemon),
  };
}

const pokemonPool: Pokemon[] = regulationMAEligiblePokemon.map((pokemon, index) => buildPokemonSet(pokemon, index));

function getPokemonByName(name: string) {
  return pokemonPool.find((pokemon) => pokemon.name === name);
}

function resolveSavedPokemonIds(savedTeam: SavedTeam) {
  if (savedTeam.pokemonIds) return savedTeam.pokemonIds;
  return (savedTeam.pokemonNames ?? [])
    .map((name) => getPokemonByName(name)?.id)
    .filter((id): id is string => Boolean(id));
}

const initialTeamNames = ["Dragonite", "Gardevoir", "Incineroar", "Farigiraf", "Glimmora", "Pelipper"];
const initialTeam = initialTeamNames.map((name) => getPokemonByName(name)).filter((pokemon): pokemon is Pokemon => Boolean(pokemon));

const moves: Move[] = [
  { name: "Dragon Claw", displayName: "드래곤클로", type: "Dragon", power: 80, class: "physical" },
  { name: "Fly", displayName: "공중날기", type: "Flying", power: 90, class: "physical" },
  { name: "Extreme Speed", displayName: "신속", type: "Normal", power: 80, class: "physical" },
  { name: "Moonblast", displayName: "문포스", type: "Fairy", power: 95, class: "special" },
  { name: "Psychic", displayName: "사이코키네시스", type: "Psychic", power: 90, class: "special" },
  { name: "Power Gem", displayName: "파워젬", type: "Rock", power: 80, class: "special" },
  { name: "Surf", displayName: "파도타기", type: "Water", power: 90, class: "special" },
  { name: "Flamethrower", displayName: "화염방사", type: "Fire", power: 90, class: "special" },
  { name: "Kowtow Cleave", displayName: "도각참", type: "Dark", power: 85, class: "physical" },
  { name: "Sludge Bomb", displayName: "오물폭탄", type: "Poison", power: 90, class: "special" },
  { name: "Iron Head", displayName: "아이언헤드", type: "Steel", power: 80, class: "physical" },
  { name: "Earth Power", displayName: "대지의힘", type: "Ground", power: 90, class: "special" },
  { name: "Energy Ball", displayName: "에너지볼", type: "Grass", power: 90, class: "special" },
  { name: "Thunderbolt", displayName: "10만볼트", type: "Electric", power: 90, class: "special" },
  { name: "Bug Buzz", displayName: "벌레의야단법석", type: "Bug", power: 90, class: "special" },
  { name: "Close Combat", displayName: "인파이트", type: "Fighting", power: 120, class: "physical" },
  { name: "Shadow Ball", displayName: "섀도볼", type: "Ghost", power: 80, class: "special" },
  { name: "Ice Beam", displayName: "냉동빔", type: "Ice", power: 90, class: "special" },
];

const moveNameKoFallback: Record<string, string> = {
  Protect: "방어",
  Coverage: "견제기",
  "Fake Out": "속이기",
  "Icy Wind": "얼어붙은바람",
  Tailwind: "순풍",
};

const abilityNameKoOverrides: Record<string, string> = {
  "armor-tail": "테일아머",
  "beast-boost": "비스트부스트",
  "big-pecks": "부풀린가슴",
  "clear-body": "클리어바디",
  "defiant": "오기",
  "drought": "가뭄",
  "drizzle": "잔비",
  "flame-body": "불꽃몸",
  "flash-fire": "타오르는불꽃",
  "friend-guard": "프렌드가드",
  "good-as-gold": "황금몸",
  "intimidate": "위협",
  "lightning-rod": "피뢰침",
  "magic-guard": "매직가드",
  "multiscale": "멀티스케일",
  "mold-breaker": "틀깨기",
  "prankster": "짓궂은마음",
  "sharpness": "예리함",
  "solid-rock": "하드록",
  "tailwind": "순풍",
  "technician": "테크니션",
  "toxic-debris": "독치장",
  "unaware": "천진",
};

function abilityKo(ability: string) {
  return abilityNameKoOverrides[ability] ?? regulationMAAbilityNameKo[ability as keyof typeof regulationMAAbilityNameKo] ?? ability;
}

function moveKo(moveName: string) {
  return moves.find((move) => move.name === moveName)?.displayName ?? moveNameKoFallback[moveName] ?? moveName;
}

const typeWeaknessRows = [
  { type: "Rock", weak: 4, resist: 1, note: "메가 망나뇽 축의 최우선 보완 지점" },
  { type: "Ice", weak: 2, resist: 2, note: "망나뇽과 패리퍼 동시 압박" },
  { type: "Fairy", weak: 2, resist: 2, note: "대도각참 유지 시 대응 안정" },
  { type: "Ground", weak: 3, resist: 1, note: "어흥염, 킬라플로르, 코터스 동시 압박" },
  { type: "Electric", weak: 1, resist: 1, note: "패리퍼 운용 시 체크 필요" },
];

const threatList = [
  { name: "메가 프테라", risk: 88, reason: "Rock 압박 + 높은 스피드 라인" },
  { name: "메가 이상해꽃", risk: 64, reason: "수비 사이클과 상태이상으로 템포 지연" },
  { name: "메가 팬텀", risk: 71, reason: "고속 특수 압박과 교체 제한 압박" },
  { name: "키키링", risk: 57, reason: "우선도 차단으로 후반 정리 루트 방해" },
];

const typeChart: Record<string, { super?: string[]; resisted?: string[]; immune?: string[] }> = {
  Normal: { resisted: ["Rock", "Steel"], immune: ["Ghost"] },
  Fire: { super: ["Bug", "Grass", "Ice", "Steel"], resisted: ["Dragon", "Fire", "Rock", "Water"] },
  Water: { super: ["Fire", "Ground", "Rock"], resisted: ["Dragon", "Grass", "Water"] },
  Electric: { super: ["Flying", "Water"], resisted: ["Dragon", "Electric", "Grass"], immune: ["Ground"] },
  Grass: { super: ["Ground", "Rock", "Water"], resisted: ["Bug", "Dragon", "Fire", "Flying", "Grass", "Poison", "Steel"] },
  Ice: { super: ["Dragon", "Flying", "Grass", "Ground"], resisted: ["Fire", "Ice", "Steel", "Water"] },
  Fighting: { super: ["Dark", "Ice", "Normal", "Rock", "Steel"], resisted: ["Bug", "Fairy", "Flying", "Poison", "Psychic"], immune: ["Ghost"] },
  Poison: { super: ["Fairy", "Grass"], resisted: ["Ghost", "Ground", "Poison", "Rock"], immune: ["Steel"] },
  Ground: { super: ["Electric", "Fire", "Poison", "Rock", "Steel"], resisted: ["Bug", "Grass"], immune: ["Flying"] },
  Flying: { super: ["Bug", "Fighting", "Grass"], resisted: ["Electric", "Rock", "Steel"] },
  Psychic: { super: ["Fighting", "Poison"], resisted: ["Psychic", "Steel"], immune: ["Dark"] },
  Bug: { super: ["Dark", "Grass", "Psychic"], resisted: ["Fairy", "Fighting", "Fire", "Flying", "Ghost", "Poison", "Steel"] },
  Rock: { super: ["Bug", "Fire", "Flying", "Ice"], resisted: ["Fighting", "Ground", "Steel"] },
  Ghost: { super: ["Ghost", "Psychic"], resisted: ["Dark"], immune: ["Normal"] },
  Dragon: { super: ["Dragon"], resisted: ["Steel"], immune: ["Fairy"] },
  Dark: { super: ["Ghost", "Psychic"], resisted: ["Dark", "Fairy", "Fighting"] },
  Steel: { super: ["Fairy", "Ice", "Rock"], resisted: ["Electric", "Fire", "Steel", "Water"] },
  Fairy: { super: ["Dark", "Dragon", "Fighting"], resisted: ["Fire", "Poison", "Steel"] },
};

function toStat(base: number, sp: number, stat: StatKey, level = fixedBattleLevel, nature: NatureModifier = 1, iv = 31) {
  const spAsEv = sp * 8;
  if (stat === "hp") {
    return Math.floor(((2 * base + iv + Math.floor(spAsEv / 4)) * level) / 100) + level + 10;
  }

  return Math.floor((Math.floor(((2 * base + iv + Math.floor(spAsEv / 4)) * level) / 100) + 5) * nature);
}

function spreadText(sp: Record<StatKey, number>) {
  return (Object.keys(sp) as StatKey[])
    .filter((key) => sp[key] > 0)
    .map((key) => `${statLabels[key]}${sp[key]}`)
    .join(" ");
}

function stageMultiplier(stage: number) {
  return stage >= 0 ? (2 + stage) / 2 : 2 / (2 + Math.abs(stage));
}

function typeEffectiveness(moveType: string, defenderTypes: string[]) {
  const chart = typeChart[moveType];
  if (!chart) return 1;

  return defenderTypes.reduce((multiplier, defenderType) => {
    if (chart.immune?.includes(defenderType)) return multiplier * 0;
    if (chart.super?.includes(defenderType)) return multiplier * 2;
    if (chart.resisted?.includes(defenderType)) return multiplier * 0.5;
    return multiplier;
  }, 1);
}

function formatMultiplier(value: number) {
  return `${Math.round(value * 100) / 100}x`;
}

function koText(minDamage: number, maxDamage: number, hp: number) {
  if (minDamage >= hp) return "확정 1타";
  if (maxDamage >= hp) return "난수 1타";
  if (minDamage * 2 >= hp) return "확정 2타";
  if (maxDamage * 2 >= hp) return "난수 2타";
  if (minDamage * 3 >= hp) return "확정 3타";
  return "3타 이상";
}

function weatherMultiplier(weather: WeatherCondition, moveType: string) {
  if (weather === "sun" && moveType === "Fire") return 1.5;
  if (weather === "sun" && moveType === "Water") return 0.5;
  if (weather === "rain" && moveType === "Water") return 1.5;
  if (weather === "rain" && moveType === "Fire") return 0.5;
  return 1;
}

function fieldMultiplier(field: FieldCondition, moveType: string) {
  if (field === "electric" && moveType === "Electric") return 1.3;
  if (field === "grassy" && moveType === "Grass") return 1.3;
  if (field === "psychic" && moveType === "Psychic") return 1.3;
  if (field === "misty" && moveType === "Dragon") return 0.5;
  return 1;
}

function attackerAbilityMultiplier(ability: string, move: Move, moveType: string) {
  if (ability === "적응력") return moveType === move.type ? 4 / 3 : 1;
  if (ability === "천하장사" && move.class === "physical") return 2;
  if (ability === "선파워" && move.class === "special") return 1.5;
  if (ability === "철주먹" && ["Fighting", "Steel", "Ice", "Electric", "Fire"].includes(moveType)) return 1.2;
  if (ability === "테크니션" && move.power <= 60) return 1.5;
  return 1;
}

function defenderAbilityMultiplier(ability: string, moveType: string) {
  if (ability === "멀티스케일") return 0.5;
  if (ability === "두꺼운지방" && ["Fire", "Ice"].includes(moveType)) return 0.5;
  if (ability === "하드록" || ability === "필터") return 0.75;
  return 1;
}

function itemMultiplier(item: string, move: Move, moveType: string, side: "attack" | "defense") {
  if (side === "attack") {
    if (item === "생명의구슬") return 1.3;
    if (item === "구애머리띠" && move.class === "physical") return 1.5;
    if (item === "구애안경" && move.class === "special") return 1.5;
    if (item === "달인의띠") return 1.2;
    if (item === "타입 강화") return 1.2;
  }

  if (side === "defense") {
    if (item === "돌격조끼" && move.class === "special") return 0.67;
    if (item === "반감열매" && typeChart[moveType]) return 0.5;
  }

  return 1;
}

function damageRange(attacker: Pokemon, defender: Pokemon, move: Move, options: DamageOptions) {
  const attackStat = move.class === "physical" ? "atk" : "spa";
  const defenseStat = move.class === "physical" ? "def" : "spd";
  const attackStage = options.critical ? Math.max(options.attackStage, 0) : options.attackStage;
  const defenseStage = options.critical ? Math.min(options.defenseStage, 0) : options.defenseStage;
  const rawAtk = options.manualAttackStat || toStat(attacker.base[attackStat], options.attackSp, attackStat, fixedBattleLevel, options.attackNature, options.attackIv);
  const rawDef = options.manualDefenseStat || toStat(defender.base[defenseStat], options.defenseSp, defenseStat, fixedBattleLevel, options.defenseNature, options.defenseIv);
  const atk = Math.max(1, Math.floor(rawAtk * stageMultiplier(attackStage)));
  const def = Math.max(1, Math.floor(rawDef * stageMultiplier(defenseStage)));
  const defenderHp = options.manualDefenseHp || toStat(defender.base.hp, options.defenseHpSp, "hp", fixedBattleLevel, 1, options.defenseHpIv);
  const moveType = options.moveType;
  const movePower = options.movePower || move.power;
  const stab = attacker.types.includes(moveType) ? 1.5 : 1;
  const effectiveness = typeEffectiveness(moveType, defender.types);
  const burn = move.class === "physical" && options.status === "burn" ? 0.5 : 1;
  const spread = options.spread ? 0.75 : 1;
  const activeScreen = move.class === "physical" ? options.reflect || options.auroraVeil : options.lightScreen || options.auroraVeil;
  const screen = activeScreen ? 0.5 : 1;
  const critical = options.critical ? 1.5 : 1;
  const charge = options.charge && moveType === "Electric" ? 2 : 1;
  const helpingHand = options.helpingHand ? 1.5 : 1;
  const battery = options.battery && move.class === "special" ? 1.3 : 1;
  const powerSpot = options.powerSpot ? 1.3 : 1;
  const flowerGift = options.flowerGift && move.class === "physical" ? 1.5 : 1;
  const steelSpirit = options.steelSpirit && moveType === "Steel" ? 1.5 : 1;
  const auraTypeBoost = (options.fairyAura && moveType === "Fairy") || (options.darkAura && moveType === "Dark") ? 4 / 3 : 1;
  const aura = options.auraBreak && auraTypeBoost > 1 ? 0.75 : auraTypeBoost;
  const ruinAttack = options.ruinTablets && move.class === "physical" ? 0.75 : options.ruinVessel && move.class === "special" ? 0.75 : 1;
  const ruinDefense = options.ruinSword && move.class === "physical" ? 4 / 3 : options.ruinBeads && move.class === "special" ? 4 / 3 : 1;
  const friendGuard = options.friendGuard ? 0.75 : 1;
  const weather = weatherMultiplier(options.weather, moveType);
  const field = fieldMultiplier(options.field, moveType);
  const attackAbility = attackerAbilityMultiplier(options.attackerAbility, move, moveType);
  const defenseAbility = defenderAbilityMultiplier(options.defenderAbility, moveType);
  const attackItem = itemMultiplier(options.attackerItem, move, moveType, "attack");
  const defenseItem = itemMultiplier(options.defenderItem, move, moveType, "defense");
  const modifier =
    options.baseMultiplier *
    stab *
    effectiveness *
    burn *
    spread *
    screen *
    critical *
    charge *
    helpingHand *
    battery *
    powerSpot *
    flowerGift *
    steelSpirit *
    aura *
    ruinAttack *
    ruinDefense *
    friendGuard *
    weather *
    field *
    attackAbility *
    defenseAbility *
    attackItem *
    defenseItem;
  const baseDamage = Math.floor(Math.floor((Math.floor((2 * fixedBattleLevel) / 5 + 2) * movePower * atk) / def) / 50) + 2;
  const rolls = Array.from({ length: 16 }, (_, index) => {
    const random = 85 + index;
    return Math.max(1, Math.floor(baseDamage * modifier * random / 100));
  });

  return {
    min: rolls[0],
    max: rolls[rolls.length - 1],
    rolls,
    defenderHp,
    attackStat,
    defenseStat,
    atk,
    def,
    rawAtk,
    rawDef,
    stab,
    effectiveness,
    modifier,
    koChance: rolls.filter((roll) => roll >= defenderHp).length,
    decisionPower: Math.floor(rawAtk * movePower * stab * options.baseMultiplier),
    bulk: Math.floor(defenderHp * rawDef),
  };
}

export default function HomePage() {
  const { data: session } = useSession();
  const [selectedStrategy, setSelectedStrategy] = useState(strategies[0]);
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [team, setTeam] = useState<Pokemon[]>(initialTeam.length === 6 ? initialTeam : pokemonPool.slice(0, 6));
  const [attackerId, setAttackerId] = useState((getPokemonByName("Dragonite") ?? pokemonPool[0]).id);
  const [defenderId, setDefenderId] = useState((getPokemonByName("Incineroar") ?? pokemonPool[2]).id);
  const [moveName, setMoveName] = useState(moves[0].name);
  const [calcOptions, setCalcOptions] = useState<DamageOptions>({
    moveType: moves[0].type,
    movePower: moves[0].power,
    attackSp: 32,
    attackIv: 31,
    manualAttackStat: 0,
    defenseHpSp: 32,
    defenseHpIv: 31,
    manualDefenseHp: 0,
    defenseSp: 0,
    defenseIv: 31,
    manualDefenseStat: 0,
    attackNature: 1,
    defenseNature: 1,
    attackStage: 0,
    defenseStage: 0,
    baseMultiplier: 1,
    status: "none",
    weather: "none",
    field: "none",
    attackerAbility: "없음",
    defenderAbility: "없음",
    attackerItem: "없음",
    defenderItem: "없음",
    critical: false,
    charge: false,
    helpingHand: false,
    battery: false,
    powerSpot: false,
    flowerGift: false,
    steelSpirit: false,
    fairyAura: false,
    darkAura: false,
    auraBreak: false,
    ruinSword: false,
    ruinTablets: false,
    ruinBeads: false,
    ruinVessel: false,
    spread: false,
    reflect: false,
    lightScreen: false,
    auroraVeil: false,
    friendGuard: false,
  });
  const [savedTeams, setSavedTeams] = useState<SavedTeam[]>([]);
  const [saveMessage, setSaveMessage] = useState("브라우저 저장소 사용 중");
  const ownerKey = session?.user?.email ?? "guest";
  const storageKey = `champforge:teams:${ownerKey}`;

  const attacker = pokemonPool.find((pokemon) => pokemon.id === attackerId) ?? pokemonPool[0];
  const defender = pokemonPool.find((pokemon) => pokemon.id === defenderId) ?? pokemonPool[1];
  const move = moves.find((item) => item.name === moveName) ?? moves[0];
  const damage = damageRange(attacker, defender, move, calcOptions);
  const damagePercent = {
    min: Math.round((damage.min / damage.defenderHp) * 1000) / 10,
    max: Math.round((damage.max / damage.defenderHp) * 1000) / 10,
  };
  const oneHitChance = Math.round((damage.koChance / damage.rolls.length) * 100);

  const selectedPokemon = team[selectedSlot];

  useEffect(() => {
    let active = true;

    queueMicrotask(() => {
      if (!active) return;
      const rawSavedTeams = window.localStorage.getItem(storageKey);
      if (!rawSavedTeams) {
        setSavedTeams([]);
        return;
      }

      try {
        const parsedTeams = JSON.parse(rawSavedTeams) as SavedTeam[];
        setSavedTeams(parsedTeams);
        setSaveMessage(`${parsedTeams.length}개 파티 불러옴`);
      } catch {
        setSavedTeams([]);
        setSaveMessage("저장 데이터를 읽지 못함");
      }
    });

    return () => {
      active = false;
    };
  }, [storageKey]);

  const teamSummary = useMemo(() => {
    const physical = team.filter((pokemon) =>
      pokemon.moves.some((item) => moves.find((moveItem) => moveItem.name === item)?.class === "physical"),
    ).length;
    const special = team.filter((pokemon) =>
      pokemon.moves.some((item) => moves.find((moveItem) => moveItem.name === item)?.class === "special"),
    ).length;
    const speedControl = team.some((pokemon) => pokemon.moves.includes("Tailwind") || pokemon.moves.includes("Icy Wind"));
    const fakeOut = team.filter((pokemon) => pokemon.moves.includes("Fake Out")).length;

    return { physical, special, speedControl, fakeOut };
  }, [team]);

  function updateSlot(id: string) {
    const nextPokemon = pokemonPool.find((pokemon) => pokemon.id === id);
    if (!nextPokemon) return;
    setTeam((current) => current.map((pokemon, index) => (index === selectedSlot ? nextPokemon : pokemon)));
  }

  function updateCalcOption<K extends keyof DamageOptions>(key: K, value: DamageOptions[K]) {
    setCalcOptions((current) => ({ ...current, [key]: value }));
  }

  function updateSelectedMove(nextMoveName: string) {
    const nextMove = moves.find((item) => item.name === nextMoveName) ?? moves[0];
    setMoveName(nextMove.name);
    setCalcOptions((current) => ({ ...current, moveType: nextMove.type, movePower: nextMove.power }));
  }

  function saveCurrentTeam() {
    const nextTeam: SavedTeam = {
      id: `${Date.now()}-${selectedStrategy.name}`,
      label: `${selectedStrategy.name} ${savedTeams.length + 1}`,
      strategyName: selectedStrategy.name,
      pokemonIds: team.map((pokemon) => pokemon.id),
      createdAt: new Date().toISOString(),
      owner: ownerKey,
    };

    setSavedTeams((current) => {
      const nextTeams = [nextTeam, ...current];
      window.localStorage.setItem(storageKey, JSON.stringify(nextTeams));
      return nextTeams;
    });
    setSaveMessage(`${nextTeam.label} 저장됨`);
  }

  function loadSavedTeam(savedTeam: SavedTeam) {
    const nextStrategy = strategies.find((strategy) => strategy.name === savedTeam.strategyName) ?? strategies[0];
    const savedPokemonIds = resolveSavedPokemonIds(savedTeam);
    const nextTeam = savedPokemonIds
      .map((id) => pokemonPool.find((pokemon) => pokemon.id === id))
      .filter((pokemon): pokemon is Pokemon => Boolean(pokemon));

    if (nextTeam.length !== 6) {
      setSaveMessage("저장 파티 데이터를 복원하지 못함");
      return;
    }

    setSelectedStrategy(nextStrategy);
    setTeam(nextTeam);
    setSelectedSlot(0);
    setSaveMessage(`${savedTeam.label} 불러옴`);
  }

  return (
    <main className="appShell">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="ChampForge 홈">
          <span className="brandMark">CF</span>
          <span>
            ChampForge
            <small>Champions Battle Lab</small>
          </span>
        </a>

        <label className="searchBox">
          <Search size={18} />
          <input placeholder="포켓몬, 기술, 도구 검색" />
        </label>

        <nav className="sideNav" aria-label="주요 기능">
          <a href="#builder" className="active"><Swords size={17} /> 팀 빌더</a>
          <a href="#damage"><Calculator size={17} /> 데미지 계산기</a>
          <a href="#counters"><Crosshair size={17} /> 카운터 추천</a>
          <a href="#data"><Database size={17} /> 데이터 허브</a>
        </nav>

        <section className="savedTeams" aria-label="저장 파티">
          <div className="miniHeader">
            <span>저장 파티 · {savedTeams.length}</span>
            <button onClick={saveCurrentTeam} aria-label="현재 파티 저장">
              <Save size={16} />
            </button>
          </div>
          <p className="saveMessage">{saveMessage}</p>
          {savedTeams.length === 0 ? (
            <div className="emptySavedTeam">아직 저장된 파티가 없습니다.</div>
          ) : null}
          {savedTeams.map((savedTeam) => (
            <button key={savedTeam.id} className="savedTeam" onClick={() => loadSavedTeam(savedTeam)}>
              <span>{savedTeam.label}</span>
              <small>{resolveSavedPokemonIds(savedTeam).slice(0, 3).map((id) => pokemonPool.find((pokemon) => pokemon.id === id)?.displayName ?? id).join(" · ")}</small>
            </button>
          ))}
        </section>
      </aside>

      <section className="mainWorkspace" id="top">
        <header className="topBar">
          <div>
            <p className="eyebrow">Regulation M-A · Lv.50 · SP Format</p>
            <h1>목표 전략에서 바로 계산까지 이어지는 챔피언스 워크벤치</h1>
            <p className="dataCount">현재 eligible {REGULATION_MA_ELIGIBLE_COUNT}마리 · 메가진화 {REGULATION_MA_MEGA_COUNT}종 데이터 사용 중</p>
          </div>
          <AuthPanel onSaveTeam={saveCurrentTeam} savedTeamCount={savedTeams.length} />
        </header>

        <section className="strategyStrip" aria-label="목표 전략 선택">
          {strategies.map((strategy) => (
            <button
              className={strategy.name === selectedStrategy.name ? "strategyChip selected" : "strategyChip"}
              key={strategy.name}
              onClick={() => setSelectedStrategy(strategy)}
            >
              <span>{strategy.name}</span>
              <small>{strategy.slots.slice(0, 3).join(" · ")}</small>
            </button>
          ))}
        </section>

        <section className="workGrid" id="builder">
          <section className="panel teamPanel">
            <div className="panelHeader">
              <div>
                <p className="eyebrow">Team Builder</p>
                <h2>{selectedStrategy.name}</h2>
              </div>
              <span className="statusPill">localStorage 저장</span>
            </div>
            <p className="panelLead">{selectedStrategy.note}</p>
            <div className="teamSlots">
              {team.map((pokemon, index) => (
                <button
                  className={index === selectedSlot ? "teamSlot selected" : "teamSlot"}
                  key={`${pokemon.name}-${index}`}
                  onClick={() => setSelectedSlot(index)}
                >
                  <span className="slotNumber">{index + 1}</span>
                  <span className="pokemonPortrait">
                    {/* 외부 공식 아트워크를 프로토타입에서 직접 표시한다. */}
                    <Image src={pokemon.image} alt={`${pokemon.displayName} 이미지`} width={52} height={52} />
                  </span>
                  <span>
                    <strong>{pokemon.displayName}</strong>
                    <small>No.{pokemon.dex} · {selectedStrategy.slots[index] ?? pokemon.role}</small>
                  </span>
                  <span className="typeStack">
                    {pokemon.types.map((type) => (
                      <i className={`typeBadge type${type}`} key={type}>{type}</i>
                    ))}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="panel editorPanel">
            <div className="panelHeader">
              <div>
                <p className="eyebrow">Set Editor</p>
                <h2>{selectedPokemon.displayName}</h2>
              </div>
              <span className="spreadBadge">{spreadText(selectedPokemon.sp)}</span>
            </div>

            <div className="selectedPokemonHero">
              <Image
                src={selectedPokemon.image}
                alt={`${selectedPokemon.displayName} 공식 아트워크`}
                width={94}
                height={94}
                priority
              />
              <div>
                <strong>No.{selectedPokemon.dex}</strong>
                <span>{selectedPokemon.name}</span>
              </div>
            </div>

            <label className="fieldLabel">
              포켓몬 교체
              <span className="selectWrap">
                <select value={selectedPokemon.id} onChange={(event) => updateSlot(event.target.value)}>
                  {pokemonPool.map((pokemon) => (
                    <option key={pokemon.id} value={pokemon.id}>No.{pokemon.dex} {pokemon.displayName}</option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </span>
            </label>

            <div className="setMeta">
              <span>특성 · {abilityKo(selectedPokemon.ability)}</span>
              <span>도구 · {selectedPokemon.item}</span>
              <span>역할 · {selectedPokemon.role}</span>
            </div>

            <div className="moveGrid">
              {selectedPokemon.moves.map((item) => (
                <span key={item}>{moveKo(item)}</span>
              ))}
            </div>

            <div className="spGrid" aria-label="스탯 포인트">
              {(Object.keys(selectedPokemon.sp) as StatKey[]).map((key) => (
                <div className="spCell" key={key}>
                  <span>{statLabels[key]}</span>
                  <strong>{selectedPokemon.sp[key]}</strong>
                  <small>{toStat(selectedPokemon.base[key], selectedPokemon.sp[key], key)}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="panel analysisPanel">
            <div className="panelHeader">
              <div>
                <p className="eyebrow">Live Analysis</p>
                <h2>파티 리스크</h2>
              </div>
              <BarChart3 size={24} />
            </div>
            <div className="metricGrid">
              <div><span>물리 압박</span><strong>{teamSummary.physical}/6</strong></div>
              <div><span>특수 압박</span><strong>{teamSummary.special}/6</strong></div>
              <div><span>속도 제어</span><strong>{teamSummary.speedControl ? "있음" : "부족"}</strong></div>
              <div><span>Fake Out</span><strong>{teamSummary.fakeOut}</strong></div>
            </div>
            <div className="weaknessTable">
              {typeWeaknessRows.map((row) => (
                <div className="weaknessRow" key={row.type}>
                  <strong>{row.type}</strong>
                  <span>{row.weak} weak / {row.resist} resist</span>
                  <small>{row.note}</small>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="lowerGrid">
          <section className="panel damagePanel" id="damage">
            <div className="panelHeader">
              <div>
                <p className="eyebrow">Damage Calculator</p>
                <h2>챔피언스 데미지 계산기</h2>
              </div>
              <Calculator size={24} />
            </div>
            <div className="calcControls">
              <label>
                공격자
                <select value={attackerId} onChange={(event) => setAttackerId(event.target.value)}>
                  {pokemonPool.map((pokemon) => <option key={pokemon.id} value={pokemon.id}>No.{pokemon.dex} {pokemon.displayName}</option>)}
                </select>
              </label>
              <label>
                기술
                <select value={moveName} onChange={(event) => updateSelectedMove(event.target.value)}>
                  {moves.map((item) => <option key={item.name} value={item.name}>{item.displayName}</option>)}
                </select>
              </label>
              <label>
                방어자
                <select value={defenderId} onChange={(event) => setDefenderId(event.target.value)}>
                  {pokemonPool.map((pokemon) => <option key={pokemon.id} value={pokemon.id}>No.{pokemon.dex} {pokemon.displayName}</option>)}
                </select>
              </label>
            </div>
            <div className="calcNumberGrid" aria-label="기술 입력">
              <label>
                타입
                <select value={calcOptions.moveType} onChange={(event) => updateCalcOption("moveType", event.target.value)}>
                  {pokemonTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
              <label>
                위력
                <input
                  max={250}
                  min={1}
                  type="number"
                  value={calcOptions.movePower}
                  onChange={(event) => updateCalcOption("movePower", Math.min(250, Math.max(1, Number(event.target.value))) || move.power)}
                />
              </label>
              <label>
                배수
                <input
                  max={9.99}
                  min={0.01}
                  step={0.01}
                  type="number"
                  value={calcOptions.baseMultiplier}
                  onChange={(event) => updateCalcOption("baseMultiplier", Math.min(9.99, Math.max(0.01, Number(event.target.value))) || 1)}
                />
              </label>
              <label>
                상태이상
                <select value={calcOptions.status} onChange={(event) => updateCalcOption("status", event.target.value as StatusCondition)}>
                  {statusOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
            </div>
            <div className="calcSectionTitle">공격 수치</div>
            <div className="calcNumberGrid" aria-label="공격 수치 입력">
              <label>
                공격 SP
                <input
                  max={32}
                  min={0}
                  type="number"
                  value={calcOptions.attackSp}
                  onChange={(event) => updateCalcOption("attackSp", Math.min(32, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                공격 개체값
                <input
                  max={31}
                  min={0}
                  type="number"
                  value={calcOptions.attackIv}
                  onChange={(event) => updateCalcOption("attackIv", Math.min(31, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                실수값 직접 입력
                <input
                  max={999}
                  min={0}
                  type="number"
                  value={calcOptions.manualAttackStat}
                  onChange={(event) => updateCalcOption("manualAttackStat", Math.min(999, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                공격 성격
                <select
                  value={calcOptions.attackNature}
                  onChange={(event) => updateCalcOption("attackNature", Number(event.target.value) as NatureModifier)}
                >
                  {natureOptions.map((option) => <option key={`atk-${option.value}`} value={option.value}>{option.label}</option>)}
                </select>
              </label>
            </div>
            <div className="calcNumberGrid" aria-label="공격 보정 입력">
              <label>
                랭크업
                <input
                  max={6}
                  min={-6}
                  type="number"
                  value={calcOptions.attackStage}
                  onChange={(event) => updateCalcOption("attackStage", Math.min(6, Math.max(-6, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                특성
                <select value={calcOptions.attackerAbility} onChange={(event) => updateCalcOption("attackerAbility", event.target.value)}>
                  {commonAbilityOptions.map((option) => <option key={`atk-ability-${option}`} value={option}>{option}</option>)}
                </select>
              </label>
              <label>
                날씨
                <select value={calcOptions.weather} onChange={(event) => updateCalcOption("weather", event.target.value as WeatherCondition)}>
                  {weatherOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <label>
                도구
                <select value={calcOptions.attackerItem} onChange={(event) => updateCalcOption("attackerItem", event.target.value)}>
                  {commonItemOptions.map((option) => <option key={`atk-item-${option}`} value={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <div className="calcNumberGrid" aria-label="필드 입력">
              <label>
                필드
                <select value={calcOptions.field} onChange={(event) => updateCalcOption("field", event.target.value as FieldCondition)}>
                  {fieldOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <label>
                방어 HP SP
                <input
                  max={32}
                  min={0}
                  type="number"
                  value={calcOptions.defenseHpSp}
                  onChange={(event) => updateCalcOption("defenseHpSp", Math.min(32, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                HP 개체값
                <input
                  max={31}
                  min={0}
                  type="number"
                  value={calcOptions.defenseHpIv}
                  onChange={(event) => updateCalcOption("defenseHpIv", Math.min(31, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                HP 실수값 직접 입력
                <input
                  max={999}
                  min={0}
                  type="number"
                  value={calcOptions.manualDefenseHp}
                  onChange={(event) => updateCalcOption("manualDefenseHp", Math.min(999, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
            </div>
            <div className="calcSectionTitle">방어 수치</div>
            <div className="calcNumberGrid" aria-label="방어 수치 입력">
              <label>
                방어 내구 SP
                <input
                  max={32}
                  min={0}
                  type="number"
                  value={calcOptions.defenseSp}
                  onChange={(event) => updateCalcOption("defenseSp", Math.min(32, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                방어 개체값
                <input
                  max={31}
                  min={0}
                  type="number"
                  value={calcOptions.defenseIv}
                  onChange={(event) => updateCalcOption("defenseIv", Math.min(31, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                방어 실수값 직접 입력
                <input
                  max={999}
                  min={0}
                  type="number"
                  value={calcOptions.manualDefenseStat}
                  onChange={(event) => updateCalcOption("manualDefenseStat", Math.min(999, Math.max(0, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                방어 성격
                <select
                  value={calcOptions.defenseNature}
                  onChange={(event) => updateCalcOption("defenseNature", Number(event.target.value) as NatureModifier)}
                >
                  {natureOptions.map((option) => <option key={`def-${option.value}`} value={option.value}>{option.label}</option>)}
                </select>
              </label>
            </div>
            <div className="calcNumberGrid" aria-label="방어 보정 입력">
              <label>
                방어 랭크업
                <input
                  max={6}
                  min={-6}
                  type="number"
                  value={calcOptions.defenseStage}
                  onChange={(event) => updateCalcOption("defenseStage", Math.min(6, Math.max(-6, Number(event.target.value))) || 0)}
                />
              </label>
              <label>
                방어 특성
                <select value={calcOptions.defenderAbility} onChange={(event) => updateCalcOption("defenderAbility", event.target.value)}>
                  {commonAbilityOptions.map((option) => <option key={`def-ability-${option}`} value={option}>{option}</option>)}
                </select>
              </label>
              <label>
                방어 도구
                <select value={calcOptions.defenderItem} onChange={(event) => updateCalcOption("defenderItem", event.target.value)}>
                  {commonItemOptions.map((option) => <option key={`def-item-${option}`} value={option}>{option}</option>)}
                </select>
              </label>
              <label>
                고정 레벨
                <input disabled value={`Lv.${fixedBattleLevel}`} readOnly />
              </label>
            </div>
            <div className="modifierGrid" aria-label="공격 주요 보정">
              <label>
                <input
                  checked={calcOptions.critical}
                  onChange={(event) => updateCalcOption("critical", event.target.checked)}
                  type="checkbox"
                />
                급소
              </label>
              <label>
                <input
                  checked={calcOptions.charge}
                  onChange={(event) => updateCalcOption("charge", event.target.checked)}
                  type="checkbox"
                />
                충전
              </label>
              <label>
                <input
                  checked={calcOptions.helpingHand}
                  onChange={(event) => updateCalcOption("helpingHand", event.target.checked)}
                  type="checkbox"
                />
                도우미
              </label>
              <label>
                <input
                  checked={calcOptions.battery}
                  onChange={(event) => updateCalcOption("battery", event.target.checked)}
                  type="checkbox"
                />
                배터리
              </label>
              <label>
                <input
                  checked={calcOptions.powerSpot}
                  onChange={(event) => updateCalcOption("powerSpot", event.target.checked)}
                  type="checkbox"
                />
                파워스폿
              </label>
              <label>
                <input
                  checked={calcOptions.flowerGift}
                  onChange={(event) => updateCalcOption("flowerGift", event.target.checked)}
                  type="checkbox"
                />
                플라워기프트
              </label>
              <label>
                <input
                  checked={calcOptions.steelSpirit}
                  onChange={(event) => updateCalcOption("steelSpirit", event.target.checked)}
                  type="checkbox"
                />
                강철정신
              </label>
              <label>
                <input
                  checked={calcOptions.spread}
                  onChange={(event) => updateCalcOption("spread", event.target.checked)}
                  type="checkbox"
                />
                더블 분산
              </label>
            </div>
            <div className="modifierGrid" aria-label="오라와 재앙 보정">
              <label>
                <input checked={calcOptions.fairyAura} onChange={(event) => updateCalcOption("fairyAura", event.target.checked)} type="checkbox" />
                페어리오라
              </label>
              <label>
                <input checked={calcOptions.darkAura} onChange={(event) => updateCalcOption("darkAura", event.target.checked)} type="checkbox" />
                다크오라
              </label>
              <label>
                <input checked={calcOptions.auraBreak} onChange={(event) => updateCalcOption("auraBreak", event.target.checked)} type="checkbox" />
                오라브레이크
              </label>
              <label>
                <input checked={calcOptions.ruinTablets} onChange={(event) => updateCalcOption("ruinTablets", event.target.checked)} type="checkbox" />
                재앙의목간
              </label>
              <label>
                <input checked={calcOptions.ruinSword} onChange={(event) => updateCalcOption("ruinSword", event.target.checked)} type="checkbox" />
                재앙의검
              </label>
              <label>
                <input checked={calcOptions.ruinVessel} onChange={(event) => updateCalcOption("ruinVessel", event.target.checked)} type="checkbox" />
                재앙의그릇
              </label>
              <label>
                <input checked={calcOptions.ruinBeads} onChange={(event) => updateCalcOption("ruinBeads", event.target.checked)} type="checkbox" />
                재앙의구슬
              </label>
            </div>
            <div className="modifierGrid" aria-label="방어 주요 보정">
              <label>
                <input checked={calcOptions.reflect} onChange={(event) => updateCalcOption("reflect", event.target.checked)} type="checkbox" />
                리플렉터
              </label>
              <label>
                <input checked={calcOptions.lightScreen} onChange={(event) => updateCalcOption("lightScreen", event.target.checked)} type="checkbox" />
                빛의장막
              </label>
              <label>
                <input checked={calcOptions.auroraVeil} onChange={(event) => updateCalcOption("auroraVeil", event.target.checked)} type="checkbox" />
                오로라베일
              </label>
              <label>
                <input checked={calcOptions.friendGuard} onChange={(event) => updateCalcOption("friendGuard", event.target.checked)} type="checkbox" />
                프렌드가드
              </label>
            </div>
            <div className="damageResult">
              <div>
                <span>{attacker.displayName}의 {move.displayName}</span>
                <strong>{damage.min} - {damage.max}</strong>
                <small>{defender.displayName} HP {damage.defenderHp} 기준 {damagePercent.min}% - {damagePercent.max}%</small>
              </div>
              <div className="koBox">
                <strong>{koText(damage.min, damage.max, damage.defenderHp)}</strong>
                <small>1타 난수 {damage.koChance}/{damage.rolls.length} · {oneHitChance}%</small>
              </div>
            </div>
            <div className="calcBreakdown">
              <span>{damage.attackStat.toUpperCase()} {damage.atk}</span>
              <span>{damage.defenseStat.toUpperCase()} {damage.def}</span>
              <span>결정력 {damage.decisionPower}</span>
              <span>내구력 {damage.bulk}</span>
              <span>STAB {formatMultiplier(damage.stab)}</span>
              <span>상성 {formatMultiplier(damage.effectiveness)}</span>
              <span>총 보정 {formatMultiplier(damage.modifier)}</span>
            </div>
            <div className="rollGrid" aria-label="데미지 난수 16단계">
              {damage.rolls.map((roll, index) => (
                <span key={`${roll}-${index}`}>{roll}</span>
              ))}
            </div>
            <p className="calcAssumption">계산 가정은 챔피언스 Lv.{fixedBattleLevel} 고정, SP×8을 EV 상당값으로 환산하는 현재 ChampForge 모델입니다. 실수값을 직접 입력하면 SP와 개체값 계산보다 우선합니다.</p>
          </section>

          <section className="panel counterPanel" id="counters">
            <div className="panelHeader">
              <div>
                <p className="eyebrow">Counter Recommender</p>
                <h2>현재 파티 위협도</h2>
              </div>
              <Target size={24} />
            </div>
            <div className="threatList">
              {threatList.map((threat) => (
                <article className="threatItem" key={threat.name}>
                  <div>
                    <strong>{threat.name}</strong>
                    <small>{threat.reason}</small>
                  </div>
                  <meter min="0" max="100" value={threat.risk} />
                  <span>{threat.risk}</span>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="dataGrid" id="data">
          <article className="dataTile">
            <Shield size={22} />
            <strong>SP 우선 데이터 모델</strong>
            <span>UI와 저장값은 `H32 A32 S2` 표기를 1급 값으로 다룬다.</span>
          </article>
          <article className="dataTile">
            <Zap size={22} />
            <strong>룰 버전 고정</strong>
            <span>팀마다 Regulation 버전을 저장해 계산 결과 재현성을 확보한다.</span>
          </article>
          <article className="dataTile">
            <Activity size={22} />
            <strong>검증 대기 항목</strong>
            <span>인게임 공식과 공개 계산기 비교 테스트가 필요하다.</span>
          </article>
        </section>
      </section>
    </main>
  );
}
