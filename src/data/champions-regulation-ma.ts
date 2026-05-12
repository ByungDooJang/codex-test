// 포켓몬 챔피언스 Regulation M-A 실제 eligible 포켓몬 데이터
export type ChampionsPokemon = {
  id: string;
  dex: number;
  name: string;
  displayName: string;
  form: string | null;
  pokeApiId: number;
  types: string[];
  base: { hp: number; atk: number; def: number; spa: number; spd: number; spe: number };
  abilities: string[];
  image: string;
};

export const REGULATION_MA_SOURCE = "https://bulbapedia.bulbagarden.net/w/index.php?title=Regulation_Set_M-A&action=raw";
export const REGULATION_MA_ELIGIBLE_COUNT = 213;
export const REGULATION_MA_MEGA_COUNT = 59;

export const regulationMAEligiblePokemon = [
  {
    "id": "3-base",
    "dex": 3,
    "name": "Venusaur",
    "displayName": "이상해꽃",
    "form": null,
    "pokeApiId": 3,
    "types": [
      "Grass",
      "Poison"
    ],
    "base": {
      "hp": 80,
      "atk": 82,
      "def": 83,
      "spa": 100,
      "spd": 100,
      "spe": 80
    },
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
  },
  {
    "id": "6-base",
    "dex": 6,
    "name": "Charizard",
    "displayName": "리자몽",
    "form": null,
    "pokeApiId": 6,
    "types": [
      "Fire",
      "Flying"
    ],
    "base": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    },
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  },
  {
    "id": "9-base",
    "dex": 9,
    "name": "Blastoise",
    "displayName": "거북왕",
    "form": null,
    "pokeApiId": 9,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 79,
      "atk": 83,
      "def": 100,
      "spa": 85,
      "spd": 105,
      "spe": 78
    },
    "abilities": [
      "torrent",
      "rain-dish"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
  },
  {
    "id": "15-base",
    "dex": 15,
    "name": "Beedrill",
    "displayName": "독침붕",
    "form": null,
    "pokeApiId": 15,
    "types": [
      "Bug",
      "Poison"
    ],
    "base": {
      "hp": 65,
      "atk": 90,
      "def": 40,
      "spa": 45,
      "spd": 80,
      "spe": 75
    },
    "abilities": [
      "swarm",
      "sniper"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png"
  },
  {
    "id": "18-base",
    "dex": 18,
    "name": "Pidgeot",
    "displayName": "피죤투",
    "form": null,
    "pokeApiId": 18,
    "types": [
      "Normal",
      "Flying"
    ],
    "base": {
      "hp": 83,
      "atk": 80,
      "def": 75,
      "spa": 70,
      "spd": 70,
      "spe": 101
    },
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"
  },
  {
    "id": "24-base",
    "dex": 24,
    "name": "Arbok",
    "displayName": "아보크",
    "form": null,
    "pokeApiId": 24,
    "types": [
      "Poison"
    ],
    "base": {
      "hp": 60,
      "atk": 95,
      "def": 69,
      "spa": 65,
      "spd": 79,
      "spe": 80
    },
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png"
  },
  {
    "id": "25-base",
    "dex": 25,
    "name": "Pikachu",
    "displayName": "피카츄",
    "form": null,
    "pokeApiId": 25,
    "types": [
      "Electric"
    ],
    "base": {
      "hp": 35,
      "atk": 55,
      "def": 40,
      "spa": 50,
      "spd": 50,
      "spe": 90
    },
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    "id": "26-base",
    "dex": 26,
    "name": "Raichu",
    "displayName": "라이츄",
    "form": null,
    "pokeApiId": 26,
    "types": [
      "Electric"
    ],
    "base": {
      "hp": 60,
      "atk": 90,
      "def": 55,
      "spa": 90,
      "spd": 80,
      "spe": 110
    },
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
  },
  {
    "id": "10100--alola",
    "dex": 26,
    "name": "Raichu Alola",
    "displayName": "라이츄 (알로라)",
    "form": "-Alola",
    "pokeApiId": 10100,
    "types": [
      "Electric",
      "Psychic"
    ],
    "base": {
      "hp": 60,
      "atk": 85,
      "def": 50,
      "spa": 95,
      "spd": 85,
      "spe": 110
    },
    "abilities": [
      "surge-surfer"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png"
  },
  {
    "id": "36-base",
    "dex": 36,
    "name": "Clefable",
    "displayName": "픽시",
    "form": null,
    "pokeApiId": 36,
    "types": [
      "Fairy"
    ],
    "base": {
      "hp": 95,
      "atk": 70,
      "def": 73,
      "spa": 95,
      "spd": 90,
      "spe": 60
    },
    "abilities": [
      "cute-charm",
      "magic-guard",
      "unaware"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png"
  },
  {
    "id": "38-base",
    "dex": 38,
    "name": "Ninetales",
    "displayName": "나인테일",
    "form": null,
    "pokeApiId": 38,
    "types": [
      "Fire"
    ],
    "base": {
      "hp": 73,
      "atk": 76,
      "def": 75,
      "spa": 81,
      "spd": 100,
      "spe": 100
    },
    "abilities": [
      "flash-fire",
      "drought"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png"
  },
  {
    "id": "10104--alola",
    "dex": 38,
    "name": "Ninetales Alola",
    "displayName": "나인테일 (알로라)",
    "form": "-Alola",
    "pokeApiId": 10104,
    "types": [
      "Ice",
      "Fairy"
    ],
    "base": {
      "hp": 73,
      "atk": 67,
      "def": 75,
      "spa": 81,
      "spd": 100,
      "spe": 109
    },
    "abilities": [
      "snow-cloak",
      "snow-warning"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png"
  },
  {
    "id": "59-base",
    "dex": 59,
    "name": "Arcanine",
    "displayName": "윈디",
    "form": null,
    "pokeApiId": 59,
    "types": [
      "Fire"
    ],
    "base": {
      "hp": 90,
      "atk": 110,
      "def": 80,
      "spa": 100,
      "spd": 80,
      "spe": 95
    },
    "abilities": [
      "intimidate",
      "flash-fire",
      "justified"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png"
  },
  {
    "id": "10230--hisui",
    "dex": 59,
    "name": "Arcanine Hisui",
    "displayName": "윈디 (히스이)",
    "form": "-Hisui",
    "pokeApiId": 10230,
    "types": [
      "Fire",
      "Rock"
    ],
    "base": {
      "hp": 95,
      "atk": 115,
      "def": 80,
      "spa": 95,
      "spd": 80,
      "spe": 90
    },
    "abilities": [
      "intimidate",
      "flash-fire",
      "rock-head"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10230.png"
  },
  {
    "id": "65-base",
    "dex": 65,
    "name": "Alakazam",
    "displayName": "후딘",
    "form": null,
    "pokeApiId": 65,
    "types": [
      "Psychic"
    ],
    "base": {
      "hp": 55,
      "atk": 50,
      "def": 45,
      "spa": 135,
      "spd": 95,
      "spe": 120
    },
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"
  },
  {
    "id": "68-base",
    "dex": 68,
    "name": "Machamp",
    "displayName": "괴력몬",
    "form": null,
    "pokeApiId": 68,
    "types": [
      "Fighting"
    ],
    "base": {
      "hp": 90,
      "atk": 130,
      "def": 80,
      "spa": 65,
      "spd": 85,
      "spe": 55
    },
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png"
  },
  {
    "id": "71-base",
    "dex": 71,
    "name": "Victreebel",
    "displayName": "우츠보트",
    "form": null,
    "pokeApiId": 71,
    "types": [
      "Grass",
      "Poison"
    ],
    "base": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 100,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      "chlorophyll",
      "gluttony"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png"
  },
  {
    "id": "80-base",
    "dex": 80,
    "name": "Slowbro",
    "displayName": "야도란",
    "form": null,
    "pokeApiId": 80,
    "types": [
      "Water",
      "Psychic"
    ],
    "base": {
      "hp": 95,
      "atk": 75,
      "def": 110,
      "spa": 100,
      "spd": 80,
      "spe": 30
    },
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png"
  },
  {
    "id": "10165--galar",
    "dex": 80,
    "name": "Slowbro Galar",
    "displayName": "야도란 (가라르)",
    "form": "-Galar",
    "pokeApiId": 10165,
    "types": [
      "Poison",
      "Psychic"
    ],
    "base": {
      "hp": 95,
      "atk": 100,
      "def": 95,
      "spa": 100,
      "spd": 70,
      "spe": 30
    },
    "abilities": [
      "quick-draw",
      "own-tempo",
      "regenerator"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png"
  },
  {
    "id": "94-base",
    "dex": 94,
    "name": "Gengar",
    "displayName": "팬텀",
    "form": null,
    "pokeApiId": 94,
    "types": [
      "Ghost",
      "Poison"
    ],
    "base": {
      "hp": 60,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 75,
      "spe": 110
    },
    "abilities": [
      "cursed-body"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
  },
  {
    "id": "115-base",
    "dex": 115,
    "name": "Kangaskhan",
    "displayName": "캥카",
    "form": null,
    "pokeApiId": 115,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 105,
      "atk": 95,
      "def": 80,
      "spa": 40,
      "spd": 80,
      "spe": 90
    },
    "abilities": [
      "early-bird",
      "scrappy",
      "inner-focus"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png"
  },
  {
    "id": "121-base",
    "dex": 121,
    "name": "Starmie",
    "displayName": "아쿠스타",
    "form": null,
    "pokeApiId": 121,
    "types": [
      "Water",
      "Psychic"
    ],
    "base": {
      "hp": 60,
      "atk": 75,
      "def": 85,
      "spa": 100,
      "spd": 85,
      "spe": 115
    },
    "abilities": [
      "illuminate",
      "natural-cure",
      "analytic"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png"
  },
  {
    "id": "127-base",
    "dex": 127,
    "name": "Pinsir",
    "displayName": "쁘사이저",
    "form": null,
    "pokeApiId": 127,
    "types": [
      "Bug"
    ],
    "base": {
      "hp": 65,
      "atk": 125,
      "def": 100,
      "spa": 55,
      "spd": 70,
      "spe": 85
    },
    "abilities": [
      "hyper-cutter",
      "mold-breaker",
      "moxie"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png"
  },
  {
    "id": "128-base",
    "dex": 128,
    "name": "Tauros",
    "displayName": "켄타로스",
    "form": null,
    "pokeApiId": 128,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 75,
      "atk": 100,
      "def": 95,
      "spa": 40,
      "spd": 70,
      "spe": 110
    },
    "abilities": [
      "intimidate",
      "anger-point",
      "sheer-force"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png"
  },
  {
    "id": "10250--paldea-combat",
    "dex": 128,
    "name": "Tauros Paldea Combat",
    "displayName": "켄타로스 (팔데아 컴뱃종)",
    "form": "-Paldea Combat",
    "pokeApiId": 10250,
    "types": [
      "Fighting"
    ],
    "base": {
      "hp": 75,
      "atk": 110,
      "def": 105,
      "spa": 30,
      "spd": 70,
      "spe": 100
    },
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10250.png"
  },
  {
    "id": "10251--paldea-blaze",
    "dex": 128,
    "name": "Tauros Paldea Blaze",
    "displayName": "켄타로스 (팔데아 블레이즈종)",
    "form": "-Paldea Blaze",
    "pokeApiId": 10251,
    "types": [
      "Fighting",
      "Fire"
    ],
    "base": {
      "hp": 75,
      "atk": 110,
      "def": 105,
      "spa": 30,
      "spd": 70,
      "spe": 100
    },
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10251.png"
  },
  {
    "id": "10252--paldea-aqua",
    "dex": 128,
    "name": "Tauros Paldea Aqua",
    "displayName": "켄타로스 (팔데아 워터종)",
    "form": "-Paldea Aqua",
    "pokeApiId": 10252,
    "types": [
      "Fighting",
      "Water"
    ],
    "base": {
      "hp": 75,
      "atk": 110,
      "def": 105,
      "spa": 30,
      "spd": 70,
      "spe": 100
    },
    "abilities": [
      "intimidate",
      "anger-point",
      "cud-chew"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10252.png"
  },
  {
    "id": "130-base",
    "dex": 130,
    "name": "Gyarados",
    "displayName": "갸라도스",
    "form": null,
    "pokeApiId": 130,
    "types": [
      "Water",
      "Flying"
    ],
    "base": {
      "hp": 95,
      "atk": 125,
      "def": 79,
      "spa": 60,
      "spd": 100,
      "spe": 81
    },
    "abilities": [
      "intimidate",
      "moxie"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png"
  },
  {
    "id": "132-base",
    "dex": 132,
    "name": "Ditto",
    "displayName": "메타몽",
    "form": null,
    "pokeApiId": 132,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 48,
      "atk": 48,
      "def": 48,
      "spa": 48,
      "spd": 48,
      "spe": 48
    },
    "abilities": [
      "limber",
      "imposter"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
  },
  {
    "id": "134-base",
    "dex": 134,
    "name": "Vaporeon",
    "displayName": "샤미드",
    "form": null,
    "pokeApiId": 134,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 130,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 65
    },
    "abilities": [
      "water-absorb",
      "hydration"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
  },
  {
    "id": "135-base",
    "dex": 135,
    "name": "Jolteon",
    "displayName": "쥬피썬더",
    "form": null,
    "pokeApiId": 135,
    "types": [
      "Electric"
    ],
    "base": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 110,
      "spd": 95,
      "spe": 130
    },
    "abilities": [
      "volt-absorb",
      "quick-feet"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
  },
  {
    "id": "136-base",
    "dex": 136,
    "name": "Flareon",
    "displayName": "부스터",
    "form": null,
    "pokeApiId": 136,
    "types": [
      "Fire"
    ],
    "base": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 95,
      "spd": 110,
      "spe": 65
    },
    "abilities": [
      "flash-fire",
      "guts"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
  },
  {
    "id": "142-base",
    "dex": 142,
    "name": "Aerodactyl",
    "displayName": "프테라",
    "form": null,
    "pokeApiId": 142,
    "types": [
      "Rock",
      "Flying"
    ],
    "base": {
      "hp": 80,
      "atk": 105,
      "def": 65,
      "spa": 60,
      "spd": 75,
      "spe": 130
    },
    "abilities": [
      "rock-head",
      "pressure",
      "unnerve"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png"
  },
  {
    "id": "143-base",
    "dex": 143,
    "name": "Snorlax",
    "displayName": "잠만보",
    "form": null,
    "pokeApiId": 143,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 160,
      "atk": 110,
      "def": 65,
      "spa": 65,
      "spd": 110,
      "spe": 30
    },
    "abilities": [
      "immunity",
      "thick-fat",
      "gluttony"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
  },
  {
    "id": "149-base",
    "dex": 149,
    "name": "Dragonite",
    "displayName": "망나뇽",
    "form": null,
    "pokeApiId": 149,
    "types": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "hp": 91,
      "atk": 134,
      "def": 95,
      "spa": 100,
      "spd": 100,
      "spe": 80
    },
    "abilities": [
      "inner-focus",
      "multiscale"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
  },
  {
    "id": "154-base",
    "dex": 154,
    "name": "Meganium",
    "displayName": "메가니움",
    "form": null,
    "pokeApiId": 154,
    "types": [
      "Grass"
    ],
    "base": {
      "hp": 80,
      "atk": 82,
      "def": 100,
      "spa": 83,
      "spd": 100,
      "spe": 80
    },
    "abilities": [
      "overgrow",
      "leaf-guard"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png"
  },
  {
    "id": "157-base",
    "dex": 157,
    "name": "Typhlosion",
    "displayName": "블레이범",
    "form": null,
    "pokeApiId": 157,
    "types": [
      "Fire"
    ],
    "base": {
      "hp": 78,
      "atk": 84,
      "def": 78,
      "spa": 109,
      "spd": 85,
      "spe": 100
    },
    "abilities": [
      "blaze",
      "flash-fire"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png"
  },
  {
    "id": "10233--hisui",
    "dex": 157,
    "name": "Typhlosion Hisui",
    "displayName": "블레이범 (히스이)",
    "form": "-Hisui",
    "pokeApiId": 10233,
    "types": [
      "Fire",
      "Ghost"
    ],
    "base": {
      "hp": 73,
      "atk": 84,
      "def": 78,
      "spa": 119,
      "spd": 85,
      "spe": 95
    },
    "abilities": [
      "blaze",
      "frisk"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10233.png"
  },
  {
    "id": "160-base",
    "dex": 160,
    "name": "Feraligatr",
    "displayName": "장크로다일",
    "form": null,
    "pokeApiId": 160,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 85,
      "atk": 105,
      "def": 100,
      "spa": 79,
      "spd": 83,
      "spe": 78
    },
    "abilities": [
      "torrent",
      "sheer-force"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png"
  },
  {
    "id": "168-base",
    "dex": 168,
    "name": "Ariados",
    "displayName": "아리아도스",
    "form": null,
    "pokeApiId": 168,
    "types": [
      "Bug",
      "Poison"
    ],
    "base": {
      "hp": 70,
      "atk": 90,
      "def": 70,
      "spa": 60,
      "spd": 70,
      "spe": 40
    },
    "abilities": [
      "swarm",
      "insomnia",
      "sniper"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png"
  },
  {
    "id": "181-base",
    "dex": 181,
    "name": "Ampharos",
    "displayName": "전룡",
    "form": null,
    "pokeApiId": 181,
    "types": [
      "Electric"
    ],
    "base": {
      "hp": 90,
      "atk": 75,
      "def": 85,
      "spa": 115,
      "spd": 90,
      "spe": 55
    },
    "abilities": [
      "static",
      "plus"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png"
  },
  {
    "id": "184-base",
    "dex": 184,
    "name": "Azumarill",
    "displayName": "마릴리",
    "form": null,
    "pokeApiId": 184,
    "types": [
      "Water",
      "Fairy"
    ],
    "base": {
      "hp": 100,
      "atk": 50,
      "def": 80,
      "spa": 60,
      "spd": 80,
      "spe": 50
    },
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png"
  },
  {
    "id": "186-base",
    "dex": 186,
    "name": "Politoed",
    "displayName": "왕구리",
    "form": null,
    "pokeApiId": 186,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 90,
      "atk": 75,
      "def": 75,
      "spa": 90,
      "spd": 100,
      "spe": 70
    },
    "abilities": [
      "water-absorb",
      "damp",
      "drizzle"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png"
  },
  {
    "id": "196-base",
    "dex": 196,
    "name": "Espeon",
    "displayName": "에브이",
    "form": null,
    "pokeApiId": 196,
    "types": [
      "Psychic"
    ],
    "base": {
      "hp": 65,
      "atk": 65,
      "def": 60,
      "spa": 130,
      "spd": 95,
      "spe": 110
    },
    "abilities": [
      "synchronize",
      "magic-bounce"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png"
  },
  {
    "id": "197-base",
    "dex": 197,
    "name": "Umbreon",
    "displayName": "블래키",
    "form": null,
    "pokeApiId": 197,
    "types": [
      "Dark"
    ],
    "base": {
      "hp": 95,
      "atk": 65,
      "def": 110,
      "spa": 60,
      "spd": 130,
      "spe": 65
    },
    "abilities": [
      "synchronize",
      "inner-focus"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
  },
  {
    "id": "199-base",
    "dex": 199,
    "name": "Slowking",
    "displayName": "야도킹",
    "form": null,
    "pokeApiId": 199,
    "types": [
      "Water",
      "Psychic"
    ],
    "base": {
      "hp": 95,
      "atk": 75,
      "def": 80,
      "spa": 100,
      "spd": 110,
      "spe": 30
    },
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png"
  },
  {
    "id": "10172--galar",
    "dex": 199,
    "name": "Slowking Galar",
    "displayName": "야도킹 (가라르)",
    "form": "-Galar",
    "pokeApiId": 10172,
    "types": [
      "Poison",
      "Psychic"
    ],
    "base": {
      "hp": 95,
      "atk": 65,
      "def": 80,
      "spa": 110,
      "spd": 110,
      "spe": 30
    },
    "abilities": [
      "curious-medicine",
      "own-tempo",
      "regenerator"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10172.png"
  },
  {
    "id": "205-base",
    "dex": 205,
    "name": "Forretress",
    "displayName": "쏘콘",
    "form": null,
    "pokeApiId": 205,
    "types": [
      "Bug",
      "Steel"
    ],
    "base": {
      "hp": 75,
      "atk": 90,
      "def": 140,
      "spa": 60,
      "spd": 60,
      "spe": 40
    },
    "abilities": [
      "sturdy",
      "overcoat"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png"
  },
  {
    "id": "208-base",
    "dex": 208,
    "name": "Steelix",
    "displayName": "강철톤",
    "form": null,
    "pokeApiId": 208,
    "types": [
      "Steel",
      "Ground"
    ],
    "base": {
      "hp": 75,
      "atk": 85,
      "def": 200,
      "spa": 55,
      "spd": 65,
      "spe": 30
    },
    "abilities": [
      "rock-head",
      "sturdy",
      "sheer-force"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png"
  },
  {
    "id": "212-base",
    "dex": 212,
    "name": "Scizor",
    "displayName": "핫삼",
    "form": null,
    "pokeApiId": 212,
    "types": [
      "Bug",
      "Steel"
    ],
    "base": {
      "hp": 70,
      "atk": 130,
      "def": 100,
      "spa": 55,
      "spd": 80,
      "spe": 65
    },
    "abilities": [
      "swarm",
      "technician",
      "light-metal"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png"
  },
  {
    "id": "214-base",
    "dex": 214,
    "name": "Heracross",
    "displayName": "헤라크로스",
    "form": null,
    "pokeApiId": 214,
    "types": [
      "Bug",
      "Fighting"
    ],
    "base": {
      "hp": 80,
      "atk": 125,
      "def": 75,
      "spa": 40,
      "spd": 95,
      "spe": 85
    },
    "abilities": [
      "swarm",
      "guts",
      "moxie"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png"
  },
  {
    "id": "227-base",
    "dex": 227,
    "name": "Skarmory",
    "displayName": "무장조",
    "form": null,
    "pokeApiId": 227,
    "types": [
      "Steel",
      "Flying"
    ],
    "base": {
      "hp": 65,
      "atk": 80,
      "def": 140,
      "spa": 40,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      "keen-eye",
      "sturdy",
      "weak-armor"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png"
  },
  {
    "id": "229-base",
    "dex": 229,
    "name": "Houndoom",
    "displayName": "헬가",
    "form": null,
    "pokeApiId": 229,
    "types": [
      "Dark",
      "Fire"
    ],
    "base": {
      "hp": 75,
      "atk": 90,
      "def": 50,
      "spa": 110,
      "spd": 80,
      "spe": 95
    },
    "abilities": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png"
  },
  {
    "id": "248-base",
    "dex": 248,
    "name": "Tyranitar",
    "displayName": "마기라스",
    "form": null,
    "pokeApiId": 248,
    "types": [
      "Rock",
      "Dark"
    ],
    "base": {
      "hp": 100,
      "atk": 134,
      "def": 110,
      "spa": 95,
      "spd": 100,
      "spe": 61
    },
    "abilities": [
      "sand-stream",
      "unnerve"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png"
  },
  {
    "id": "279-base",
    "dex": 279,
    "name": "Pelipper",
    "displayName": "패리퍼",
    "form": null,
    "pokeApiId": 279,
    "types": [
      "Water",
      "Flying"
    ],
    "base": {
      "hp": 60,
      "atk": 50,
      "def": 100,
      "spa": 95,
      "spd": 70,
      "spe": 65
    },
    "abilities": [
      "keen-eye",
      "drizzle",
      "rain-dish"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png"
  },
  {
    "id": "282-base",
    "dex": 282,
    "name": "Gardevoir",
    "displayName": "가디안",
    "form": null,
    "pokeApiId": 282,
    "types": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "hp": 68,
      "atk": 65,
      "def": 65,
      "spa": 125,
      "spd": 115,
      "spe": 80
    },
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png"
  },
  {
    "id": "302-base",
    "dex": 302,
    "name": "Sableye",
    "displayName": "깜까미",
    "form": null,
    "pokeApiId": 302,
    "types": [
      "Dark",
      "Ghost"
    ],
    "base": {
      "hp": 50,
      "atk": 75,
      "def": 75,
      "spa": 65,
      "spd": 65,
      "spe": 50
    },
    "abilities": [
      "keen-eye",
      "stall",
      "prankster"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png"
  },
  {
    "id": "306-base",
    "dex": 306,
    "name": "Aggron",
    "displayName": "보스로라",
    "form": null,
    "pokeApiId": 306,
    "types": [
      "Steel",
      "Rock"
    ],
    "base": {
      "hp": 70,
      "atk": 110,
      "def": 180,
      "spa": 60,
      "spd": 60,
      "spe": 50
    },
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png"
  },
  {
    "id": "308-base",
    "dex": 308,
    "name": "Medicham",
    "displayName": "요가램",
    "form": null,
    "pokeApiId": 308,
    "types": [
      "Fighting",
      "Psychic"
    ],
    "base": {
      "hp": 60,
      "atk": 60,
      "def": 75,
      "spa": 60,
      "spd": 75,
      "spe": 80
    },
    "abilities": [
      "pure-power",
      "telepathy"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png"
  },
  {
    "id": "310-base",
    "dex": 310,
    "name": "Manectric",
    "displayName": "썬더볼트",
    "form": null,
    "pokeApiId": 310,
    "types": [
      "Electric"
    ],
    "base": {
      "hp": 70,
      "atk": 75,
      "def": 60,
      "spa": 105,
      "spd": 60,
      "spe": 105
    },
    "abilities": [
      "static",
      "lightning-rod",
      "minus"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png"
  },
  {
    "id": "319-base",
    "dex": 319,
    "name": "Sharpedo",
    "displayName": "샤크니아",
    "form": null,
    "pokeApiId": 319,
    "types": [
      "Water",
      "Dark"
    ],
    "base": {
      "hp": 70,
      "atk": 120,
      "def": 40,
      "spa": 95,
      "spd": 40,
      "spe": 95
    },
    "abilities": [
      "rough-skin",
      "speed-boost"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png"
  },
  {
    "id": "323-base",
    "dex": 323,
    "name": "Camerupt",
    "displayName": "폭타",
    "form": null,
    "pokeApiId": 323,
    "types": [
      "Fire",
      "Ground"
    ],
    "base": {
      "hp": 70,
      "atk": 100,
      "def": 70,
      "spa": 105,
      "spd": 75,
      "spe": 40
    },
    "abilities": [
      "magma-armor",
      "solid-rock",
      "anger-point"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png"
  },
  {
    "id": "324-base",
    "dex": 324,
    "name": "Torkoal",
    "displayName": "코터스",
    "form": null,
    "pokeApiId": 324,
    "types": [
      "Fire"
    ],
    "base": {
      "hp": 70,
      "atk": 85,
      "def": 140,
      "spa": 85,
      "spd": 70,
      "spe": 20
    },
    "abilities": [
      "white-smoke",
      "drought",
      "shell-armor"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png"
  },
  {
    "id": "334-base",
    "dex": 334,
    "name": "Altaria",
    "displayName": "파비코리",
    "form": null,
    "pokeApiId": 334,
    "types": [
      "Dragon",
      "Flying"
    ],
    "base": {
      "hp": 75,
      "atk": 70,
      "def": 90,
      "spa": 70,
      "spd": 105,
      "spe": 80
    },
    "abilities": [
      "natural-cure",
      "cloud-nine"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png"
  },
  {
    "id": "350-base",
    "dex": 350,
    "name": "Milotic",
    "displayName": "밀로틱",
    "form": null,
    "pokeApiId": 350,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 95,
      "atk": 60,
      "def": 79,
      "spa": 100,
      "spd": 125,
      "spe": 81
    },
    "abilities": [
      "marvel-scale",
      "competitive",
      "cute-charm"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png"
  },
  {
    "id": "351-base",
    "dex": 351,
    "name": "Castform",
    "displayName": "캐스퐁",
    "form": null,
    "pokeApiId": 351,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 70,
      "atk": 70,
      "def": 70,
      "spa": 70,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      "forecast"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png"
  },
  {
    "id": "354-base",
    "dex": 354,
    "name": "Banette",
    "displayName": "다크펫",
    "form": null,
    "pokeApiId": 354,
    "types": [
      "Ghost"
    ],
    "base": {
      "hp": 64,
      "atk": 115,
      "def": 65,
      "spa": 83,
      "spd": 63,
      "spe": 65
    },
    "abilities": [
      "insomnia",
      "frisk",
      "cursed-body"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png"
  },
  {
    "id": "358-base",
    "dex": 358,
    "name": "Chimecho",
    "displayName": "치렁",
    "form": null,
    "pokeApiId": 358,
    "types": [
      "Psychic"
    ],
    "base": {
      "hp": 75,
      "atk": 50,
      "def": 80,
      "spa": 95,
      "spd": 90,
      "spe": 65
    },
    "abilities": [
      "levitate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png"
  },
  {
    "id": "359-base",
    "dex": 359,
    "name": "Absol",
    "displayName": "앱솔",
    "form": null,
    "pokeApiId": 359,
    "types": [
      "Dark"
    ],
    "base": {
      "hp": 65,
      "atk": 130,
      "def": 60,
      "spa": 75,
      "spd": 60,
      "spe": 75
    },
    "abilities": [
      "pressure",
      "super-luck",
      "justified"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png"
  },
  {
    "id": "362-base",
    "dex": 362,
    "name": "Glalie",
    "displayName": "얼음귀신",
    "form": null,
    "pokeApiId": 362,
    "types": [
      "Ice"
    ],
    "base": {
      "hp": 80,
      "atk": 80,
      "def": 80,
      "spa": 80,
      "spd": 80,
      "spe": 80
    },
    "abilities": [
      "inner-focus",
      "ice-body",
      "moody"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png"
  },
  {
    "id": "389-base",
    "dex": 389,
    "name": "Torterra",
    "displayName": "토대부기",
    "form": null,
    "pokeApiId": 389,
    "types": [
      "Grass",
      "Ground"
    ],
    "base": {
      "hp": 95,
      "atk": 109,
      "def": 105,
      "spa": 75,
      "spd": 85,
      "spe": 56
    },
    "abilities": [
      "overgrow",
      "shell-armor"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png"
  },
  {
    "id": "392-base",
    "dex": 392,
    "name": "Infernape",
    "displayName": "초염몽",
    "form": null,
    "pokeApiId": 392,
    "types": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "hp": 76,
      "atk": 104,
      "def": 71,
      "spa": 104,
      "spd": 71,
      "spe": 108
    },
    "abilities": [
      "blaze",
      "iron-fist"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png"
  },
  {
    "id": "395-base",
    "dex": 395,
    "name": "Empoleon",
    "displayName": "엠페르트",
    "form": null,
    "pokeApiId": 395,
    "types": [
      "Water",
      "Steel"
    ],
    "base": {
      "hp": 84,
      "atk": 86,
      "def": 88,
      "spa": 111,
      "spd": 101,
      "spe": 60
    },
    "abilities": [
      "torrent",
      "competitive"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png"
  },
  {
    "id": "405-base",
    "dex": 405,
    "name": "Luxray",
    "displayName": "렌트라",
    "form": null,
    "pokeApiId": 405,
    "types": [
      "Electric"
    ],
    "base": {
      "hp": 80,
      "atk": 120,
      "def": 79,
      "spa": 95,
      "spd": 79,
      "spe": 70
    },
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png"
  },
  {
    "id": "407-base",
    "dex": 407,
    "name": "Roserade",
    "displayName": "로즈레이드",
    "form": null,
    "pokeApiId": 407,
    "types": [
      "Grass",
      "Poison"
    ],
    "base": {
      "hp": 60,
      "atk": 70,
      "def": 65,
      "spa": 125,
      "spd": 105,
      "spe": 90
    },
    "abilities": [
      "natural-cure",
      "poison-point",
      "technician"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png"
  },
  {
    "id": "409-base",
    "dex": 409,
    "name": "Rampardos",
    "displayName": "램펄드",
    "form": null,
    "pokeApiId": 409,
    "types": [
      "Rock"
    ],
    "base": {
      "hp": 97,
      "atk": 165,
      "def": 60,
      "spa": 65,
      "spd": 50,
      "spe": 58
    },
    "abilities": [
      "mold-breaker",
      "sheer-force"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png"
  },
  {
    "id": "411-base",
    "dex": 411,
    "name": "Bastiodon",
    "displayName": "바리톱스",
    "form": null,
    "pokeApiId": 411,
    "types": [
      "Rock",
      "Steel"
    ],
    "base": {
      "hp": 60,
      "atk": 52,
      "def": 168,
      "spa": 47,
      "spd": 138,
      "spe": 30
    },
    "abilities": [
      "sturdy",
      "soundproof"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png"
  },
  {
    "id": "428-base",
    "dex": 428,
    "name": "Lopunny",
    "displayName": "이어롭",
    "form": null,
    "pokeApiId": 428,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 65,
      "atk": 76,
      "def": 84,
      "spa": 54,
      "spd": 96,
      "spe": 105
    },
    "abilities": [
      "cute-charm",
      "klutz",
      "limber"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png"
  },
  {
    "id": "442-base",
    "dex": 442,
    "name": "Spiritomb",
    "displayName": "화강돌",
    "form": null,
    "pokeApiId": 442,
    "types": [
      "Ghost",
      "Dark"
    ],
    "base": {
      "hp": 50,
      "atk": 92,
      "def": 108,
      "spa": 92,
      "spd": 108,
      "spe": 35
    },
    "abilities": [
      "pressure",
      "infiltrator"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png"
  },
  {
    "id": "445-base",
    "dex": 445,
    "name": "Garchomp",
    "displayName": "한카리아스",
    "form": null,
    "pokeApiId": 445,
    "types": [
      "Dragon",
      "Ground"
    ],
    "base": {
      "hp": 108,
      "atk": 130,
      "def": 95,
      "spa": 80,
      "spd": 85,
      "spe": 102
    },
    "abilities": [
      "sand-veil",
      "rough-skin"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png"
  },
  {
    "id": "448-base",
    "dex": 448,
    "name": "Lucario",
    "displayName": "루카리오",
    "form": null,
    "pokeApiId": 448,
    "types": [
      "Fighting",
      "Steel"
    ],
    "base": {
      "hp": 70,
      "atk": 110,
      "def": 70,
      "spa": 115,
      "spd": 70,
      "spe": 90
    },
    "abilities": [
      "steadfast",
      "inner-focus",
      "justified"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png"
  },
  {
    "id": "450-base",
    "dex": 450,
    "name": "Hippowdon",
    "displayName": "하마돈",
    "form": null,
    "pokeApiId": 450,
    "types": [
      "Ground"
    ],
    "base": {
      "hp": 108,
      "atk": 112,
      "def": 118,
      "spa": 68,
      "spd": 72,
      "spe": 47
    },
    "abilities": [
      "sand-stream",
      "sand-force"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png"
  },
  {
    "id": "454-base",
    "dex": 454,
    "name": "Toxicroak",
    "displayName": "독개굴",
    "form": null,
    "pokeApiId": 454,
    "types": [
      "Poison",
      "Fighting"
    ],
    "base": {
      "hp": 83,
      "atk": 106,
      "def": 65,
      "spa": 86,
      "spd": 65,
      "spe": 85
    },
    "abilities": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png"
  },
  {
    "id": "460-base",
    "dex": 460,
    "name": "Abomasnow",
    "displayName": "눈설왕",
    "form": null,
    "pokeApiId": 460,
    "types": [
      "Grass",
      "Ice"
    ],
    "base": {
      "hp": 90,
      "atk": 92,
      "def": 75,
      "spa": 92,
      "spd": 85,
      "spe": 60
    },
    "abilities": [
      "snow-warning",
      "soundproof"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png"
  },
  {
    "id": "461-base",
    "dex": 461,
    "name": "Weavile",
    "displayName": "포푸니라",
    "form": null,
    "pokeApiId": 461,
    "types": [
      "Dark",
      "Ice"
    ],
    "base": {
      "hp": 70,
      "atk": 120,
      "def": 65,
      "spa": 45,
      "spd": 85,
      "spe": 125
    },
    "abilities": [
      "pressure",
      "pickpocket"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png"
  },
  {
    "id": "464-base",
    "dex": 464,
    "name": "Rhyperior",
    "displayName": "거대코뿌리",
    "form": null,
    "pokeApiId": 464,
    "types": [
      "Ground",
      "Rock"
    ],
    "base": {
      "hp": 115,
      "atk": 140,
      "def": 130,
      "spa": 55,
      "spd": 55,
      "spe": 40
    },
    "abilities": [
      "lightning-rod",
      "solid-rock",
      "reckless"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png"
  },
  {
    "id": "470-base",
    "dex": 470,
    "name": "Leafeon",
    "displayName": "리피아",
    "form": null,
    "pokeApiId": 470,
    "types": [
      "Grass"
    ],
    "base": {
      "hp": 65,
      "atk": 110,
      "def": 130,
      "spa": 60,
      "spd": 65,
      "spe": 95
    },
    "abilities": [
      "leaf-guard",
      "chlorophyll"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png"
  },
  {
    "id": "471-base",
    "dex": 471,
    "name": "Glaceon",
    "displayName": "글레이시아",
    "form": null,
    "pokeApiId": 471,
    "types": [
      "Ice"
    ],
    "base": {
      "hp": 65,
      "atk": 60,
      "def": 110,
      "spa": 130,
      "spd": 95,
      "spe": 65
    },
    "abilities": [
      "snow-cloak",
      "ice-body"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png"
  },
  {
    "id": "472-base",
    "dex": 472,
    "name": "Gliscor",
    "displayName": "글라이온",
    "form": null,
    "pokeApiId": 472,
    "types": [
      "Ground",
      "Flying"
    ],
    "base": {
      "hp": 75,
      "atk": 95,
      "def": 125,
      "spa": 45,
      "spd": 75,
      "spe": 95
    },
    "abilities": [
      "hyper-cutter",
      "sand-veil",
      "poison-heal"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png"
  },
  {
    "id": "473-base",
    "dex": 473,
    "name": "Mamoswine",
    "displayName": "맘모꾸리",
    "form": null,
    "pokeApiId": 473,
    "types": [
      "Ice",
      "Ground"
    ],
    "base": {
      "hp": 110,
      "atk": 130,
      "def": 80,
      "spa": 70,
      "spd": 60,
      "spe": 80
    },
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png"
  },
  {
    "id": "475-base",
    "dex": 475,
    "name": "Gallade",
    "displayName": "엘레이드",
    "form": null,
    "pokeApiId": 475,
    "types": [
      "Psychic",
      "Fighting"
    ],
    "base": {
      "hp": 68,
      "atk": 125,
      "def": 65,
      "spa": 65,
      "spd": 115,
      "spe": 80
    },
    "abilities": [
      "steadfast",
      "sharpness",
      "justified"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png"
  },
  {
    "id": "478-base",
    "dex": 478,
    "name": "Froslass",
    "displayName": "눈여아",
    "form": null,
    "pokeApiId": 478,
    "types": [
      "Ice",
      "Ghost"
    ],
    "base": {
      "hp": 70,
      "atk": 80,
      "def": 70,
      "spa": 80,
      "spd": 70,
      "spe": 110
    },
    "abilities": [
      "snow-cloak",
      "cursed-body"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png"
  },
  {
    "id": "479-base",
    "dex": 479,
    "name": "Rotom",
    "displayName": "로토무",
    "form": null,
    "pokeApiId": 479,
    "types": [
      "Electric",
      "Ghost"
    ],
    "base": {
      "hp": 50,
      "atk": 50,
      "def": 77,
      "spa": 95,
      "spd": 77,
      "spe": 91
    },
    "abilities": [
      "levitate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png"
  },
  {
    "id": "10008--heat",
    "dex": 479,
    "name": "Rotom Heat",
    "displayName": "히트로토무",
    "form": "-Heat",
    "pokeApiId": 10008,
    "types": [
      "Electric",
      "Fire"
    ],
    "base": {
      "hp": 50,
      "atk": 65,
      "def": 107,
      "spa": 105,
      "spd": 107,
      "spe": 86
    },
    "abilities": [
      "levitate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10008.png"
  },
  {
    "id": "10009--wash",
    "dex": 479,
    "name": "Rotom Wash",
    "displayName": "워시로토무",
    "form": "-Wash",
    "pokeApiId": 10009,
    "types": [
      "Electric",
      "Water"
    ],
    "base": {
      "hp": 50,
      "atk": 65,
      "def": 107,
      "spa": 105,
      "spd": 107,
      "spe": 86
    },
    "abilities": [
      "levitate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10009.png"
  },
  {
    "id": "10010--frost",
    "dex": 479,
    "name": "Rotom Frost",
    "displayName": "프로스트로토무",
    "form": "-Frost",
    "pokeApiId": 10010,
    "types": [
      "Electric",
      "Ice"
    ],
    "base": {
      "hp": 50,
      "atk": 65,
      "def": 107,
      "spa": 105,
      "spd": 107,
      "spe": 86
    },
    "abilities": [
      "levitate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10010.png"
  },
  {
    "id": "10011--fan",
    "dex": 479,
    "name": "Rotom Fan",
    "displayName": "스핀로토무",
    "form": "-Fan",
    "pokeApiId": 10011,
    "types": [
      "Electric",
      "Flying"
    ],
    "base": {
      "hp": 50,
      "atk": 65,
      "def": 107,
      "spa": 105,
      "spd": 107,
      "spe": 86
    },
    "abilities": [
      "levitate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10011.png"
  },
  {
    "id": "10012--mow",
    "dex": 479,
    "name": "Rotom Mow",
    "displayName": "커트로토무",
    "form": "-Mow",
    "pokeApiId": 10012,
    "types": [
      "Electric",
      "Grass"
    ],
    "base": {
      "hp": 50,
      "atk": 65,
      "def": 107,
      "spa": 105,
      "spd": 107,
      "spe": 86
    },
    "abilities": [
      "levitate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10012.png"
  },
  {
    "id": "497-base",
    "dex": 497,
    "name": "Serperior",
    "displayName": "샤로다",
    "form": null,
    "pokeApiId": 497,
    "types": [
      "Grass"
    ],
    "base": {
      "hp": 75,
      "atk": 75,
      "def": 95,
      "spa": 75,
      "spd": 95,
      "spe": 113
    },
    "abilities": [
      "overgrow",
      "contrary"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png"
  },
  {
    "id": "500-base",
    "dex": 500,
    "name": "Emboar",
    "displayName": "염무왕",
    "form": null,
    "pokeApiId": 500,
    "types": [
      "Fire",
      "Fighting"
    ],
    "base": {
      "hp": 110,
      "atk": 123,
      "def": 65,
      "spa": 100,
      "spd": 65,
      "spe": 65
    },
    "abilities": [
      "blaze",
      "reckless"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png"
  },
  {
    "id": "503-base",
    "dex": 503,
    "name": "Samurott",
    "displayName": "대검귀",
    "form": null,
    "pokeApiId": 503,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 95,
      "atk": 100,
      "def": 85,
      "spa": 108,
      "spd": 70,
      "spe": 70
    },
    "abilities": [
      "torrent",
      "shell-armor"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png"
  },
  {
    "id": "10236--hisui",
    "dex": 503,
    "name": "Samurott Hisui",
    "displayName": "대검귀 (히스이)",
    "form": "-Hisui",
    "pokeApiId": 10236,
    "types": [
      "Water",
      "Dark"
    ],
    "base": {
      "hp": 90,
      "atk": 108,
      "def": 80,
      "spa": 100,
      "spd": 65,
      "spe": 85
    },
    "abilities": [
      "torrent",
      "sharpness"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10236.png"
  },
  {
    "id": "505-base",
    "dex": 505,
    "name": "Watchog",
    "displayName": "보르그",
    "form": null,
    "pokeApiId": 505,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 60,
      "atk": 85,
      "def": 69,
      "spa": 60,
      "spd": 69,
      "spe": 77
    },
    "abilities": [
      "illuminate",
      "keen-eye",
      "analytic"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png"
  },
  {
    "id": "510-base",
    "dex": 510,
    "name": "Liepard",
    "displayName": "레파르다스",
    "form": null,
    "pokeApiId": 510,
    "types": [
      "Dark"
    ],
    "base": {
      "hp": 64,
      "atk": 88,
      "def": 50,
      "spa": 88,
      "spd": 50,
      "spe": 106
    },
    "abilities": [
      "limber",
      "unburden",
      "prankster"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png"
  },
  {
    "id": "512-base",
    "dex": 512,
    "name": "Simisage",
    "displayName": "야나키",
    "form": null,
    "pokeApiId": 512,
    "types": [
      "Grass"
    ],
    "base": {
      "hp": 75,
      "atk": 98,
      "def": 63,
      "spa": 98,
      "spd": 63,
      "spe": 101
    },
    "abilities": [
      "gluttony",
      "overgrow"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png"
  },
  {
    "id": "514-base",
    "dex": 514,
    "name": "Simisear",
    "displayName": "바오키",
    "form": null,
    "pokeApiId": 514,
    "types": [
      "Fire"
    ],
    "base": {
      "hp": 75,
      "atk": 98,
      "def": 63,
      "spa": 98,
      "spd": 63,
      "spe": 101
    },
    "abilities": [
      "gluttony",
      "blaze"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png"
  },
  {
    "id": "516-base",
    "dex": 516,
    "name": "Simipour",
    "displayName": "앗차키",
    "form": null,
    "pokeApiId": 516,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 75,
      "atk": 98,
      "def": 63,
      "spa": 98,
      "spd": 63,
      "spe": 101
    },
    "abilities": [
      "gluttony",
      "torrent"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png"
  },
  {
    "id": "530-base",
    "dex": 530,
    "name": "Excadrill",
    "displayName": "몰드류",
    "form": null,
    "pokeApiId": 530,
    "types": [
      "Ground",
      "Steel"
    ],
    "base": {
      "hp": 110,
      "atk": 135,
      "def": 60,
      "spa": 50,
      "spd": 65,
      "spe": 88
    },
    "abilities": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png"
  },
  {
    "id": "531-base",
    "dex": 531,
    "name": "Audino",
    "displayName": "다부니",
    "form": null,
    "pokeApiId": 531,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 103,
      "atk": 60,
      "def": 86,
      "spa": 60,
      "spd": 86,
      "spe": 50
    },
    "abilities": [
      "healer",
      "regenerator",
      "klutz"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png"
  },
  {
    "id": "534-base",
    "dex": 534,
    "name": "Conkeldurr",
    "displayName": "노보청",
    "form": null,
    "pokeApiId": 534,
    "types": [
      "Fighting"
    ],
    "base": {
      "hp": 105,
      "atk": 140,
      "def": 95,
      "spa": 55,
      "spd": 65,
      "spe": 45
    },
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png"
  },
  {
    "id": "547-base",
    "dex": 547,
    "name": "Whimsicott",
    "displayName": "엘풍",
    "form": null,
    "pokeApiId": 547,
    "types": [
      "Grass",
      "Fairy"
    ],
    "base": {
      "hp": 60,
      "atk": 67,
      "def": 85,
      "spa": 77,
      "spd": 75,
      "spe": 116
    },
    "abilities": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png"
  },
  {
    "id": "553-base",
    "dex": 553,
    "name": "Krookodile",
    "displayName": "악비아르",
    "form": null,
    "pokeApiId": 553,
    "types": [
      "Ground",
      "Dark"
    ],
    "base": {
      "hp": 95,
      "atk": 117,
      "def": 80,
      "spa": 65,
      "spd": 70,
      "spe": 92
    },
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png"
  },
  {
    "id": "563-base",
    "dex": 563,
    "name": "Cofagrigus",
    "displayName": "데스니칸",
    "form": null,
    "pokeApiId": 563,
    "types": [
      "Ghost"
    ],
    "base": {
      "hp": 58,
      "atk": 50,
      "def": 145,
      "spa": 95,
      "spd": 105,
      "spe": 30
    },
    "abilities": [
      "mummy"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png"
  },
  {
    "id": "569-base",
    "dex": 569,
    "name": "Garbodor",
    "displayName": "더스트나",
    "form": null,
    "pokeApiId": 569,
    "types": [
      "Poison"
    ],
    "base": {
      "hp": 80,
      "atk": 95,
      "def": 82,
      "spa": 60,
      "spd": 82,
      "spe": 75
    },
    "abilities": [
      "stench",
      "weak-armor",
      "aftermath"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png"
  },
  {
    "id": "571-base",
    "dex": 571,
    "name": "Zoroark",
    "displayName": "조로아크",
    "form": null,
    "pokeApiId": 571,
    "types": [
      "Dark"
    ],
    "base": {
      "hp": 60,
      "atk": 105,
      "def": 60,
      "spa": 120,
      "spd": 60,
      "spe": 105
    },
    "abilities": [
      "illusion"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png"
  },
  {
    "id": "10239--hisui",
    "dex": 571,
    "name": "Zoroark Hisui",
    "displayName": "조로아크 (히스이)",
    "form": "-Hisui",
    "pokeApiId": 10239,
    "types": [
      "Normal",
      "Ghost"
    ],
    "base": {
      "hp": 55,
      "atk": 100,
      "def": 60,
      "spa": 125,
      "spd": 60,
      "spe": 110
    },
    "abilities": [
      "illusion"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10239.png"
  },
  {
    "id": "579-base",
    "dex": 579,
    "name": "Reuniclus",
    "displayName": "란쿨루스",
    "form": null,
    "pokeApiId": 579,
    "types": [
      "Psychic"
    ],
    "base": {
      "hp": 110,
      "atk": 65,
      "def": 75,
      "spa": 125,
      "spd": 85,
      "spe": 30
    },
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png"
  },
  {
    "id": "584-base",
    "dex": 584,
    "name": "Vanilluxe",
    "displayName": "배바닐라",
    "form": null,
    "pokeApiId": 584,
    "types": [
      "Ice"
    ],
    "base": {
      "hp": 71,
      "atk": 95,
      "def": 85,
      "spa": 110,
      "spd": 95,
      "spe": 79
    },
    "abilities": [
      "ice-body",
      "snow-warning",
      "weak-armor"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png"
  },
  {
    "id": "587-base",
    "dex": 587,
    "name": "Emolga",
    "displayName": "에몽가",
    "form": null,
    "pokeApiId": 587,
    "types": [
      "Electric",
      "Flying"
    ],
    "base": {
      "hp": 55,
      "atk": 75,
      "def": 60,
      "spa": 75,
      "spd": 60,
      "spe": 103
    },
    "abilities": [
      "static",
      "motor-drive"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png"
  },
  {
    "id": "609-base",
    "dex": 609,
    "name": "Chandelure",
    "displayName": "샹델라",
    "form": null,
    "pokeApiId": 609,
    "types": [
      "Ghost",
      "Fire"
    ],
    "base": {
      "hp": 60,
      "atk": 55,
      "def": 90,
      "spa": 145,
      "spd": 90,
      "spe": 80
    },
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png"
  },
  {
    "id": "614-base",
    "dex": 614,
    "name": "Beartic",
    "displayName": "툰베어",
    "form": null,
    "pokeApiId": 614,
    "types": [
      "Ice"
    ],
    "base": {
      "hp": 95,
      "atk": 130,
      "def": 80,
      "spa": 70,
      "spd": 80,
      "spe": 50
    },
    "abilities": [
      "snow-cloak",
      "slush-rush",
      "swift-swim"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png"
  },
  {
    "id": "618-base",
    "dex": 618,
    "name": "Stunfisk",
    "displayName": "메더",
    "form": null,
    "pokeApiId": 618,
    "types": [
      "Ground",
      "Electric"
    ],
    "base": {
      "hp": 109,
      "atk": 66,
      "def": 84,
      "spa": 81,
      "spd": 99,
      "spe": 32
    },
    "abilities": [
      "static",
      "limber",
      "sand-veil"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png"
  },
  {
    "id": "10180--galar",
    "dex": 618,
    "name": "Stunfisk Galar",
    "displayName": "메더 (가라르)",
    "form": "-Galar",
    "pokeApiId": 10180,
    "types": [
      "Ground",
      "Steel"
    ],
    "base": {
      "hp": 109,
      "atk": 81,
      "def": 99,
      "spa": 66,
      "spd": 84,
      "spe": 32
    },
    "abilities": [
      "mimicry"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10180.png"
  },
  {
    "id": "623-base",
    "dex": 623,
    "name": "Golurk",
    "displayName": "골루그",
    "form": null,
    "pokeApiId": 623,
    "types": [
      "Ground",
      "Ghost"
    ],
    "base": {
      "hp": 89,
      "atk": 124,
      "def": 80,
      "spa": 55,
      "spd": 80,
      "spe": 55
    },
    "abilities": [
      "iron-fist",
      "klutz",
      "no-guard"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png"
  },
  {
    "id": "635-base",
    "dex": 635,
    "name": "Hydreigon",
    "displayName": "삼삼드래",
    "form": null,
    "pokeApiId": 635,
    "types": [
      "Dark",
      "Dragon"
    ],
    "base": {
      "hp": 92,
      "atk": 105,
      "def": 90,
      "spa": 125,
      "spd": 90,
      "spe": 98
    },
    "abilities": [
      "levitate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png"
  },
  {
    "id": "637-base",
    "dex": 637,
    "name": "Volcarona",
    "displayName": "불카모스",
    "form": null,
    "pokeApiId": 637,
    "types": [
      "Bug",
      "Fire"
    ],
    "base": {
      "hp": 85,
      "atk": 60,
      "def": 65,
      "spa": 135,
      "spd": 105,
      "spe": 100
    },
    "abilities": [
      "flame-body",
      "swarm"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png"
  },
  {
    "id": "652-base",
    "dex": 652,
    "name": "Chesnaught",
    "displayName": "브리가론",
    "form": null,
    "pokeApiId": 652,
    "types": [
      "Grass",
      "Fighting"
    ],
    "base": {
      "hp": 88,
      "atk": 107,
      "def": 122,
      "spa": 74,
      "spd": 75,
      "spe": 64
    },
    "abilities": [
      "overgrow",
      "bulletproof"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png"
  },
  {
    "id": "655-base",
    "dex": 655,
    "name": "Delphox",
    "displayName": "마폭시",
    "form": null,
    "pokeApiId": 655,
    "types": [
      "Fire",
      "Psychic"
    ],
    "base": {
      "hp": 75,
      "atk": 69,
      "def": 72,
      "spa": 114,
      "spd": 100,
      "spe": 104
    },
    "abilities": [
      "blaze",
      "magician"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png"
  },
  {
    "id": "658-base",
    "dex": 658,
    "name": "Greninja",
    "displayName": "개굴닌자",
    "form": null,
    "pokeApiId": 658,
    "types": [
      "Water",
      "Dark"
    ],
    "base": {
      "hp": 72,
      "atk": 95,
      "def": 67,
      "spa": 103,
      "spd": 71,
      "spe": 122
    },
    "abilities": [
      "torrent",
      "protean"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png"
  },
  {
    "id": "660-base",
    "dex": 660,
    "name": "Diggersby",
    "displayName": "파르토",
    "form": null,
    "pokeApiId": 660,
    "types": [
      "Normal",
      "Ground"
    ],
    "base": {
      "hp": 85,
      "atk": 56,
      "def": 77,
      "spa": 50,
      "spd": 77,
      "spe": 78
    },
    "abilities": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png"
  },
  {
    "id": "663-base",
    "dex": 663,
    "name": "Talonflame",
    "displayName": "파이어로",
    "form": null,
    "pokeApiId": 663,
    "types": [
      "Fire",
      "Flying"
    ],
    "base": {
      "hp": 78,
      "atk": 81,
      "def": 71,
      "spa": 74,
      "spd": 69,
      "spe": 126
    },
    "abilities": [
      "flame-body",
      "gale-wings"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png"
  },
  {
    "id": "666--fancy",
    "dex": 666,
    "name": "Vivillon Fancy",
    "displayName": "비비용 (팬시)",
    "form": "-Fancy",
    "pokeApiId": 666,
    "types": [
      "Bug",
      "Flying"
    ],
    "base": {
      "hp": 80,
      "atk": 52,
      "def": 50,
      "spa": 90,
      "spd": 50,
      "spe": 89
    },
    "abilities": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png"
  },
  {
    "id": "10061--eternal",
    "dex": 670,
    "name": "Floette Eternal",
    "displayName": "플라엣테 (영원의 꽃)",
    "form": "-Eternal",
    "pokeApiId": 10061,
    "types": [
      "Fairy"
    ],
    "base": {
      "hp": 74,
      "atk": 65,
      "def": 67,
      "spa": 125,
      "spd": 128,
      "spe": 92
    },
    "abilities": [
      "flower-veil",
      "symbiosis"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10061.png"
  },
  {
    "id": "671-base",
    "dex": 671,
    "name": "Florges",
    "displayName": "플라제스",
    "form": null,
    "pokeApiId": 671,
    "types": [
      "Fairy"
    ],
    "base": {
      "hp": 78,
      "atk": 65,
      "def": 68,
      "spa": 112,
      "spd": 154,
      "spe": 75
    },
    "abilities": [
      "flower-veil",
      "symbiosis"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png"
  },
  {
    "id": "675-base",
    "dex": 675,
    "name": "Pangoro",
    "displayName": "부란다",
    "form": null,
    "pokeApiId": 675,
    "types": [
      "Fighting",
      "Dark"
    ],
    "base": {
      "hp": 95,
      "atk": 124,
      "def": 78,
      "spa": 69,
      "spd": 71,
      "spe": 58
    },
    "abilities": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png"
  },
  {
    "id": "676-base",
    "dex": 676,
    "name": "Furfrou",
    "displayName": "트리미앙",
    "form": null,
    "pokeApiId": 676,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 75,
      "atk": 80,
      "def": 60,
      "spa": 65,
      "spd": 90,
      "spe": 102
    },
    "abilities": [
      "fur-coat"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png"
  },
  {
    "id": "678-base",
    "dex": 678,
    "name": "Meowstic",
    "displayName": "냐오닉스",
    "form": null,
    "pokeApiId": 678,
    "types": [
      "Psychic"
    ],
    "base": {
      "hp": 74,
      "atk": 48,
      "def": 76,
      "spa": 83,
      "spd": 81,
      "spe": 104
    },
    "abilities": [
      "keen-eye",
      "infiltrator",
      "prankster"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png"
  },
  {
    "id": "10025--female",
    "dex": 678,
    "name": "Meowstic Female",
    "displayName": "냐오닉스 (암컷)",
    "form": "-Female",
    "pokeApiId": 10025,
    "types": [
      "Psychic"
    ],
    "base": {
      "hp": 74,
      "atk": 48,
      "def": 76,
      "spa": 83,
      "spd": 81,
      "spe": 104
    },
    "abilities": [
      "keen-eye",
      "infiltrator",
      "competitive"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10025.png"
  },
  {
    "id": "681-base",
    "dex": 681,
    "name": "Aegislash",
    "displayName": "킬가르도",
    "form": null,
    "pokeApiId": 681,
    "types": [
      "Steel",
      "Ghost"
    ],
    "base": {
      "hp": 60,
      "atk": 50,
      "def": 140,
      "spa": 50,
      "spd": 140,
      "spe": 60
    },
    "abilities": [
      "stance-change"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png"
  },
  {
    "id": "683-base",
    "dex": 683,
    "name": "Aromatisse",
    "displayName": "프레프티르",
    "form": null,
    "pokeApiId": 683,
    "types": [
      "Fairy"
    ],
    "base": {
      "hp": 101,
      "atk": 72,
      "def": 72,
      "spa": 99,
      "spd": 89,
      "spe": 29
    },
    "abilities": [
      "healer",
      "aroma-veil"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png"
  },
  {
    "id": "685-base",
    "dex": 685,
    "name": "Slurpuff",
    "displayName": "나루림",
    "form": null,
    "pokeApiId": 685,
    "types": [
      "Fairy"
    ],
    "base": {
      "hp": 82,
      "atk": 80,
      "def": 86,
      "spa": 85,
      "spd": 75,
      "spe": 72
    },
    "abilities": [
      "sweet-veil",
      "unburden"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png"
  },
  {
    "id": "693-base",
    "dex": 693,
    "name": "Clawitzer",
    "displayName": "블로스터",
    "form": null,
    "pokeApiId": 693,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 71,
      "atk": 73,
      "def": 88,
      "spa": 120,
      "spd": 89,
      "spe": 59
    },
    "abilities": [
      "mega-launcher"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png"
  },
  {
    "id": "695-base",
    "dex": 695,
    "name": "Heliolisk",
    "displayName": "일레도리자드",
    "form": null,
    "pokeApiId": 695,
    "types": [
      "Electric",
      "Normal"
    ],
    "base": {
      "hp": 62,
      "atk": 55,
      "def": 52,
      "spa": 109,
      "spd": 94,
      "spe": 109
    },
    "abilities": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png"
  },
  {
    "id": "697-base",
    "dex": 697,
    "name": "Tyrantrum",
    "displayName": "견고라스",
    "form": null,
    "pokeApiId": 697,
    "types": [
      "Rock",
      "Dragon"
    ],
    "base": {
      "hp": 82,
      "atk": 121,
      "def": 119,
      "spa": 69,
      "spd": 59,
      "spe": 71
    },
    "abilities": [
      "strong-jaw",
      "rock-head"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png"
  },
  {
    "id": "699-base",
    "dex": 699,
    "name": "Aurorus",
    "displayName": "아마루르가",
    "form": null,
    "pokeApiId": 699,
    "types": [
      "Rock",
      "Ice"
    ],
    "base": {
      "hp": 123,
      "atk": 77,
      "def": 72,
      "spa": 99,
      "spd": 92,
      "spe": 58
    },
    "abilities": [
      "refrigerate",
      "snow-warning"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png"
  },
  {
    "id": "700-base",
    "dex": 700,
    "name": "Sylveon",
    "displayName": "님피아",
    "form": null,
    "pokeApiId": 700,
    "types": [
      "Fairy"
    ],
    "base": {
      "hp": 95,
      "atk": 65,
      "def": 65,
      "spa": 110,
      "spd": 130,
      "spe": 60
    },
    "abilities": [
      "cute-charm",
      "pixilate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png"
  },
  {
    "id": "701-base",
    "dex": 701,
    "name": "Hawlucha",
    "displayName": "루차불",
    "form": null,
    "pokeApiId": 701,
    "types": [
      "Fighting",
      "Flying"
    ],
    "base": {
      "hp": 78,
      "atk": 92,
      "def": 75,
      "spa": 74,
      "spd": 63,
      "spe": 118
    },
    "abilities": [
      "limber",
      "unburden",
      "mold-breaker"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png"
  },
  {
    "id": "702-base",
    "dex": 702,
    "name": "Dedenne",
    "displayName": "데덴네",
    "form": null,
    "pokeApiId": 702,
    "types": [
      "Electric",
      "Fairy"
    ],
    "base": {
      "hp": 67,
      "atk": 58,
      "def": 57,
      "spa": 81,
      "spd": 67,
      "spe": 101
    },
    "abilities": [
      "cheek-pouch",
      "pickup",
      "plus"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png"
  },
  {
    "id": "706-base",
    "dex": 706,
    "name": "Goodra",
    "displayName": "미끄래곤",
    "form": null,
    "pokeApiId": 706,
    "types": [
      "Dragon"
    ],
    "base": {
      "hp": 90,
      "atk": 100,
      "def": 70,
      "spa": 110,
      "spd": 150,
      "spe": 80
    },
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png"
  },
  {
    "id": "10242--hisui",
    "dex": 706,
    "name": "Goodra Hisui",
    "displayName": "미끄래곤 (히스이)",
    "form": "-Hisui",
    "pokeApiId": 10242,
    "types": [
      "Steel",
      "Dragon"
    ],
    "base": {
      "hp": 80,
      "atk": 100,
      "def": 100,
      "spa": 110,
      "spd": 150,
      "spe": 60
    },
    "abilities": [
      "sap-sipper",
      "shell-armor",
      "gooey"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10242.png"
  },
  {
    "id": "707-base",
    "dex": 707,
    "name": "Klefki",
    "displayName": "클레피",
    "form": null,
    "pokeApiId": 707,
    "types": [
      "Steel",
      "Fairy"
    ],
    "base": {
      "hp": 57,
      "atk": 80,
      "def": 91,
      "spa": 80,
      "spd": 87,
      "spe": 75
    },
    "abilities": [
      "prankster",
      "magician"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png"
  },
  {
    "id": "709-base",
    "dex": 709,
    "name": "Trevenant",
    "displayName": "대로트",
    "form": null,
    "pokeApiId": 709,
    "types": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "hp": 85,
      "atk": 110,
      "def": 76,
      "spa": 65,
      "spd": 82,
      "spe": 56
    },
    "abilities": [
      "natural-cure",
      "frisk",
      "harvest"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png"
  },
  {
    "id": "711-base",
    "dex": 711,
    "name": "Gourgeist",
    "displayName": "펌킨인",
    "form": null,
    "pokeApiId": 711,
    "types": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "hp": 65,
      "atk": 90,
      "def": 122,
      "spa": 58,
      "spd": 75,
      "spe": 84
    },
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png"
  },
  {
    "id": "10030--small",
    "dex": 711,
    "name": "Gourgeist Small",
    "displayName": "펌킨인 (소형)",
    "form": "-Small",
    "pokeApiId": 10030,
    "types": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "hp": 55,
      "atk": 85,
      "def": 122,
      "spa": 58,
      "spd": 75,
      "spe": 99
    },
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10030.png"
  },
  {
    "id": "10031--large",
    "dex": 711,
    "name": "Gourgeist Large",
    "displayName": "펌킨인 (대형)",
    "form": "-Large",
    "pokeApiId": 10031,
    "types": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "hp": 75,
      "atk": 95,
      "def": 122,
      "spa": 58,
      "spd": 75,
      "spe": 69
    },
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10031.png"
  },
  {
    "id": "10032--jumbo",
    "dex": 711,
    "name": "Gourgeist Jumbo",
    "displayName": "펌킨인 (특대형)",
    "form": "-Jumbo",
    "pokeApiId": 10032,
    "types": [
      "Ghost",
      "Grass"
    ],
    "base": {
      "hp": 85,
      "atk": 100,
      "def": 122,
      "spa": 58,
      "spd": 75,
      "spe": 54
    },
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10032.png"
  },
  {
    "id": "713-base",
    "dex": 713,
    "name": "Avalugg",
    "displayName": "크레베이스",
    "form": null,
    "pokeApiId": 713,
    "types": [
      "Ice"
    ],
    "base": {
      "hp": 95,
      "atk": 117,
      "def": 184,
      "spa": 44,
      "spd": 46,
      "spe": 28
    },
    "abilities": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png"
  },
  {
    "id": "10243--hisui",
    "dex": 713,
    "name": "Avalugg Hisui",
    "displayName": "크레베이스 (히스이)",
    "form": "-Hisui",
    "pokeApiId": 10243,
    "types": [
      "Ice",
      "Rock"
    ],
    "base": {
      "hp": 95,
      "atk": 127,
      "def": 184,
      "spa": 34,
      "spd": 36,
      "spe": 38
    },
    "abilities": [
      "strong-jaw",
      "ice-body",
      "sturdy"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10243.png"
  },
  {
    "id": "715-base",
    "dex": 715,
    "name": "Noivern",
    "displayName": "음번",
    "form": null,
    "pokeApiId": 715,
    "types": [
      "Flying",
      "Dragon"
    ],
    "base": {
      "hp": 85,
      "atk": 70,
      "def": 80,
      "spa": 97,
      "spd": 80,
      "spe": 123
    },
    "abilities": [
      "frisk",
      "infiltrator",
      "telepathy"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png"
  },
  {
    "id": "724-base",
    "dex": 724,
    "name": "Decidueye",
    "displayName": "모크나이퍼",
    "form": null,
    "pokeApiId": 724,
    "types": [
      "Grass",
      "Ghost"
    ],
    "base": {
      "hp": 78,
      "atk": 107,
      "def": 75,
      "spa": 100,
      "spd": 100,
      "spe": 70
    },
    "abilities": [
      "overgrow",
      "long-reach"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png"
  },
  {
    "id": "10244--hisui",
    "dex": 724,
    "name": "Decidueye Hisui",
    "displayName": "모크나이퍼 (히스이)",
    "form": "-Hisui",
    "pokeApiId": 10244,
    "types": [
      "Grass",
      "Fighting"
    ],
    "base": {
      "hp": 88,
      "atk": 112,
      "def": 80,
      "spa": 95,
      "spd": 95,
      "spe": 60
    },
    "abilities": [
      "overgrow",
      "scrappy"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10244.png"
  },
  {
    "id": "727-base",
    "dex": 727,
    "name": "Incineroar",
    "displayName": "어흥염",
    "form": null,
    "pokeApiId": 727,
    "types": [
      "Fire",
      "Dark"
    ],
    "base": {
      "hp": 95,
      "atk": 115,
      "def": 90,
      "spa": 80,
      "spd": 90,
      "spe": 60
    },
    "abilities": [
      "blaze",
      "intimidate"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png"
  },
  {
    "id": "730-base",
    "dex": 730,
    "name": "Primarina",
    "displayName": "누리레느",
    "form": null,
    "pokeApiId": 730,
    "types": [
      "Water",
      "Fairy"
    ],
    "base": {
      "hp": 80,
      "atk": 74,
      "def": 74,
      "spa": 126,
      "spd": 116,
      "spe": 60
    },
    "abilities": [
      "torrent",
      "liquid-voice"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png"
  },
  {
    "id": "733-base",
    "dex": 733,
    "name": "Toucannon",
    "displayName": "왕큰부리",
    "form": null,
    "pokeApiId": 733,
    "types": [
      "Normal",
      "Flying"
    ],
    "base": {
      "hp": 80,
      "atk": 120,
      "def": 75,
      "spa": 75,
      "spd": 75,
      "spe": 60
    },
    "abilities": [
      "keen-eye",
      "skill-link",
      "sheer-force"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png"
  },
  {
    "id": "740-base",
    "dex": 740,
    "name": "Crabominable",
    "displayName": "모단단게",
    "form": null,
    "pokeApiId": 740,
    "types": [
      "Fighting",
      "Ice"
    ],
    "base": {
      "hp": 97,
      "atk": 132,
      "def": 77,
      "spa": 62,
      "spd": 67,
      "spe": 43
    },
    "abilities": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png"
  },
  {
    "id": "745-base",
    "dex": 745,
    "name": "Lycanroc",
    "displayName": "루가루암",
    "form": null,
    "pokeApiId": 745,
    "types": [
      "Rock"
    ],
    "base": {
      "hp": 75,
      "atk": 115,
      "def": 65,
      "spa": 55,
      "spd": 65,
      "spe": 112
    },
    "abilities": [
      "keen-eye",
      "sand-rush",
      "steadfast"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png"
  },
  {
    "id": "10126--midnight",
    "dex": 745,
    "name": "Lycanroc Midnight",
    "displayName": "루가루암 (한밤중)",
    "form": "-Midnight",
    "pokeApiId": 10126,
    "types": [
      "Rock"
    ],
    "base": {
      "hp": 85,
      "atk": 115,
      "def": 75,
      "spa": 55,
      "spd": 75,
      "spe": 82
    },
    "abilities": [
      "keen-eye",
      "vital-spirit",
      "no-guard"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10126.png"
  },
  {
    "id": "10152--dusk",
    "dex": 745,
    "name": "Lycanroc Dusk",
    "displayName": "루가루암 (황혼)",
    "form": "-Dusk",
    "pokeApiId": 10152,
    "types": [
      "Rock"
    ],
    "base": {
      "hp": 75,
      "atk": 117,
      "def": 65,
      "spa": 55,
      "spd": 65,
      "spe": 110
    },
    "abilities": [
      "tough-claws"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10152.png"
  },
  {
    "id": "748-base",
    "dex": 748,
    "name": "Toxapex",
    "displayName": "더시마사리",
    "form": null,
    "pokeApiId": 748,
    "types": [
      "Poison",
      "Water"
    ],
    "base": {
      "hp": 50,
      "atk": 63,
      "def": 152,
      "spa": 53,
      "spd": 142,
      "spe": 35
    },
    "abilities": [
      "merciless",
      "limber",
      "regenerator"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png"
  },
  {
    "id": "750-base",
    "dex": 750,
    "name": "Mudsdale",
    "displayName": "만마드",
    "form": null,
    "pokeApiId": 750,
    "types": [
      "Ground"
    ],
    "base": {
      "hp": 100,
      "atk": 125,
      "def": 100,
      "spa": 55,
      "spd": 85,
      "spe": 35
    },
    "abilities": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png"
  },
  {
    "id": "752-base",
    "dex": 752,
    "name": "Araquanid",
    "displayName": "깨비물거미",
    "form": null,
    "pokeApiId": 752,
    "types": [
      "Water",
      "Bug"
    ],
    "base": {
      "hp": 68,
      "atk": 70,
      "def": 92,
      "spa": 50,
      "spd": 132,
      "spe": 42
    },
    "abilities": [
      "water-bubble",
      "water-absorb"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png"
  },
  {
    "id": "758-base",
    "dex": 758,
    "name": "Salazzle",
    "displayName": "염뉴트",
    "form": null,
    "pokeApiId": 758,
    "types": [
      "Poison",
      "Fire"
    ],
    "base": {
      "hp": 68,
      "atk": 64,
      "def": 60,
      "spa": 111,
      "spd": 60,
      "spe": 117
    },
    "abilities": [
      "corrosion",
      "oblivious"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png"
  },
  {
    "id": "763-base",
    "dex": 763,
    "name": "Tsareena",
    "displayName": "달코퀸",
    "form": null,
    "pokeApiId": 763,
    "types": [
      "Grass"
    ],
    "base": {
      "hp": 72,
      "atk": 120,
      "def": 98,
      "spa": 50,
      "spd": 98,
      "spe": 72
    },
    "abilities": [
      "leaf-guard",
      "queenly-majesty",
      "sweet-veil"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png"
  },
  {
    "id": "765-base",
    "dex": 765,
    "name": "Oranguru",
    "displayName": "하랑우탄",
    "form": null,
    "pokeApiId": 765,
    "types": [
      "Normal",
      "Psychic"
    ],
    "base": {
      "hp": 90,
      "atk": 60,
      "def": 80,
      "spa": 90,
      "spd": 110,
      "spe": 60
    },
    "abilities": [
      "inner-focus",
      "telepathy",
      "symbiosis"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png"
  },
  {
    "id": "766-base",
    "dex": 766,
    "name": "Passimian",
    "displayName": "내던숭이",
    "form": null,
    "pokeApiId": 766,
    "types": [
      "Fighting"
    ],
    "base": {
      "hp": 100,
      "atk": 120,
      "def": 90,
      "spa": 40,
      "spd": 60,
      "spe": 80
    },
    "abilities": [
      "receiver",
      "defiant"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png"
  },
  {
    "id": "778-base",
    "dex": 778,
    "name": "Mimikyu",
    "displayName": "따라큐",
    "form": null,
    "pokeApiId": 778,
    "types": [
      "Ghost",
      "Fairy"
    ],
    "base": {
      "hp": 55,
      "atk": 90,
      "def": 80,
      "spa": 50,
      "spd": 105,
      "spe": 96
    },
    "abilities": [
      "disguise"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png"
  },
  {
    "id": "780-base",
    "dex": 780,
    "name": "Drampa",
    "displayName": "할비롱",
    "form": null,
    "pokeApiId": 780,
    "types": [
      "Normal",
      "Dragon"
    ],
    "base": {
      "hp": 78,
      "atk": 60,
      "def": 85,
      "spa": 135,
      "spd": 91,
      "spe": 36
    },
    "abilities": [
      "berserk",
      "sap-sipper",
      "cloud-nine"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png"
  },
  {
    "id": "784-base",
    "dex": 784,
    "name": "Kommo-o",
    "displayName": "짜랑고우거",
    "form": null,
    "pokeApiId": 784,
    "types": [
      "Dragon",
      "Fighting"
    ],
    "base": {
      "hp": 75,
      "atk": 110,
      "def": 125,
      "spa": 100,
      "spd": 105,
      "spe": 85
    },
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png"
  },
  {
    "id": "823-base",
    "dex": 823,
    "name": "Corviknight",
    "displayName": "아머까오",
    "form": null,
    "pokeApiId": 823,
    "types": [
      "Flying",
      "Steel"
    ],
    "base": {
      "hp": 98,
      "atk": 87,
      "def": 105,
      "spa": 53,
      "spd": 85,
      "spe": 67
    },
    "abilities": [
      "pressure",
      "unnerve",
      "mirror-armor"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png"
  },
  {
    "id": "841-base",
    "dex": 841,
    "name": "Flapple",
    "displayName": "애프룡",
    "form": null,
    "pokeApiId": 841,
    "types": [
      "Grass",
      "Dragon"
    ],
    "base": {
      "hp": 70,
      "atk": 110,
      "def": 80,
      "spa": 95,
      "spd": 60,
      "spe": 70
    },
    "abilities": [
      "ripen",
      "gluttony",
      "hustle"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png"
  },
  {
    "id": "842-base",
    "dex": 842,
    "name": "Appletun",
    "displayName": "단지래플",
    "form": null,
    "pokeApiId": 842,
    "types": [
      "Grass",
      "Dragon"
    ],
    "base": {
      "hp": 110,
      "atk": 85,
      "def": 80,
      "spa": 100,
      "spd": 80,
      "spe": 30
    },
    "abilities": [
      "ripen",
      "gluttony",
      "thick-fat"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png"
  },
  {
    "id": "844-base",
    "dex": 844,
    "name": "Sandaconda",
    "displayName": "사다이사",
    "form": null,
    "pokeApiId": 844,
    "types": [
      "Ground"
    ],
    "base": {
      "hp": 72,
      "atk": 107,
      "def": 125,
      "spa": 65,
      "spd": 70,
      "spe": 71
    },
    "abilities": [
      "sand-spit",
      "shed-skin",
      "sand-veil"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png"
  },
  {
    "id": "855-base",
    "dex": 855,
    "name": "Polteageist",
    "displayName": "포트데스",
    "form": null,
    "pokeApiId": 855,
    "types": [
      "Ghost"
    ],
    "base": {
      "hp": 60,
      "atk": 65,
      "def": 65,
      "spa": 134,
      "spd": 114,
      "spe": 70
    },
    "abilities": [
      "weak-armor",
      "cursed-body"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png"
  },
  {
    "id": "858-base",
    "dex": 858,
    "name": "Hatterene",
    "displayName": "브리무음",
    "form": null,
    "pokeApiId": 858,
    "types": [
      "Psychic",
      "Fairy"
    ],
    "base": {
      "hp": 57,
      "atk": 90,
      "def": 95,
      "spa": 136,
      "spd": 103,
      "spe": 29
    },
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png"
  },
  {
    "id": "866-base",
    "dex": 866,
    "name": "Mr. Rime",
    "displayName": "마임꽁꽁",
    "form": null,
    "pokeApiId": 866,
    "types": [
      "Ice",
      "Psychic"
    ],
    "base": {
      "hp": 80,
      "atk": 85,
      "def": 75,
      "spa": 110,
      "spd": 100,
      "spe": 70
    },
    "abilities": [
      "tangled-feet",
      "screen-cleaner",
      "ice-body"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png"
  },
  {
    "id": "867-base",
    "dex": 867,
    "name": "Runerigus",
    "displayName": "데스판",
    "form": null,
    "pokeApiId": 867,
    "types": [
      "Ground",
      "Ghost"
    ],
    "base": {
      "hp": 58,
      "atk": 95,
      "def": 145,
      "spa": 50,
      "spd": 105,
      "spe": 30
    },
    "abilities": [
      "wandering-spirit"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png"
  },
  {
    "id": "869-base",
    "dex": 869,
    "name": "Alcremie",
    "displayName": "마휘핑",
    "form": null,
    "pokeApiId": 869,
    "types": [
      "Fairy"
    ],
    "base": {
      "hp": 65,
      "atk": 60,
      "def": 75,
      "spa": 110,
      "spd": 121,
      "spe": 64
    },
    "abilities": [
      "sweet-veil",
      "aroma-veil"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png"
  },
  {
    "id": "877-base",
    "dex": 877,
    "name": "Morpeko",
    "displayName": "모르페코",
    "form": null,
    "pokeApiId": 877,
    "types": [
      "Electric",
      "Dark"
    ],
    "base": {
      "hp": 58,
      "atk": 95,
      "def": 58,
      "spa": 70,
      "spd": 58,
      "spe": 97
    },
    "abilities": [
      "hunger-switch"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png"
  },
  {
    "id": "887-base",
    "dex": 887,
    "name": "Dragapult",
    "displayName": "드래펄트",
    "form": null,
    "pokeApiId": 887,
    "types": [
      "Dragon",
      "Ghost"
    ],
    "base": {
      "hp": 88,
      "atk": 120,
      "def": 75,
      "spa": 100,
      "spd": 75,
      "spe": 142
    },
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png"
  },
  {
    "id": "899-base",
    "dex": 899,
    "name": "Wyrdeer",
    "displayName": "신비록",
    "form": null,
    "pokeApiId": 899,
    "types": [
      "Normal",
      "Psychic"
    ],
    "base": {
      "hp": 103,
      "atk": 105,
      "def": 72,
      "spa": 105,
      "spd": 75,
      "spe": 65
    },
    "abilities": [
      "intimidate",
      "frisk",
      "sap-sipper"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png"
  },
  {
    "id": "900-base",
    "dex": 900,
    "name": "Kleavor",
    "displayName": "사마자르",
    "form": null,
    "pokeApiId": 900,
    "types": [
      "Bug",
      "Rock"
    ],
    "base": {
      "hp": 70,
      "atk": 135,
      "def": 95,
      "spa": 45,
      "spd": 70,
      "spe": 85
    },
    "abilities": [
      "swarm",
      "sheer-force",
      "sharpness"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png"
  },
  {
    "id": "902-base",
    "dex": 902,
    "name": "Basculegion",
    "displayName": "대쓰여너",
    "form": null,
    "pokeApiId": 902,
    "types": [
      "Water",
      "Ghost"
    ],
    "base": {
      "hp": 120,
      "atk": 112,
      "def": 65,
      "spa": 80,
      "spd": 75,
      "spe": 78
    },
    "abilities": [
      "swift-swim",
      "adaptability",
      "mold-breaker"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png"
  },
  {
    "id": "10248--female",
    "dex": 902,
    "name": "Basculegion Female",
    "displayName": "대쓰여너 (암컷)",
    "form": "-Female",
    "pokeApiId": 10248,
    "types": [
      "Water",
      "Ghost"
    ],
    "base": {
      "hp": 120,
      "atk": 92,
      "def": 65,
      "spa": 100,
      "spd": 75,
      "spe": 78
    },
    "abilities": [
      "swift-swim",
      "adaptability",
      "mold-breaker"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10248.png"
  },
  {
    "id": "903-base",
    "dex": 903,
    "name": "Sneasler",
    "displayName": "포푸니크",
    "form": null,
    "pokeApiId": 903,
    "types": [
      "Fighting",
      "Poison"
    ],
    "base": {
      "hp": 80,
      "atk": 130,
      "def": 60,
      "spa": 40,
      "spd": 80,
      "spe": 120
    },
    "abilities": [
      "pressure",
      "unburden",
      "poison-touch"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png"
  },
  {
    "id": "908-base",
    "dex": 908,
    "name": "Meowscarada",
    "displayName": "마스카나",
    "form": null,
    "pokeApiId": 908,
    "types": [
      "Grass",
      "Dark"
    ],
    "base": {
      "hp": 76,
      "atk": 110,
      "def": 70,
      "spa": 81,
      "spd": 70,
      "spe": 123
    },
    "abilities": [
      "overgrow",
      "protean"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png"
  },
  {
    "id": "911-base",
    "dex": 911,
    "name": "Skeledirge",
    "displayName": "라우드본",
    "form": null,
    "pokeApiId": 911,
    "types": [
      "Fire",
      "Ghost"
    ],
    "base": {
      "hp": 104,
      "atk": 75,
      "def": 100,
      "spa": 110,
      "spd": 75,
      "spe": 66
    },
    "abilities": [
      "blaze",
      "unaware"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png"
  },
  {
    "id": "914-base",
    "dex": 914,
    "name": "Quaquaval",
    "displayName": "웨이니발",
    "form": null,
    "pokeApiId": 914,
    "types": [
      "Water",
      "Fighting"
    ],
    "base": {
      "hp": 85,
      "atk": 120,
      "def": 80,
      "spa": 85,
      "spd": 75,
      "spe": 85
    },
    "abilities": [
      "torrent",
      "moxie"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png"
  },
  {
    "id": "925-base",
    "dex": 925,
    "name": "Maushold",
    "displayName": "파밀리쥐",
    "form": null,
    "pokeApiId": 925,
    "types": [
      "Normal"
    ],
    "base": {
      "hp": 74,
      "atk": 75,
      "def": 70,
      "spa": 65,
      "spd": 75,
      "spe": 111
    },
    "abilities": [
      "friend-guard",
      "cheek-pouch",
      "technician"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png"
  },
  {
    "id": "934-base",
    "dex": 934,
    "name": "Garganacl",
    "displayName": "콜로솔트",
    "form": null,
    "pokeApiId": 934,
    "types": [
      "Rock"
    ],
    "base": {
      "hp": 100,
      "atk": 100,
      "def": 130,
      "spa": 45,
      "spd": 90,
      "spe": 35
    },
    "abilities": [
      "purifying-salt",
      "sturdy",
      "clear-body"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png"
  },
  {
    "id": "936-base",
    "dex": 936,
    "name": "Armarouge",
    "displayName": "카디나르마",
    "form": null,
    "pokeApiId": 936,
    "types": [
      "Fire",
      "Psychic"
    ],
    "base": {
      "hp": 85,
      "atk": 60,
      "def": 100,
      "spa": 125,
      "spd": 80,
      "spe": 75
    },
    "abilities": [
      "flash-fire",
      "weak-armor"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png"
  },
  {
    "id": "937-base",
    "dex": 937,
    "name": "Ceruledge",
    "displayName": "파라블레이즈",
    "form": null,
    "pokeApiId": 937,
    "types": [
      "Fire",
      "Ghost"
    ],
    "base": {
      "hp": 75,
      "atk": 125,
      "def": 80,
      "spa": 60,
      "spd": 100,
      "spe": 85
    },
    "abilities": [
      "flash-fire",
      "weak-armor"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png"
  },
  {
    "id": "939-base",
    "dex": 939,
    "name": "Bellibolt",
    "displayName": "찌리배리",
    "form": null,
    "pokeApiId": 939,
    "types": [
      "Electric"
    ],
    "base": {
      "hp": 109,
      "atk": 64,
      "def": 91,
      "spa": 103,
      "spd": 83,
      "spe": 45
    },
    "abilities": [
      "electromorphosis",
      "static",
      "damp"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png"
  },
  {
    "id": "952-base",
    "dex": 952,
    "name": "Scovillain",
    "displayName": "스코빌런",
    "form": null,
    "pokeApiId": 952,
    "types": [
      "Grass",
      "Fire"
    ],
    "base": {
      "hp": 65,
      "atk": 108,
      "def": 65,
      "spa": 108,
      "spd": 65,
      "spe": 75
    },
    "abilities": [
      "chlorophyll",
      "insomnia",
      "moody"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png"
  },
  {
    "id": "956-base",
    "dex": 956,
    "name": "Espathra",
    "displayName": "클레스퍼트라",
    "form": null,
    "pokeApiId": 956,
    "types": [
      "Psychic"
    ],
    "base": {
      "hp": 95,
      "atk": 60,
      "def": 60,
      "spa": 101,
      "spd": 60,
      "spe": 105
    },
    "abilities": [
      "opportunist",
      "frisk",
      "speed-boost"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png"
  },
  {
    "id": "959-base",
    "dex": 959,
    "name": "Tinkaton",
    "displayName": "두드리짱",
    "form": null,
    "pokeApiId": 959,
    "types": [
      "Fairy",
      "Steel"
    ],
    "base": {
      "hp": 85,
      "atk": 75,
      "def": 77,
      "spa": 70,
      "spd": 105,
      "spe": 94
    },
    "abilities": [
      "mold-breaker",
      "own-tempo",
      "pickpocket"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png"
  },
  {
    "id": "964-base",
    "dex": 964,
    "name": "Palafin",
    "displayName": "돌핀맨",
    "form": null,
    "pokeApiId": 964,
    "types": [
      "Water"
    ],
    "base": {
      "hp": 100,
      "atk": 70,
      "def": 72,
      "spa": 53,
      "spd": 62,
      "spe": 100
    },
    "abilities": [
      "zero-to-hero"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png"
  },
  {
    "id": "968-base",
    "dex": 968,
    "name": "Orthworm",
    "displayName": "꿈트렁",
    "form": null,
    "pokeApiId": 968,
    "types": [
      "Steel"
    ],
    "base": {
      "hp": 70,
      "atk": 85,
      "def": 145,
      "spa": 60,
      "spd": 55,
      "spe": 65
    },
    "abilities": [
      "earth-eater",
      "sand-veil"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png"
  },
  {
    "id": "970-base",
    "dex": 970,
    "name": "Glimmora",
    "displayName": "킬라플로르",
    "form": null,
    "pokeApiId": 970,
    "types": [
      "Rock",
      "Poison"
    ],
    "base": {
      "hp": 83,
      "atk": 55,
      "def": 90,
      "spa": 130,
      "spd": 81,
      "spe": 86
    },
    "abilities": [
      "toxic-debris",
      "corrosion"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png"
  },
  {
    "id": "981-base",
    "dex": 981,
    "name": "Farigiraf",
    "displayName": "키키링",
    "form": null,
    "pokeApiId": 981,
    "types": [
      "Normal",
      "Psychic"
    ],
    "base": {
      "hp": 120,
      "atk": 90,
      "def": 70,
      "spa": 110,
      "spd": 70,
      "spe": 60
    },
    "abilities": [
      "cud-chew",
      "armor-tail",
      "sap-sipper"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png"
  },
  {
    "id": "983-base",
    "dex": 983,
    "name": "Kingambit",
    "displayName": "대도각참",
    "form": null,
    "pokeApiId": 983,
    "types": [
      "Dark",
      "Steel"
    ],
    "base": {
      "hp": 100,
      "atk": 135,
      "def": 120,
      "spa": 60,
      "spd": 85,
      "spe": 50
    },
    "abilities": [
      "defiant",
      "supreme-overlord",
      "pressure"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png"
  },
  {
    "id": "1013-base",
    "dex": 1013,
    "name": "Sinistcha",
    "displayName": "그우린차",
    "form": null,
    "pokeApiId": 1013,
    "types": [
      "Grass",
      "Ghost"
    ],
    "base": {
      "hp": 71,
      "atk": 60,
      "def": 106,
      "spa": 121,
      "spd": 80,
      "spe": 70
    },
    "abilities": [
      "hospitality",
      "heatproof"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png"
  },
  {
    "id": "1018-base",
    "dex": 1018,
    "name": "Archaludon",
    "displayName": "브리두라스",
    "form": null,
    "pokeApiId": 1018,
    "types": [
      "Steel",
      "Dragon"
    ],
    "base": {
      "hp": 90,
      "atk": 105,
      "def": 130,
      "spa": 125,
      "spd": 65,
      "spe": 85
    },
    "abilities": [
      "stamina",
      "sturdy",
      "stalwart"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png"
  },
  {
    "id": "1019-base",
    "dex": 1019,
    "name": "Hydrapple",
    "displayName": "과미드라",
    "form": null,
    "pokeApiId": 1019,
    "types": [
      "Grass",
      "Dragon"
    ],
    "base": {
      "hp": 106,
      "atk": 80,
      "def": 110,
      "spa": 120,
      "spd": 80,
      "spe": 44
    },
    "abilities": [
      "supersweet-syrup",
      "regenerator",
      "sticky-hold"
    ],
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png"
  }
] as const satisfies readonly ChampionsPokemon[];

export const regulationMAMegaEvolutions = [
  {
    "dex": 3,
    "name": "Venusaur Mega",
    "form": "-Mega"
  },
  {
    "dex": 6,
    "name": "Charizard Mega X",
    "form": "-Mega X"
  },
  {
    "dex": 6,
    "name": "Charizard Mega Y",
    "form": "-Mega Y"
  },
  {
    "dex": 9,
    "name": "Blastoise Mega",
    "form": "-Mega"
  },
  {
    "dex": 15,
    "name": "Beedrill Mega",
    "form": "-Mega"
  },
  {
    "dex": 18,
    "name": "Pidgeot Mega",
    "form": "-Mega"
  },
  {
    "dex": 36,
    "name": "Clefable Mega",
    "form": "-Mega"
  },
  {
    "dex": 65,
    "name": "Alakazam Mega",
    "form": "-Mega"
  },
  {
    "dex": 71,
    "name": "Victreebel Mega",
    "form": "-Mega"
  },
  {
    "dex": 80,
    "name": "Slowbro Mega",
    "form": "-Mega"
  },
  {
    "dex": 94,
    "name": "Gengar Mega",
    "form": "-Mega"
  },
  {
    "dex": 115,
    "name": "Kangaskhan Mega",
    "form": "-Mega"
  },
  {
    "dex": 121,
    "name": "Starmie Mega",
    "form": "-Mega"
  },
  {
    "dex": 127,
    "name": "Pinsir Mega",
    "form": "-Mega"
  },
  {
    "dex": 130,
    "name": "Gyarados Mega",
    "form": "-Mega"
  },
  {
    "dex": 142,
    "name": "Aerodactyl Mega",
    "form": "-Mega"
  },
  {
    "dex": 149,
    "name": "Dragonite Mega",
    "form": "-Mega"
  },
  {
    "dex": 154,
    "name": "Meganium Mega",
    "form": "-Mega"
  },
  {
    "dex": 160,
    "name": "Feraligatr Mega",
    "form": "-Mega"
  },
  {
    "dex": 181,
    "name": "Ampharos Mega",
    "form": "-Mega"
  },
  {
    "dex": 208,
    "name": "Steelix Mega",
    "form": "-Mega"
  },
  {
    "dex": 212,
    "name": "Scizor Mega",
    "form": "-Mega"
  },
  {
    "dex": 214,
    "name": "Heracross Mega",
    "form": "-Mega"
  },
  {
    "dex": 227,
    "name": "Skarmory Mega",
    "form": "-Mega"
  },
  {
    "dex": 229,
    "name": "Houndoom Mega",
    "form": "-Mega"
  },
  {
    "dex": 248,
    "name": "Tyranitar Mega",
    "form": "-Mega"
  },
  {
    "dex": 282,
    "name": "Gardevoir Mega",
    "form": "-Mega"
  },
  {
    "dex": 302,
    "name": "Sableye Mega",
    "form": "-Mega"
  },
  {
    "dex": 306,
    "name": "Aggron Mega",
    "form": "-Mega"
  },
  {
    "dex": 308,
    "name": "Medicham Mega",
    "form": "-Mega"
  },
  {
    "dex": 310,
    "name": "Manectric Mega",
    "form": "-Mega"
  },
  {
    "dex": 319,
    "name": "Sharpedo Mega",
    "form": "-Mega"
  },
  {
    "dex": 323,
    "name": "Camerupt Mega",
    "form": "-Mega"
  },
  {
    "dex": 334,
    "name": "Altaria Mega",
    "form": "-Mega"
  },
  {
    "dex": 354,
    "name": "Banette Mega",
    "form": "-Mega"
  },
  {
    "dex": 358,
    "name": "Chimecho Mega",
    "form": "-Mega"
  },
  {
    "dex": 359,
    "name": "Absol Mega",
    "form": "-Mega"
  },
  {
    "dex": 362,
    "name": "Glalie Mega",
    "form": "-Mega"
  },
  {
    "dex": 428,
    "name": "Lopunny Mega",
    "form": "-Mega"
  },
  {
    "dex": 445,
    "name": "Garchomp Mega",
    "form": "-Mega"
  },
  {
    "dex": 448,
    "name": "Lucario Mega",
    "form": "-Mega"
  },
  {
    "dex": 460,
    "name": "Abomasnow Mega",
    "form": "-Mega"
  },
  {
    "dex": 475,
    "name": "Gallade Mega",
    "form": "-Mega"
  },
  {
    "dex": 478,
    "name": "Froslass Mega",
    "form": "-Mega"
  },
  {
    "dex": 500,
    "name": "Emboar Mega",
    "form": "-Mega"
  },
  {
    "dex": 530,
    "name": "Excadrill Mega",
    "form": "-Mega"
  },
  {
    "dex": 531,
    "name": "Audino Mega",
    "form": "-Mega"
  },
  {
    "dex": 609,
    "name": "Chandelure Mega",
    "form": "-Mega"
  },
  {
    "dex": 623,
    "name": "Golurk Mega",
    "form": "-Mega"
  },
  {
    "dex": 652,
    "name": "Chesnaught Mega",
    "form": "-Mega"
  },
  {
    "dex": 655,
    "name": "Delphox Mega",
    "form": "-Mega"
  },
  {
    "dex": 658,
    "name": "Greninja Mega",
    "form": "-Mega"
  },
  {
    "dex": 670,
    "name": "Floette Mega",
    "form": "-Mega"
  },
  {
    "dex": 678,
    "name": "Meowstic Mega",
    "form": "-Mega"
  },
  {
    "dex": 701,
    "name": "Hawlucha Mega",
    "form": "-Mega"
  },
  {
    "dex": 740,
    "name": "Crabominable Mega",
    "form": "-Mega"
  },
  {
    "dex": 780,
    "name": "Drampa Mega",
    "form": "-Mega"
  },
  {
    "dex": 952,
    "name": "Scovillain Mega",
    "form": "-Mega"
  },
  {
    "dex": 970,
    "name": "Glimmora Mega",
    "form": "-Mega"
  }
] as const;
