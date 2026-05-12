"use client";
// 챔피언스 팀 빌더와 계산기 프로토타입 화면

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AuthPanel } from "@/components/auth-panel";
import { useSession } from "next-auth/react";
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

type Pokemon = {
  name: string;
  displayName: string;
  dex: number;
  image: string;
  types: string[];
  role: string;
  ability: string;
  item: string;
  moves: string[];
  base: Record<StatKey, number>;
  sp: Record<StatKey, number>;
};

type Move = {
  name: string;
  type: string;
  power: number;
  class: DamageClass;
};

type SavedTeam = {
  id: string;
  label: string;
  strategyName: string;
  pokemonNames: string[];
  createdAt: string;
  owner: string;
};

const statLabels: Record<StatKey, string> = {
  hp: "H",
  atk: "A",
  def: "B",
  spa: "C",
  spd: "D",
  spe: "S",
};

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

const pokemonPool: Pokemon[] = [
  {
    name: "Mega Dragonite",
    displayName: "메가 망나뇽",
    dex: 149,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    types: ["Dragon", "Flying"],
    role: "Mega Ace",
    ability: "Multiscale",
    item: "Dragoninite",
    moves: ["Aerial Rend", "Extreme Speed", "Earthquake", "Protect"],
    base: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    sp: { hp: 0, atk: 32, def: 0, spa: 0, spd: 2, spe: 32 },
  },
  {
    name: "Gardevoir",
    displayName: "가디안",
    dex: 282,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png",
    types: ["Psychic", "Fairy"],
    role: "Special Nuke",
    ability: "Trace",
    item: "Gardevoirite",
    moves: ["Moonblast", "Psychic", "Icy Wind", "Protect"],
    base: { hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80 },
    sp: { hp: 0, atk: 0, def: 2, spa: 32, spd: 0, spe: 32 },
  },
  {
    name: "Incineroar",
    displayName: "어흥염",
    dex: 727,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png",
    types: ["Fire", "Dark"],
    role: "Pivot",
    ability: "Intimidate",
    item: "Safety Goggles",
    moves: ["Fake Out", "Flare Blitz", "Knock Off", "Parting Shot"],
    base: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
    sp: { hp: 32, atk: 0, def: 18, spa: 0, spd: 16, spe: 0 },
  },
  {
    name: "Farigiraf",
    displayName: "키키링",
    dex: 981,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png",
    types: ["Normal", "Psychic"],
    role: "Defensive Glue",
    ability: "Armor Tail",
    item: "Safety Goggles",
    moves: ["Trick Room", "Psychic", "Helping Hand", "Protect"],
    base: { hp: 120, atk: 90, def: 70, spa: 110, spd: 70, spe: 60 },
    sp: { hp: 32, atk: 0, def: 20, spa: 0, spd: 14, spe: 0 },
  },
  {
    name: "Glimmora",
    displayName: "킬라플로르",
    dex: 970,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png",
    types: ["Rock", "Poison"],
    role: "Breaker",
    ability: "Toxic Debris",
    item: "Focus Sash",
    moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"],
    base: { hp: 83, atk: 55, def: 90, spa: 130, spd: 81, spe: 86 },
    sp: { hp: 2, atk: 0, def: 0, spa: 32, spd: 0, spe: 32 },
  },
  {
    name: "Pelipper",
    displayName: "패리퍼",
    dex: 279,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png",
    types: ["Water", "Flying"],
    role: "Support Answer",
    ability: "Drizzle",
    item: "Damp Rock",
    moves: ["Tailwind", "Hurricane", "Weather Ball", "Protect"],
    base: { hp: 60, atk: 50, def: 100, spa: 95, spd: 70, spe: 65 },
    sp: { hp: 24, atk: 0, def: 0, spa: 32, spd: 10, spe: 0 },
  },
  {
    name: "Torkoal",
    displayName: "코터스",
    dex: 324,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png",
    types: ["Fire"],
    role: "Speed Control",
    ability: "Drought",
    item: "Charcoal",
    moves: ["Eruption", "Heat Wave", "Earth Power", "Protect"],
    base: { hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20 },
    sp: { hp: 32, atk: 0, def: 0, spa: 32, spd: 2, spe: 0 },
  },
  {
    name: "Kingambit",
    displayName: "대도각참",
    dex: 983,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png",
    types: ["Dark", "Steel"],
    role: "Cleaner",
    ability: "Defiant",
    item: "Black Glasses",
    moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"],
    base: { hp: 100, atk: 135, def: 120, spa: 60, spd: 85, spe: 50 },
    sp: { hp: 22, atk: 32, def: 4, spa: 0, spd: 8, spe: 0 },
  },
];

const moves: Move[] = [
  { name: "Aerial Rend", type: "Flying", power: 120, class: "physical" },
  { name: "Extreme Speed", type: "Normal", power: 80, class: "physical" },
  { name: "Moonblast", type: "Fairy", power: 95, class: "special" },
  { name: "Psychic", type: "Psychic", power: 90, class: "special" },
  { name: "Power Gem", type: "Rock", power: 80, class: "special" },
  { name: "Weather Ball", type: "Water", power: 100, class: "special" },
  { name: "Eruption", type: "Fire", power: 150, class: "special" },
  { name: "Kowtow Cleave", type: "Dark", power: 85, class: "physical" },
];

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

function toStat(base: number, sp: number, stat: StatKey) {
  const spAsEv = sp * 8;
  if (stat === "hp") {
    return Math.floor(((2 * base + 31 + Math.floor(spAsEv / 4)) * 50) / 100) + 60;
  }

  return Math.floor((Math.floor(((2 * base + 31 + Math.floor(spAsEv / 4)) * 50) / 100) + 5) * 1.0);
}

