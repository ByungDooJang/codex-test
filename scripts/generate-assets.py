from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import random
import math

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

WARM = (246, 246, 243)
INK = (38, 38, 34)
RED = (230, 0, 35)


def noise_overlay(img, amount=10):
    px = img.load()
    random.seed(9)
    for y in range(img.height):
        for x in range(img.width):
            if random.random() < 0.22:
                r, g, b = px[x, y][:3]
                n = random.randint(-amount, amount)
                px[x, y] = (max(0, min(255, r + n)), max(0, min(255, g + n)), max(0, min(255, b + n)))
    return img


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def save(img, name):
    img = noise_overlay(img.convert("RGB"), 7)
    img.save(OUT / name, quality=92)


def gradient(size, top, bottom):
    img = Image.new("RGB", size, top)
    draw = ImageDraw.Draw(img)
    for y in range(size[1]):
        t = y / max(1, size[1] - 1)
        c = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        draw.line((0, y, size[0], y), fill=c)
    return img


def room_scene(name, size=(1400, 1800), palette=None, workers=False, completed=True):
    palette = palette or {}
    img = gradient(size, palette.get("ceiling", (250, 248, 242)), palette.get("floor", (184, 164, 138)))
    d = ImageDraw.Draw(img, "RGBA")
    w, h = size
    vp = (w // 2, int(h * 0.46))

    # Walls, floor, perspective lines
    d.polygon([(0, int(h * .18)), vp, (0, h)], fill=palette.get("left_wall", (226, 220, 207, 255)))
    d.polygon([(w, int(h * .18)), vp, (w, h)], fill=palette.get("right_wall", (238, 235, 226, 255)))
    d.polygon([(0, h), vp, (w, h)], fill=palette.get("floor_rgba", (177, 151, 117, 255)))
    for i in range(-5, 7):
        x = int(w * (i + 5) / 10)
        d.line((x, h, vp[0], vp[1]), fill=(116, 91, 65, 50), width=2)
    for y in range(int(h * .62), h, 120):
        d.line((0, y, w, y - 20), fill=(116, 91, 65, 40), width=2)

    # Window and light
    d.rounded_rectangle((int(w*.58), int(h*.16), int(w*.9), int(h*.46)), radius=28, fill=(237, 239, 230, 230))
    d.rectangle((int(w*.6), int(h*.18), int(w*.88), int(h*.44)), fill=(210, 220, 210, 210))
    d.line((int(w*.74), int(h*.18), int(w*.74), int(h*.44)), fill=(255,255,255,170), width=10)
    d.polygon([(int(w*.56), int(h*.45)), (w, int(h*.62)), (w, h), (int(w*.47), h)], fill=(255, 255, 230, 42))

    if completed:
        # Sofa, table, rug, built-ins
        d.rounded_rectangle((int(w*.12), int(h*.54), int(w*.54), int(h*.73)), radius=42, fill=(93, 95, 86, 255))
        d.rounded_rectangle((int(w*.15), int(h*.49), int(w*.39), int(h*.61)), radius=34, fill=(118, 121, 110, 255))
        d.rounded_rectangle((int(w*.42), int(h*.50), int(w*.55), int(h*.62)), radius=30, fill=(132, 135, 123, 255))
        d.rounded_rectangle((int(w*.2), int(h*.74), int(w*.78), int(h*.91)), radius=60, fill=(218, 208, 190, 190))
        d.ellipse((int(w*.36), int(h*.69), int(w*.62), int(h*.79)), fill=(84, 64, 47, 245))
        d.ellipse((int(w*.39), int(h*.68), int(w*.59), int(h*.76)), fill=(151, 121, 91, 255))
        d.rounded_rectangle((int(w*.09), int(h*.2), int(w*.35), int(h*.41)), radius=24, fill=(64, 64, 58, 245))
        d.rounded_rectangle((int(w*.11), int(h*.22), int(w*.33), int(h*.39)), radius=18, fill=(36, 36, 34, 255))
    else:
        # Construction progress
        d.rounded_rectangle((int(w*.08), int(h*.54), int(w*.5), int(h*.62)), radius=12, fill=(204, 190, 168, 255))
        d.rectangle((int(w*.12), int(h*.62), int(w*.2), int(h*.88)), fill=(142, 122, 95, 255))
        d.rectangle((int(w*.38), int(h*.62), int(w*.46), int(h*.88)), fill=(142, 122, 95, 255))
        d.line((int(w*.12), int(h*.31), int(w*.47), int(h*.55)), fill=(69, 69, 64, 255), width=10)
        d.line((int(w*.47), int(h*.31), int(w*.12), int(h*.55)), fill=(69, 69, 64, 255), width=10)
        for x in [0.63, 0.71, 0.79]:
            d.rounded_rectangle((int(w*x), int(h*.56), int(w*(x+.04)), int(h*.83)), radius=10, fill=(221, 144, 66, 255))

    if workers:
        for x, shirt in [(0.21, (230, 0, 35, 255)), (0.76, (38, 38, 34, 255))]:
            cx = int(w*x)
            cy = int(h*.58)
            d.ellipse((cx-34, cy-110, cx+34, cy-42), fill=(198, 153, 118, 255))
            d.polygon([(cx-60, cy-38), (cx+60, cy-38), (cx+78, cy+142), (cx-66, cy+142)], fill=shirt)
            d.line((cx-38, cy+132, cx-58, cy+270), fill=(57, 57, 52, 255), width=24)
            d.line((cx+38, cy+132, cx+62, cy+270), fill=(57, 57, 52, 255), width=24)

    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=115))
    save(img, name)


