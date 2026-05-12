# Regulation M-A 포켓몬 목록을 수집해 앱 데이터 파일로 생성하는 스크립트
import json
import re
import time
from pathlib import Path
from urllib.parse import quote

import requests

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "champions-regulation-ma.ts"
BULBAPEDIA_RAW = "https://bulbapedia.bulbagarden.net/w/index.php?title=Regulation_Set_M-A&action=raw"
POKEAPI = "https://pokeapi.co/api/v2"
HEADERS = {"User-Agent": "ChampForge data fetch (local development)"}

FORM_SUFFIX_KO = {
    "-Alola": "알로라",
    "-Galar": "가라르",
    "-Hisui": "히스이",
    "-Paldea Combat": "팔데아 컴뱃종",
    "-Paldea Blaze": "팔데아 블레이즈종",
    "-Paldea Aqua": "팔데아 워터종",
    "-Heat": "히트로토무",
    "-Wash": "워시로토무",
    "-Frost": "프로스트로토무",
    "-Fan": "스핀로토무",
    "-Mow": "커트로토무",
    "-Fancy": "팬시",
    "-Eternal": "영원의 꽃",
    "-Female": "암컷",
    "-Small": "소형",
    "-Large": "대형",
    "-Jumbo": "특대형",
    "-Midnight": "한밤중",
    "-Dusk": "황혼",
}


def slugify(name: str) -> str:
    return (
        name.lower()
        .replace(".", "")
        .replace("'", "")
        .replace(" ", "-")
        .replace(":", "")
    )


def pokemon_endpoint_name(base_name: str, dex: int, ig: str | None) -> str:
    base = slugify(base_name)
    if not ig:
        return str(dex)

    if ig in {"-Alola", "-Galar", "-Hisui"}:
        return f"{base}-{ig[1:].lower()}"

    if ig == "-Paldea Combat":
        return "tauros-paldea-combat-breed"
    if ig == "-Paldea Blaze":
        return "tauros-paldea-blaze-breed"
    if ig == "-Paldea Aqua":
        return "tauros-paldea-aqua-breed"

    if base == "rotom" and ig in {"-Heat", "-Wash", "-Frost", "-Fan", "-Mow"}:
        return f"rotom-{ig[1:].lower()}"

    if ig == "-Eternal":
        return "floette-eternal"
    if ig == "-Female":
        return f"{base}-female"
    if base == "gourgeist" and ig == "-Jumbo":
        return "gourgeist-super"
    if base == "gourgeist" and ig in {"-Small", "-Large"}:
        return f"gourgeist-{ig[1:].lower()}"
    if base == "lycanroc" and ig in {"-Midnight", "-Dusk"}:
        return f"lycanroc-{ig[1:].lower()}"

    return str(dex)


def fetch_json(url: str) -> dict:
    response = requests.get(url, headers=HEADERS, timeout=30)
    response.raise_for_status()
    return response.json()


def korean_species_name(species_url: str, fallback: str) -> str:
    species = fetch_json(species_url)
    for entry in species.get("names", []):
        if entry.get("language", {}).get("name") == "ko":
            return entry["name"]
    return fallback


def korean_resource_name(resource_url: str, fallback: str) -> str:
    resource = fetch_json(resource_url)
    for entry in resource.get("names", []):
        if entry.get("language", {}).get("name") == "ko":
            return entry["name"]
    return fallback


def parse_cp_cards(section: str) -> list[dict]:
    cards = []
    for raw in re.findall(r"\{\{CPCard\|([^}]+)\}\}", section):
        parts = raw.split("|")
        dex = int(parts[0])
        name = parts[1]
        ig = None
        for part in parts[2:]:
            if part.startswith("ig="):
                ig = part.split("=", 1)[1]
        cards.append({"dex": dex, "name": name, "ig": ig})
    return cards


def to_data_entry(card: dict) -> dict:
    endpoint_name = pokemon_endpoint_name(card["name"], card["dex"], card["ig"])
    try:
        pokemon = fetch_json(f"{POKEAPI}/pokemon/{quote(endpoint_name)}")
    except requests.HTTPError:
        pokemon = fetch_json(f"{POKEAPI}/pokemon/{card['dex']}")

    display_name = korean_species_name(pokemon["species"]["url"], card["name"])
    form_suffix = FORM_SUFFIX_KO.get(card["ig"] or "")
    if form_suffix and card["ig"] not in {"-Heat", "-Wash", "-Frost", "-Fan", "-Mow"}:
        display_name = f"{display_name} ({form_suffix})"
    elif form_suffix:
        display_name = form_suffix

    stats = {stat["stat"]["name"]: stat["base_stat"] for stat in pokemon["stats"]}
    base = {
        "hp": stats["hp"],
        "atk": stats["attack"],
        "def": stats["defense"],
        "spa": stats["special-attack"],
        "spd": stats["special-defense"],
        "spe": stats["speed"],
    }
    image = (
        pokemon.get("sprites", {})
        .get("other", {})
        .get("official-artwork", {})
        .get("front_default")
    ) or f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{card['dex']}.png"

    return {
        "id": f"{pokemon['id']}-{slugify(card['ig'] or 'base')}",
        "dex": card["dex"],
        "name": card["name"] if not card["ig"] else f"{card['name']} {card['ig'][1:]}",
        "displayName": display_name,
        "form": card["ig"],
        "pokeApiId": pokemon["id"],
        "types": [slot["type"]["name"].title() for slot in pokemon["types"]],
        "base": base,
        "abilities": [item["ability"]["name"] for item in pokemon["abilities"]],
        "image": image,
    }


def main() -> None:
    raw = requests.get(BULBAPEDIA_RAW, headers=HEADERS, timeout=30).text
    eligible_start = raw.index("==Eligible Pokémon==")
    mega_start = raw.index("===Mega Evolutions===")
    eligible_cards = parse_cp_cards(raw[eligible_start:mega_start])
    mega_cards = parse_cp_cards(raw[mega_start:])

    entries = []
    ability_urls = {}
    for index, card in enumerate(eligible_cards, start=1):
        entry = to_data_entry(card)
        entries.append(entry)
        for ability in entry["abilities"]:
            ability_urls[ability] = f"{POKEAPI}/ability/{quote(ability)}"
        if index % 25 == 0:
            print(f"fetched {index}/{len(eligible_cards)}")
        time.sleep(0.03)

    ability_name_ko = {}
    for index, (ability, url) in enumerate(sorted(ability_urls.items()), start=1):
        ability_name_ko[ability] = korean_resource_name(url, ability)
        if index % 25 == 0:
            print(f"fetched ability names {index}/{len(ability_urls)}")
        time.sleep(0.03)

    mega_entries = [
        {
            "dex": card["dex"],
            "name": card["name"] if not card["ig"] else f"{card['name']} {card['ig'][1:]}",
            "form": card["ig"],
        }
        for card in mega_cards
    ]

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        "// 포켓몬 챔피언스 Regulation M-A 실제 eligible 포켓몬 데이터\n"
        "export type ChampionsPokemon = {\n"
        "  id: string;\n"
        "  dex: number;\n"
        "  name: string;\n"
        "  displayName: string;\n"
        "  form: string | null;\n"
        "  pokeApiId: number;\n"
        "  types: string[];\n"
        "  base: { hp: number; atk: number; def: number; spa: number; spd: number; spe: number };\n"
        "  abilities: string[];\n"
        "  image: string;\n"
        "};\n\n"
        f"export const REGULATION_MA_SOURCE = {json.dumps(BULBAPEDIA_RAW, ensure_ascii=False)};\n"
        f"export const REGULATION_MA_ELIGIBLE_COUNT = {len(entries)};\n"
        f"export const REGULATION_MA_MEGA_COUNT = {len(mega_entries)};\n\n"
        f"export const regulationMAEligiblePokemon = {json.dumps(entries, ensure_ascii=False, indent=2)} as const satisfies readonly ChampionsPokemon[];\n\n"
        f"export const regulationMAAbilityNameKo = {json.dumps(ability_name_ko, ensure_ascii=False, indent=2)} as const;\n\n"
        f"export const regulationMAMegaEvolutions = {json.dumps(mega_entries, ensure_ascii=False, indent=2)} as const;\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT} with {len(entries)} eligible Pokemon and {len(mega_entries)} mega forms")


if __name__ == "__main__":
    main()
