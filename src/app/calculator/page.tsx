"use client";
// 포켓몬 챔피언스 데미지 계산기 전용 페이지

import Link from "next/link";
import { useMemo, useState } from "react";
import { Calculator, Database, Home, RotateCcw, Shield, Swords, Zap } from "lucide-react";
import {
  REGULATION_MA_ELIGIBLE_COUNT,
  REGULATION_MA_MEGA_COUNT,
  regulationMAEligiblePokemon,
  type ChampionsPokemon,
} from "@/data/champions-regulation-ma";

type StatKey = "hp" | "atk" | "def" | "spa" | "spd" | "spe";
type DamageClass = "physical" | "special";
type NatureModifier = 0.9 | 1 | 1.1;
type StatusCondition = "none" | "burn";
type WeatherCondition = "none" | "sun" | "rain" | "sand" | "snow";
type FieldCondition = "none" | "electric" | "grassy" | "psychic" | "misty";

type Move = {
  name: string;
  displayName: string;
  type: string;
  power: number;
  class: DamageClass;
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

const fixedBattleLevel = 50;
const statLabels: Record<StatKey, string> = { hp: "H", atk: "A", def: "B", spa: "C", spd: "D", spe: "S" };

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

const natureOptions: { label: string; value: NatureModifier }[] = [
  { label: "하락 0.9x", value: 0.9 },
  { label: "보정 없음", value: 1 },
  { label: "상승 1.1x", value: 1.1 },
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

function initialOptions(): DamageOptions {
  return {
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
  };
}

function toStat(base: number, sp: number, stat: StatKey, nature: NatureModifier = 1, iv = 31) {
  const spAsEv = sp * 8;
  if (stat === "hp") {
    return Math.floor(((2 * base + iv + Math.floor(spAsEv / 4)) * fixedBattleLevel) / 100) + fixedBattleLevel + 10;
  }

  return Math.floor((Math.floor(((2 * base + iv + Math.floor(spAsEv / 4)) * fixedBattleLevel) / 100) + 5) * nature);
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

function itemMultiplier(item: string, move: Move, side: "attack" | "defense") {
  if (side === "attack") {
    if (item === "생명의구슬") return 1.3;
    if (item === "구애머리띠" && move.class === "physical") return 1.5;
    if (item === "구애안경" && move.class === "special") return 1.5;
    if (item === "달인의띠") return 1.2;
    if (item === "타입 강화") return 1.2;
  }

  if (side === "defense") {
    if (item === "돌격조끼" && move.class === "special") return 0.67;
    if (item === "반감열매") return 0.5;
  }

  return 1;
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

function damageRange(attacker: ChampionsPokemon, defender: ChampionsPokemon, move: Move, options: DamageOptions) {
  const attackStat = move.class === "physical" ? "atk" : "spa";
  const defenseStat = move.class === "physical" ? "def" : "spd";
  const attackStage = options.critical ? Math.max(options.attackStage, 0) : options.attackStage;
  const defenseStage = options.critical ? Math.min(options.defenseStage, 0) : options.defenseStage;
  const rawAtk = options.manualAttackStat || toStat(attacker.base[attackStat], options.attackSp, attackStat, options.attackNature, options.attackIv);
  const rawDef = options.manualDefenseStat || toStat(defender.base[defenseStat], options.defenseSp, defenseStat, options.defenseNature, options.defenseIv);
  const atk = Math.max(1, Math.floor(rawAtk * stageMultiplier(attackStage)));
  const def = Math.max(1, Math.floor(rawDef * stageMultiplier(defenseStage)));
  const defenderHp = options.manualDefenseHp || toStat(defender.base.hp, options.defenseHpSp, "hp", 1, options.defenseHpIv);
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
    weatherMultiplier(options.weather, moveType) *
    fieldMultiplier(options.field, moveType) *
    attackerAbilityMultiplier(options.attackerAbility, move, moveType) *
    defenderAbilityMultiplier(options.defenderAbility, moveType) *
    itemMultiplier(options.attackerItem, move, "attack") *
    itemMultiplier(options.defenderItem, move, "defense");
  const baseDamage = Math.floor(Math.floor((Math.floor((2 * fixedBattleLevel) / 5 + 2) * movePower * atk) / def) / 50) + 2;
  const rolls = Array.from({ length: 16 }, (_, index) => Math.max(1, Math.floor(baseDamage * modifier * (85 + index) / 100)));

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

function clampNumber(value: string, min: number, max: number, fallback: number) {
  const nextValue = Number(value);
  if (Number.isNaN(nextValue)) return fallback;
  return Math.min(max, Math.max(min, nextValue));
}

function defaultSpFor(pokemon: ChampionsPokemon, moveClass: DamageClass) {
  const attackStat = moveClass === "physical" ? "atk" : "spa";
  const defenseStat = moveClass === "physical" ? "def" : "spd";

  return {
    attackSp: pokemon.base[attackStat] >= 90 ? 32 : 0,
    defenseSp: pokemon.base[defenseStat] >= 90 ? 32 : 0,
    defenseHpSp: 32,
  };
}

export default function CalculatorPage() {
  const [attackerId, setAttackerId] = useState("dragonite");
  const [defenderId, setDefenderId] = useState("incineroar");
  const [moveName, setMoveName] = useState(moves[0].name);
  const [options, setOptions] = useState<DamageOptions>(initialOptions);
  const attacker = regulationMAEligiblePokemon.find((pokemon) => pokemon.id === attackerId) ?? regulationMAEligiblePokemon[0];
  const defender = regulationMAEligiblePokemon.find((pokemon) => pokemon.id === defenderId) ?? regulationMAEligiblePokemon[1];
  const move = moves.find((item) => item.name === moveName) ?? moves[0];
  const damage = useMemo(() => damageRange(attacker, defender, move, options), [attacker, defender, move, options]);
  const damagePercent = {
    min: Math.round((damage.min / damage.defenderHp) * 1000) / 10,
    max: Math.round((damage.max / damage.defenderHp) * 1000) / 10,
  };
  const oneHitChance = Math.round((damage.koChance / damage.rolls.length) * 100);

  function updateOption<K extends keyof DamageOptions>(key: K, value: DamageOptions[K]) {
    setOptions((current) => ({ ...current, [key]: value }));
  }

  function updateMove(nextMoveName: string) {
    const nextMove = moves.find((item) => item.name === nextMoveName) ?? moves[0];
    const nextAttackerSp = defaultSpFor(attacker, nextMove.class);
    const nextDefenderSp = defaultSpFor(defender, nextMove.class);
    setMoveName(nextMove.name);
    setOptions((current) => ({
      ...current,
      moveType: nextMove.type,
      movePower: nextMove.power,
      attackSp: nextAttackerSp.attackSp,
      defenseSp: nextDefenderSp.defenseSp,
      defenseHpSp: nextDefenderSp.defenseHpSp,
      manualAttackStat: 0,
      manualDefenseHp: 0,
      manualDefenseStat: 0,
    }));
  }

  function updateAttacker(nextAttackerId: string) {
    const nextAttacker = regulationMAEligiblePokemon.find((pokemon) => pokemon.id === nextAttackerId) ?? attacker;
    const nextSp = defaultSpFor(nextAttacker, move.class);
    setAttackerId(nextAttacker.id);
    setOptions((current) => ({ ...current, attackSp: nextSp.attackSp, manualAttackStat: 0 }));
  }

  function updateDefender(nextDefenderId: string) {
    const nextDefender = regulationMAEligiblePokemon.find((pokemon) => pokemon.id === nextDefenderId) ?? defender;
    const nextSp = defaultSpFor(nextDefender, move.class);
    setDefenderId(nextDefender.id);
    setOptions((current) => ({
      ...current,
      defenseHpSp: nextSp.defenseHpSp,
      defenseSp: nextSp.defenseSp,
      manualDefenseHp: 0,
      manualDefenseStat: 0,
    }));
  }

  return (
    <main className="calculatorPage">
      <aside className="calcSidebar">
        <Link className="brand" href="/">
          <span className="brandMark">CF</span>
          <span>
            ChampForge
            <small>Damage Lab</small>
          </span>
        </Link>
        <nav className="sideNav" aria-label="계산기 탐색">
          <Link href="/"><Home size={17} /> 워크벤치</Link>
          <Link className="active" href="/calculator"><Calculator size={17} /> 계산기</Link>
          <a href="#result"><Zap size={17} /> 결과</a>
          <a href="#notes"><Database size={17} /> 검증 메모</a>
        </nav>
        <section className="calcNote" id="notes">
          <strong>아직 완벽하지 않은 부분</strong>
          <span>챔피언스 공식 검증, 전체 합법 기술 DB, 특성/도구 개별 예외, 고정 데미지와 복수 타격 처리는 추가 작업이 필요합니다.</span>
        </section>
      </aside>

      <section className="calculatorWorkspace">
        <header className="calculatorHero">
          <p className="eyebrow">Regulation M-A · Lv.{fixedBattleLevel} fixed · SP Format</p>
          <h1>챔피언스 데미지 계산기</h1>
          <p>smartnuo식 입력 밀도를 기준으로 공격 수치, 방어 수치, 필드 보정, 오라와 재앙 계열을 한 화면에서 계산합니다.</p>
          <div className="calculatorStats">
            <span>eligible {REGULATION_MA_ELIGIBLE_COUNT}</span>
            <span>mega {REGULATION_MA_MEGA_COUNT}</span>
            <span>roll 16단계</span>
          </div>
        </header>

        <section className="calculatorGrid">
          <section className="panel calculatorFormPanel">
            <div className="panelHeader">
              <div>
                <p className="eyebrow">Attacker</p>
                <h2>공격 측</h2>
              </div>
              <Swords size={24} />
            </div>
            <div className="calcNumberGrid">
              <label>
                포켓몬
                <select value={attackerId} onChange={(event) => updateAttacker(event.target.value)}>
                  {regulationMAEligiblePokemon.map((pokemon) => <option key={pokemon.id} value={pokemon.id}>No.{pokemon.dex} {pokemon.displayName}</option>)}
                </select>
              </label>
              <label>
                기술명
                <select value={moveName} onChange={(event) => updateMove(event.target.value)}>
                  {moves.map((item) => <option key={item.name} value={item.name}>{item.displayName}</option>)}
                </select>
              </label>
              <label>
                타입 수동 보정
                <select value={options.moveType} onChange={(event) => updateOption("moveType", event.target.value)}>
                  {pokemonTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
              <label>
                위력 수동 보정
                <input type="number" min={1} max={250} value={options.movePower} onChange={(event) => updateOption("movePower", clampNumber(event.target.value, 1, 250, move.power))} />
              </label>
            </div>

            <div className="calcSectionTitle">공격 수치</div>
            <div className="calcNumberGrid">
              <label>
                능력치 SP
                <input type="number" min={0} max={32} value={options.attackSp} onChange={(event) => updateOption("attackSp", clampNumber(event.target.value, 0, 32, 0))} />
              </label>
              <label>
                개체값
                <input type="number" min={0} max={31} value={options.attackIv} onChange={(event) => updateOption("attackIv", clampNumber(event.target.value, 0, 31, 31))} />
              </label>
              <label>
                실수값
                <input type="number" min={0} max={999} value={options.manualAttackStat} onChange={(event) => updateOption("manualAttackStat", clampNumber(event.target.value, 0, 999, 0))} />
              </label>
              <label>
                랭크업
                <input type="number" min={-6} max={6} value={options.attackStage} onChange={(event) => updateOption("attackStage", clampNumber(event.target.value, -6, 6, 0))} />
              </label>
              <label>
                성격 보정
                <select value={options.attackNature} onChange={(event) => updateOption("attackNature", Number(event.target.value) as NatureModifier)}>
                  {natureOptions.map((option) => <option key={`atk-${option.value}`} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <label>
                배수
                <input type="number" min={0.01} max={9.99} step={0.01} value={options.baseMultiplier} onChange={(event) => updateOption("baseMultiplier", clampNumber(event.target.value, 0.01, 9.99, 1))} />
              </label>
              <label>
                상태이상
                <select value={options.status} onChange={(event) => updateOption("status", event.target.value as StatusCondition)}>
                  {statusOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <label>
                결정력
                <input disabled readOnly value={damage.decisionPower} />
              </label>
            </div>

            <div className="calcSectionTitle">공격 보정</div>
            <div className="calcNumberGrid">
              <label>
                특성
                <select value={options.attackerAbility} onChange={(event) => updateOption("attackerAbility", event.target.value)}>
                  {commonAbilityOptions.map((option) => <option key={`atk-ability-${option}`} value={option}>{option}</option>)}
                </select>
              </label>
              <label>
                날씨
                <select value={options.weather} onChange={(event) => updateOption("weather", event.target.value as WeatherCondition)}>
                  {weatherOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <label>
                도구
                <select value={options.attackerItem} onChange={(event) => updateOption("attackerItem", event.target.value)}>
                  {commonItemOptions.map((option) => <option key={`atk-item-${option}`} value={option}>{option}</option>)}
                </select>
              </label>
              <label>
                필드
                <select value={options.field} onChange={(event) => updateOption("field", event.target.value as FieldCondition)}>
                  {fieldOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
            </div>
            <ToggleGrid
              items={[
                ["critical", "급소"],
                ["charge", "충전"],
                ["helpingHand", "도우미"],
                ["battery", "배터리"],
                ["powerSpot", "파워스폿"],
                ["flowerGift", "플라워기프트"],
                ["steelSpirit", "강철정신"],
                ["spread", "더블 분산"],
                ["fairyAura", "페어리오라"],
                ["darkAura", "다크오라"],
                ["auraBreak", "오라브레이크"],
                ["ruinTablets", "재앙의목간"],
                ["ruinSword", "재앙의검"],
                ["ruinVessel", "재앙의그릇"],
                ["ruinBeads", "재앙의구슬"],
              ]}
              options={options}
              updateOption={updateOption}
            />
          </section>

          <section className="panel calculatorFormPanel">
            <div className="panelHeader">
              <div>
                <p className="eyebrow">Defender</p>
                <h2>방어 측</h2>
              </div>
              <Shield size={24} />
            </div>
            <div className="calcNumberGrid">
              <label>
                포켓몬
                <select value={defenderId} onChange={(event) => updateDefender(event.target.value)}>
                  {regulationMAEligiblePokemon.map((pokemon) => <option key={pokemon.id} value={pokemon.id}>No.{pokemon.dex} {pokemon.displayName}</option>)}
                </select>
              </label>
              <label>
                타입 1
                <input disabled readOnly value={defender.types[0] ?? "-"} />
              </label>
              <label>
                타입 2
                <input disabled readOnly value={defender.types[1] ?? "-"} />
              </label>
              <label>
                레벨
                <input disabled readOnly value={`Lv.${fixedBattleLevel}`} />
              </label>
            </div>

            <div className="calcSectionTitle">체력 수치</div>
            <div className="calcNumberGrid">
              <label>
                HP SP
                <input type="number" min={0} max={32} value={options.defenseHpSp} onChange={(event) => updateOption("defenseHpSp", clampNumber(event.target.value, 0, 32, 0))} />
              </label>
              <label>
                HP 개체값
                <input type="number" min={0} max={31} value={options.defenseHpIv} onChange={(event) => updateOption("defenseHpIv", clampNumber(event.target.value, 0, 31, 31))} />
              </label>
              <label>
                HP 실수값
                <input type="number" min={0} max={999} value={options.manualDefenseHp} onChange={(event) => updateOption("manualDefenseHp", clampNumber(event.target.value, 0, 999, 0))} />
              </label>
              <label>
                최종 HP
                <input disabled readOnly value={damage.defenderHp} />
              </label>
            </div>

            <div className="calcSectionTitle">방어 수치</div>
            <div className="calcNumberGrid">
              <label>
                능력치 SP
                <input type="number" min={0} max={32} value={options.defenseSp} onChange={(event) => updateOption("defenseSp", clampNumber(event.target.value, 0, 32, 0))} />
              </label>
              <label>
                개체값
                <input type="number" min={0} max={31} value={options.defenseIv} onChange={(event) => updateOption("defenseIv", clampNumber(event.target.value, 0, 31, 31))} />
              </label>
              <label>
                실수값
                <input type="number" min={0} max={999} value={options.manualDefenseStat} onChange={(event) => updateOption("manualDefenseStat", clampNumber(event.target.value, 0, 999, 0))} />
              </label>
              <label>
                랭크업
                <input type="number" min={-6} max={6} value={options.defenseStage} onChange={(event) => updateOption("defenseStage", clampNumber(event.target.value, -6, 6, 0))} />
              </label>
              <label>
                성격 보정
                <select value={options.defenseNature} onChange={(event) => updateOption("defenseNature", Number(event.target.value) as NatureModifier)}>
                  {natureOptions.map((option) => <option key={`def-${option.value}`} value={option.value}>{option.label}</option>)}
                </select>
              </label>
              <label>
                내구력
                <input disabled readOnly value={damage.bulk} />
              </label>
              <label>
                특성
                <select value={options.defenderAbility} onChange={(event) => updateOption("defenderAbility", event.target.value)}>
                  {commonAbilityOptions.map((option) => <option key={`def-ability-${option}`} value={option}>{option}</option>)}
                </select>
              </label>
              <label>
                도구
                <select value={options.defenderItem} onChange={(event) => updateOption("defenderItem", event.target.value)}>
                  {commonItemOptions.map((option) => <option key={`def-item-${option}`} value={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <ToggleGrid
              items={[
                ["reflect", "리플렉터"],
                ["lightScreen", "빛의장막"],
                ["auroraVeil", "오로라베일"],
                ["friendGuard", "프렌드가드"],
              ]}
              options={options}
              updateOption={updateOption}
            />
          </section>
        </section>

        <section className="panel calculatorResultPanel" id="result">
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
            {damage.rolls.map((roll, index) => <span key={`${roll}-${index}`}>{roll}</span>)}
          </div>
          <div className="resultActions">
            <button onClick={() => setOptions(initialOptions())}><RotateCcw size={16} /> 보정 초기화</button>
          </div>
        </section>
      </section>
    </main>
  );
}

function ToggleGrid({
  items,
  options,
  updateOption,
}: {
  items: [keyof DamageOptions, string][];
  options: DamageOptions;
  updateOption: <K extends keyof DamageOptions>(key: K, value: DamageOptions[K]) => void;
}) {
  return (
    <div className="modifierGrid">
      {items.map(([key, label]) => (
        <label key={key}>
          <input checked={Boolean(options[key])} onChange={(event) => updateOption(key, event.target.checked as DamageOptions[typeof key])} type="checkbox" />
          {label}
        </label>
      ))}
    </div>
  );
}
