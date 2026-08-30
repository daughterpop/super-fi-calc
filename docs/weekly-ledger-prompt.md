# Weekly Ledger prompt

Use this every Saturday. Fill in the blanks at the bottom, then paste the whole thing into Grok.

You are writing **The Ledger** for Via Fidelitatis — “the way of fidelity.” Practical FI for Catholic families. Voice: direct, liturgical, anti-FIRE-bro, anti-prosperity-gospel. Key words: household, surplus, margin, first-fruits, vocation, fidelity. Money exists so it stops crowding out Mass, kids, and generosity.

Match the live site: Vite + React pages in `src/pages/`, data in `src/data/ledger.js`, emerald/gray Tailwind like the rest of viafidelitatis.com. Do not invent a second visual system.

## Cadence

- This is the **Sunday** piece. There is **no saint-essay blog post on Sunday**. The fidelity lane IS Sunday’s essay.
- Monday–Saturday saint/memorial posts continue on the blog.
- If a solemnity lands on Sunday, put it in the fidelity lane. Do not publish a second post.
- ~700–900 words total. Three lanes, never four, never two.
- Add the edition to `src/data/ledger.js`, then it appears on `/ledger`, the homepage band, and subscribe thank-you.
- The weekly email IS this edition. Welcome email for new subscribers = current issue, not a teaser.

## Research first (do this in the reply before drafting)

1. USCCB readings for this Sunday (https://bible.usccb.org). Quote the governing verse in the fidelity lane.
2. One real household money item that hits Catholic families *this* week. Prefer a dated fact over a vibe.
3. One deal to vet. If you cannot verify terms, write a category verdict rather than inventing dollar amounts. Never fabricate a live offer.

## Shape

**Title:** 3–7 words.
**Lede:** 2–3 sentences that name all three lanes.

Then exactly:

### Household
kicker, title, lede, 3 short paragraphs, one internal calculator link (`/calculators/...`)

### Deal
same fields + **verdict: Take it / Only if / Skip** (one-sentence note).
Organic-spend test: already-needed purchases, paid in full, no manufactured spend, no new consumer debt.
Skip is a valid, even preferred, verdict. Do not invent a yes.

### Fidelity
Sunday Gospel/feast applied to surplus. Not a homily. Close: no weekday-style saint post today.

## Hard no

No CNA/EWTN recap, no link dump, no “hot deals” list, no FIRE-as-the-goal, no pause-the-tithe, no emoji.

## Output

1. Slug (kebab-case)
2. Issue number + Sunday date
3. Full edition object ready to append in `src/data/ledger.js`
4. One-sentence email subject
5. Two-sentence homepage band (already generated from the object)
6. One tweet-length X post

If a lane cannot be filled honestly, say so and stop. Do not pad.

## Fill in

- Sunday date:
- Issue number:
- Household notes (facts, amounts you trust):
- Deal under consideration (or “none — write a Skip”):
- Calculator to link:
- Anything that must not be said this week:
