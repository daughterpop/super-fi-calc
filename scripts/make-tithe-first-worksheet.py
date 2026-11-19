#!/usr/bin/env python3
"""Generate the one-page Tithe-First Budget Worksheet (US Letter).

Output: public/worksheets/tithe-first-budget-worksheet.pdf
"""
from __future__ import annotations

from pathlib import Path

from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "worksheets" / "tithe-first-budget-worksheet.pdf"

pdfmetrics.registerFont(TTFont("Lato", "/usr/share/fonts/truetype/sand-box/google/Lato/Lato-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Lato-Bold", "/usr/share/fonts/truetype/sand-box/google/Lato/Lato-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Lato-Italic", "/usr/share/fonts/truetype/sand-box/google/Lato/Lato-Italic.ttf"))
pdfmetrics.registerFont(TTFont("Lato-BoldItalic", "/usr/share/fonts/truetype/sand-box/google/Lato/Lato-BoldItalic.ttf"))
pdfmetrics.registerFont(TTFont("Serif", "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Serif-Bold", "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Serif-Italic", "/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf"))

EMERALD = HexColor("#047857")
EMERALD_MID = HexColor("#059669")
EMERALD_PALE = HexColor("#ecfdf5")
INK = HexColor("#111827")
MUTED = HexColor("#4b5563")
RULE = HexColor("#d1d5db")
BOX_EDGE = HexColor("#9ca3af")
BOX_FILL = HexColor("#f9fafb")
HAIR = HexColor("#e5e7eb")
TOTAL_FILL = HexColor("#f3f4f6")


def wrap_text(c: canvas.Canvas, text: str, font: str, size: float, max_width: float) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if c.stringWidth(trial, font, size) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_logo(c: canvas.Canvas, x: float, y: float, size: float = 26) -> None:
    """Draw the Via Fidelitatis mark (path rising to a cross) at (x, y) bottom-left."""
    s = size / 64.0
    c.saveState()
    c.translate(x, y)
    c.scale(s, s)
    c.translate(0, 64)
    c.scale(1, -1)
    p = c.beginPath()
    p.moveTo(6, 42)
    p.curveTo(18, 42, 22, 30, 32, 22)
    p.curveTo(42, 30, 46, 42, 58, 42)
    c.setStrokeColor(EMERALD_MID)
    c.setLineWidth(3.5)
    c.setLineCap(1)
    c.setLineJoin(1)
    c.drawPath(p, stroke=1, fill=0)
    c.setStrokeColor(EMERALD)
    c.setLineWidth(3)
    c.line(32, 10, 32, 26)
    c.line(25, 16, 39, 16)
    c.restoreState()


def money_box(c: canvas.Canvas, x: float, y: float, w: float, h: float, fill=BOX_FILL) -> None:
    c.setFillColor(fill)
    c.setStrokeColor(BOX_EDGE)
    c.setLineWidth(0.6)
    c.roundRect(x, y, w, h, 2, stroke=1, fill=1)
    c.setFillColor(MUTED)
    c.setFont("Lato", 8)
    c.drawString(x + 4, y + (h - 8) / 2, "$")


def row(c: canvas.Canvas, x: float, y: float, width: float, label: str, *, total: bool = False, box_w: float = 86) -> float:
    h = 17
    if total:
        c.setFillColor(TOTAL_FILL)
        c.roundRect(x, y, width, h, 2, stroke=0, fill=1)
        c.setFillColor(INK)
        c.setFont("Lato-Bold", 8.5)
    else:
        c.setFillColor(INK)
        c.setFont("Lato", 8.5)
    c.drawString(x + 4, y + 5, label)
    money_box(c, x + width - box_w, y + 1.5, box_w, h - 3, fill=white if total else BOX_FILL)
    return y - 19


