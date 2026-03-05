#!/usr/bin/env python3
"""
Generate all required PWA icons from a source image.
Run: python3 generate_icons.py
Requires: pip install Pillow
"""

from PIL import Image, ImageDraw, ImageFont
import os

SIZES = [72, 96, 128, 144, 152, 192, 384, 512]
OUTPUT_DIR = "icons"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def create_icon(size):
    # Background gradient (purple to pink)
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Rounded square background
    padding = size // 8
    radius = size // 4
    for i in range(size):
        ratio = i / size
        r = int(99 + (236 - 99) * ratio)
        g = int(102 + (72 - 102) * ratio)
        b = int(241 + (153 - 241) * ratio)
        draw.line([(0, i), (size, i)], fill=(r, g, b, 255))

    # Mask to rounded square
    mask = Image.new("L", (size, size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    img.putalpha(mask)

    # Add store emoji text
    emoji_size = int(size * 0.55)
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", emoji_size)
    except:
        font = ImageFont.load_default()

    text = "🏪"
    # Center the text
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) // 2
    y = (size - th) // 2 - size // 12
    draw.text((x, y), text, font=font, fill=(255, 255, 255, 255))

    # Save
    path = os.path.join(OUTPUT_DIR, f"icon-{size}.png")
    img.save(path, "PNG")
    print(f"✅ Created {path}")

for size in SIZES:
    create_icon(size)

print("\n🎉 All icons generated in /icons folder!")
print("Also copy one as screenshot1.png:")
print("  cp icons/icon-512.png icons/screenshot1.png")