function spreadText(sp: Record<StatKey, number>) {
  return (Object.keys(sp) as StatKey[])
    .filter((key) => sp[key] > 0)
    .map((key) => `${statLabels[key]}${sp[key]}`)
    .join(" ");
}

function damageRange(attacker: Pokemon, defender: Pokemon, move: Move) {
  const attackStat = move.class === "physical" ? "atk" : "spa";
  const defenseStat = move.class === "physical" ? "def" : "spd";
  const atk = toStat(attacker.base[attackStat], attacker.sp[attackStat], attackStat);
  const def = toStat(defender.base[defenseStat], defender.sp[defenseStat], defenseStat);
  const stab = attacker.types.includes(move.type) ? 1.5 : 1;
  const baseDamage = Math.floor((Math.floor(((Math.floor((2 * 50) / 5 + 2) * move.power * atk) / def) / 50) + 2) * stab);
  return {
    min: Math.floor(baseDamage * 0.85),
    max: baseDamage,
    defenderHp: toStat(defender.base.hp, defender.sp.hp, "hp"),
  };
}

export default function HomePage() {
  const { data: session } = useSession();
  const [selectedStrategy, setSelectedStrategy] = useState(strategies[0]);
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [team, setTeam] = useState<Pokemon[]>(pokemonPool.slice(0, 6));
  const [attackerName, setAttackerName] = useState(pokemonPool[0].name);
  const [defenderName, setDefenderName] = useState(pokemonPool[2].name);
  const [moveName, setMoveName] = useState(moves[0].name);
  const [savedTeams, setSavedTeams] = useState<SavedTeam[]>([]);
  const [saveMessage, setSaveMessage] = useState("브라우저 저장소 사용 중");
  const ownerKey = session?.user?.email ?? "guest";
  const storageKey = `champforge:teams:${ownerKey}`;

  const attacker = pokemonPool.find((pokemon) => pokemon.name === attackerName) ?? pokemonPool[0];
  const defender = pokemonPool.find((pokemon) => pokemon.name === defenderName) ?? pokemonPool[1];
  const move = moves.find((item) => item.name === moveName) ?? moves[0];
  const damage = damageRange(attacker, defender, move);
  const damagePercent = {
    min: Math.round((damage.min / damage.defenderHp) * 1000) / 10,
    max: Math.round((damage.max / damage.defenderHp) * 1000) / 10,
  };

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

  function updateSlot(name: string) {
    const nextPokemon = pokemonPool.find((pokemon) => pokemon.name === name);
    if (!nextPokemon) return;
    setTeam((current) => current.map((pokemon, index) => (index === selectedSlot ? nextPokemon : pokemon)));
  }

  function saveCurrentTeam() {
    const nextTeam: SavedTeam = {
      id: `${Date.now()}-${selectedStrategy.name}`,
      label: `${selectedStrategy.name} ${savedTeams.length + 1}`,
      strategyName: selectedStrategy.name,
      pokemonNames: team.map((pokemon) => pokemon.name),
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
    const nextTeam = savedTeam.pokemonNames
      .map((name) => pokemonPool.find((pokemon) => pokemon.name === name))
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
              <small>{savedTeam.pokemonNames.slice(0, 3).join(" · ")}</small>
            </button>
          ))}
        </section>
      </aside>

      <section className="mainWorkspace" id="top">
        <header className="topBar">
          <div>
            <p className="eyebrow">Regulation M-A · Lv.50 · SP Format</p>
            <h1>목표 전략에서 바로 계산까지 이어지는 챔피언스 워크벤치</h1>
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
                <select value={selectedPokemon.name} onChange={(event) => updateSlot(event.target.value)}>
                  {pokemonPool.map((pokemon) => (
                    <option key={pokemon.name} value={pokemon.name}>{pokemon.displayName}</option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </span>
            </label>

            <div className="setMeta">
              <span>특성 · {selectedPokemon.ability}</span>
              <span>도구 · {selectedPokemon.item}</span>
              <span>역할 · {selectedPokemon.role}</span>
            </div>

            <div className="moveGrid">
              {selectedPokemon.moves.map((item) => (
                <span key={item}>{item}</span>
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
                <h2>챔피언스식 SP 계산 목업</h2>
              </div>
              <Calculator size={24} />
            </div>
            <div className="calcControls">
              <label>
                공격자
                <select value={attackerName} onChange={(event) => setAttackerName(event.target.value)}>
                  {pokemonPool.map((pokemon) => <option key={pokemon.name} value={pokemon.name}>{pokemon.displayName}</option>)}
                </select>
              </label>
              <label>
                기술
                <select value={moveName} onChange={(event) => setMoveName(event.target.value)}>
                  {moves.map((item) => <option key={item.name}>{item.name}</option>)}
                </select>
              </label>
              <label>
                방어자
                <select value={defenderName} onChange={(event) => setDefenderName(event.target.value)}>
                  {pokemonPool.map((pokemon) => <option key={pokemon.name} value={pokemon.name}>{pokemon.displayName}</option>)}
                </select>
              </label>
            </div>
            <div className="damageResult">
              <div>
                <span>{attacker.displayName}의 {move.name}</span>
                <strong>{damage.min} - {damage.max}</strong>
                <small>{defender.displayName} HP {damage.defenderHp} 기준 {damagePercent.min}% - {damagePercent.max}%</small>
              </div>
              <div className="koBox">
                <strong>{damagePercent.max >= 100 ? "확정 1타 후보" : damagePercent.min >= 50 ? "확정 2타 후보" : "3타 이상"}</strong>
                <small>날씨, 벽, 급소, 필드 보정은 다음 단계에서 세부 입력으로 분리한다.</small>
              </div>
            </div>
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