def section_head(c: canvas.Canvas, x: float, y: float, width: float, number: str, title: str) -> float:
    # Number chip
    chip = 14
    c.setFillColor(EMERALD)
    c.roundRect(x, y - 2, chip, chip, 2, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("Lato-Bold", 8)
    c.drawCentredString(x + chip / 2, y + 1.5, number)
    c.setFillColor(INK)
    c.setFont("Lato-Bold", 10)
    c.drawString(x + chip + 6, y + 1, title.upper())
    # Short rule under the title only, so it never collides with amount boxes.
    title_w = c.stringWidth(title.upper(), "Lato-Bold", 10)
    rule_y = y - 5
    c.setStrokeColor(EMERALD_MID)
    c.setLineWidth(0.8)
    c.line(x, rule_y, x + chip + 6 + title_w, rule_y)
    return y - 22


def note(c: canvas.Canvas, x: float, y: float, width: float, text: str) -> float:
    c.setFillColor(EMERALD_PALE)
    lines = wrap_text(c, text, "Lato-Italic", 7.4, width - 14)
    box_h = 8 + 10 * len(lines)
    c.roundRect(x, y - box_h + 10, width, box_h, 3, stroke=0, fill=1)
    c.setFillColor(MUTED)
    c.setFont("Lato-Italic", 7.4)
    ty = y
    for line in lines:
        c.drawString(x + 7, ty - 2, line)
        ty -= 10
    return y - box_h - 4


def table_block(c: canvas.Canvas, x: float, y: float, width: float, number: str, title: str, rows: list[str]) -> float:
    # Header bar doubles as the section heading (number + title).
    h = 18
    c.setFillColor(EMERALD)
    c.roundRect(x, y, width, h, 2, stroke=0, fill=1)
    c.rect(x, y, width, 4, stroke=0, fill=1)
    chip = 12
    c.setFillColor(white)
    c.roundRect(x + 5, y + 3, chip, chip, 2, stroke=0, fill=1)
    c.setFillColor(EMERALD)
    c.setFont("Lato-Bold", 7)
    c.drawCentredString(x + 5 + chip / 2, y + 5.8, number)
    c.setFillColor(white)
    c.setFont("Lato-Bold", 7.5)
    c.drawString(x + 5 + chip + 5, y + 5.5, title.upper())
    c.drawRightString(x + width - 8, y + 5.5, "AMOUNT")
    y -= 1
    row_h = 18
    for i, label in enumerate(rows):
        is_total = i == len(rows) - 1
        bg = TOTAL_FILL if is_total else (white if i % 2 == 0 else HexColor("#fafafa"))
        c.setFillColor(bg)
        c.rect(x, y - row_h, width, row_h, stroke=0, fill=1)
        c.setStrokeColor(HAIR)
        c.setLineWidth(0.4)
        c.line(x, y - row_h, x + width, y - row_h)
        c.setFillColor(INK)
        c.setFont("Lato-Bold" if is_total else "Lato", 8)
        c.drawString(x + 6, y - row_h + 5.5, label)
        money_box(c, x + width - 78, y - row_h + 2.5, 72, row_h - 5, fill=white)
        y -= row_h
    # outer border
    total_h = h + 1 + row_h * len(rows)
    top = y + row_h * len(rows) + 1
    c.setStrokeColor(EMERALD)
    c.setLineWidth(0.8)
    c.rect(x, y, width, total_h, stroke=1, fill=0)
    return y - 8


def build() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=letter)
    c.setTitle("Tithe-First Budget Worksheet")
    c.setAuthor("Via Fidelitatis")
    c.setSubject("A one-page monthly budget that puts first fruits first.")
    c.setCreator("Via Fidelitatis")

    width, height = letter
    left = 0.55 * inch
    right = width - 0.55 * inch
    content_w = right - left
    y = height - 0.42 * inch

    # ----- Header -----
    draw_logo(c, left, y - 22, 26)
    c.setFillColor(EMERALD)
    c.setFont("Lato-Bold", 12.5)
    c.drawString(left + 32, y - 6, "Via Fidelitatis")
    c.setFillColor(MUTED)
    c.setFont("Lato", 7.5)
    c.drawString(left + 32, y - 18, "Faithful stewardship for Catholic households")

    # Month line on the right
    c.setFillColor(INK)
    c.setFont("Lato", 8.5)
    month_label = "Month of"
    c.drawRightString(right - 122, y - 8, month_label)
    c.setStrokeColor(BOX_EDGE)
    c.setLineWidth(0.7)
    c.line(right - 118, y - 10, right, y - 10)

    y -= 34
    c.setStrokeColor(EMERALD)
    c.setLineWidth(1.6)
    c.line(left, y, right, y)
    y -= 20

    c.setFillColor(INK)
    c.setFont("Serif-Bold", 18)
    c.drawString(left, y, "Tithe-First Budget Worksheet")
    y -= 16
    c.setFillColor(MUTED)
    c.setFont("Lato", 8.5)
    c.drawString(left, y, "Give first, then plan the rest. Fill in monthly amounts. The last line should equal $0.")
    y -= 22

    # ----- 1. Income -----
    y = section_head(c, left, y, content_w, "1", "Monthly take-home income")
    for label in ("Take-home pay (source 1)", "Take-home pay (source 2)", "Other take-home income"):
        y = row(c, left, y, content_w, label)
    y = row(c, left, y, content_w, "Total monthly take-home", total=True)
    y -= 8

    # ----- 2. First fruits -----
    y = section_head(c, left, y, content_w, "2", "First fruits: tithe and charity")
    y = note(
        c,
        left,
        y,
        content_w,
        "The fifth precept of the Church asks the faithful to help provide for her material needs, each according to his own ability (CCC 2043). No fixed percentage is required. Write the amount you have prayerfully chosen for your parish and for other works of charity.",
    )
    y -= 2
    for label in ("Parish giving / tithe", "Other charity and alms"):
        y = row(c, left, y, content_w, label)
    y = row(c, left, y, content_w, "Total first fruits", total=True)
    y -= 8

    # ----- 3. Saving and margin -----
    y = section_head(c, left, y, content_w, "3", "Saving and margin")
    for label in ("Emergency fund", "Retirement (401(k), IRA, or similar)", "Sinking funds (car, tuition, gifts, repairs)"):
        y = row(c, left, y, content_w, label)
    y = row(c, left, y, content_w, "Total saving and margin", total=True)
    y -= 14

    # ----- 4 & 5. Side-by-side fill-in tables -----
    gap = 14
    col_w = (content_w - gap) / 2
    table_top = y
    y_left = table_block(
        c,
        left,
        table_top,
        col_w,
        "4",
        "Fixed bills",
        ["Housing", "Utilities", "Insurance", "Minimum debt payments", "Other fixed bills", "Total fixed bills"],
    )
    y_right = table_block(
        c,
        left + col_w + gap,
        table_top,
        col_w,
        "5",
        "Variable spending",
        ["Groceries", "Transportation", "Household and personal", "Hospitality and gifts", "Other variable", "Total variable spending"],
    )
    y = min(y_left, y_right) - 12

    # ----- 6. What's left -----
    y = section_head(c, left, y, content_w, "6", "What’s left (should equal $0)")
    # Summary box
    lines = [
        ("Total monthly take-home", False),
        ("Minus total first fruits", False),
        ("Minus total saving and margin", False),
        ("Minus total fixed bills", False),
        ("Minus total variable spending", False),
        ("What’s left — this line should equal $0", True),
    ]
    box_top = y + 12
    row_h = 17
    box_h = row_h * len(lines) + 8
    box_bottom = box_top - box_h
    c.setFillColor(HexColor("#f8fafc"))
    c.setStrokeColor(EMERALD)
    c.setLineWidth(1)
    c.roundRect(left, box_bottom, content_w, box_h, 4, stroke=1, fill=1)

    ry = box_top - 4 - row_h
    for label, is_total in lines:
        if is_total:
            c.setFillColor(EMERALD_PALE)
            c.roundRect(left + 4, ry, content_w - 8, row_h, 2, stroke=0, fill=1)
            c.setFillColor(EMERALD)
            c.setFont("Lato-Bold", 8.5)
        else:
            c.setFillColor(INK)
            c.setFont("Lato", 8.5)
        c.drawString(left + 10, ry + 5, label)
        money_box(
            c,
            left + content_w - 94,
            ry + 1.5,
            84,
            row_h - 3,
            fill=white,
        )
        ry -= row_h

    y = box_bottom - 14
    c.setFillColor(MUTED)
    c.setFont("Lato-Italic", 7.5)
    balance_note = (
        "If this line is not zero, move money between categories until the plan balances. "
        "Look first at variable spending or a bill you can change — not at first fruits by default."
    )
    for line in wrap_text(c, balance_note, "Lato-Italic", 7.5, content_w):
        c.drawString(left, y, line)
        y -= 10

    # ----- Footer -----
    footer_y = 0.42 * inch
    c.setStrokeColor(EMERALD)
    c.setLineWidth(1)
    c.line(left, footer_y + 16, right, footer_y + 16)
    c.setFillColor(EMERALD)
    c.setFont("Lato-Bold", 8)
    c.drawString(left, footer_y + 4, "viafidelitatis.com")
    c.setFillColor(MUTED)
    c.setFont("Lato", 7.5)
    c.drawRightString(right, footer_y + 4, "Print at 100% on US Letter  ·  Review together once a month")

    c.showPage()
    c.save()
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    build()