def material_flatlay(name, size=(1400, 1400)):
    img = Image.new("RGB", size, (244, 242, 235))
    d = ImageDraw.Draw(img, "RGBA")
    w, h = size
    random.seed(12)
    colors = [(210, 190, 164), (82, 86, 77), (238, 232, 218), (166, 126, 88), (226, 226, 218)]
    for i in range(14):
        x = random.randint(-80, w-260)
        y = random.randint(-60, h-220)
        ww = random.randint(260, 520)
        hh = random.randint(170, 430)
        c = colors[i % len(colors)]
        d.rounded_rectangle((x, y, x+ww, y+hh), radius=32, fill=c+(235,))
        d.line((x+20, y+36, x+ww-20, y+hh-36), fill=(255,255,255,45), width=3)
    d.rounded_rectangle((92, 90, 480, 280), radius=999, fill=(255,255,255,235))
    d.text((136, 145), "Material board", fill=INK)
    save(img, name)


def before_after(name, size=(1600, 1100)):
    left = gradient((size[0]//2, size[1]), (206, 198, 185), (132, 124, 111))
    right = gradient((size[0]//2, size[1]), (250, 247, 239), (186, 162, 130))
    img = Image.new("RGB", size)
    img.paste(left, (0, 0)); img.paste(right, (size[0]//2, 0))
    d = ImageDraw.Draw(img, "RGBA")
    w, h = size
    d.rectangle((w//2-5, 0, w//2+5, h), fill=(255,255,255,255))
    # Before clutter
    d.rectangle((110, 370, 530, 630), fill=(98, 91, 82, 255))
    d.rectangle((135, 320, 480, 430), fill=(121, 109, 96, 255))
    d.line((90, 700, 690, 620), fill=(74, 68, 61, 120), width=5)
    # After clean kitchen
    d.rounded_rectangle((930, 210, 1470, 720), radius=22, fill=(246, 244, 236, 255))
    for x in range(950, 1450, 120):
        d.line((x, 230, x, 700), fill=(218, 214, 205, 255), width=3)
    d.rounded_rectangle((920, 740, 1500, 850), radius=32, fill=(114, 92, 70, 255))
    d.ellipse((1150, 620, 1300, 700), fill=(40, 40, 36, 255))
    d.rounded_rectangle((70, 70, 230, 132), radius=31, fill=(255,255,255,235))
    d.rounded_rectangle((870, 70, 1040, 132), radius=31, fill=(255,255,255,235))
    d.text((116, 92), "Before", fill=INK)
    d.text((920, 92), "After", fill=INK)
    save(img, name)


room_scene("hero-completed.jpg", size=(1800, 1350), completed=True)
room_scene("living-room.jpg", completed=True)
room_scene("site-progress.jpg", completed=False, workers=True)
room_scene("kitchen-finish.jpg", completed=True, palette={"floor": (190, 175, 156), "left_wall": (238, 234, 222, 255)})
room_scene("bath-detail.jpg", size=(1200, 1600), completed=True, palette={"floor": (156, 156, 148), "left_wall": (218, 218, 210, 255), "right_wall": (245, 245, 240, 255)})
room_scene("team-onsite.jpg", size=(1200, 1500), completed=False, workers=True)
material_flatlay("material-board.jpg")
before_after("before-after.jpg")
