#!/usr/bin/env python3
"""Generate a QR code for The Clover Print Thought of the Day page."""
from pathlib import Path

URL = "https://thoughts.thecloverprint.in/"
OUT = Path(__file__).resolve().parent

try:
    import qrcode
    import qrcode.image.svg
except ImportError:
    raise SystemExit(
        'Missing dependency. Install it with: python -m pip install "qrcode[pil]"'
    )

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_Q,
    box_size=16,
    border=4,
)
qr.add_data(URL)
qr.make(fit=True)

png = qr.make_image(fill_color="#171717", back_color="white")
png_path = OUT / "thoughts-qr.png"
png.save(png_path)

svg_factory = qrcode.image.svg.SvgPathImage
svg = qr.make_image(image_factory=svg_factory, fill_color="#171717", back_color="white")
svg_path = OUT / "thoughts-qr.svg"
svg.save(str(svg_path))

print(f"QR destination: {URL}")
print(f"Created: {png_path}")
print(f"Created: {svg_path}")
print("Only print after the custom domain is live and you have tested this URL.")
