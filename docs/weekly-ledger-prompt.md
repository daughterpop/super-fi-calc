# Weekly Ledger prompt

Use this every Saturday. Fill in the blanks at the bottom, then paste the whole thing into Grok.

You are writing **The Ledger** for Via Fidelitatis — “the way of fidelity.” Practical financial independence for Catholic families.

**The Ledger** is the name of the Sunday section. Keep it. It means the household book: what came in, what is owed, what is given, what can wait. It is not a blog post, not a news feed, and not a saint memorial. Do not rename it in the copy (not “this week’s newsletter,” not “Sunday surplus,” not “our roundup”). If a first-time reader would not know what it is, the **lede** should say so in ordinary words — never by explaining the publishing calendar.

Money exists so it stops crowding out Mass, kids, and generosity.

Match the live site: Vite + React, data in `src/data/ledger.js` (prepend the new edition at the top of the `editions` array), emerald/gray Tailwind like the rest of viafidelitatis.com. Do not invent a second visual system.

## Voice

Friendly, clear, a little pastoral. Like a calm note after Mass, not a manifesto and not a sales email.

- Talk to a tired Catholic parent, not to the editor.
- Ordinary words first: bills, rent, school, weekend, Gospel. Site words (surplus, first-fruits, margin, vocation) belong in the lanes, once, if they earn their place.
- Confidence is for the **deal verdict**. The lede should not spoil it (“almost certainly a skip”) or preach (“the Gospel will not let you…”).
- Do not stack liturgy + calendar + verdict + sermon in the opening. One picture of the week, then what this issue actually contains.
- Never put the editorial calendar on the page: no “not a news feed,” no “Monday through Saturday the saint essays stay on the blog,” no “there is no saint post today.” That is for you. Readers just get Sunday’s piece.

**Bad lede (do not imitate):**
“The 22nd Sunday in Ordinary Time lands on the doorstep of September. The first of the month is Tuesday. Labor Day ads are already selling a long weekend you did not plan. This week’s surplus is a first-fruits list, a travel offer that is almost certainly a skip, and a Gospel that will not let the household save its life by buying the whole weekend.”

**Better lede (this is the bar):**
“September starts Tuesday, and Labor Day ads are already here. This first Ledger is a simple Sunday read: the bills that should come first this month, a travel offer that only helps if you were already going, and a short note from this week’s Gospel.”

## Cadence (writer only — do not print this on the site)

- This is the **Sunday** piece. There is **no saint-essay blog post on Sunday**. The fidelity lane IS Sunday’s essay.
- Monday–Saturday saint/memorial posts continue on the blog.
- If a solemnity lands on Sunday, put it in the fidelity lane. Do not publish a second post.
- ~700–900 words total. Three lanes, never four, never two.
- Add the edition to `src/data/ledger.js`. It then appears on `/ledger`, the homepage band, and the subscribe thank-you.
- The weekly email IS this edition. Welcome email for new subscribers = current issue, not a teaser.

## Research first (do this in the reply before drafting)

1. USCCB readings for this Sunday (https://bible.usccb.org). Quote the governing verse in the fidelity lane. Do **not** open the lede with the liturgical week name unless the feast *is* the story (Easter, Christmas, a solemnity).
2. One real household money item that hits Catholic families *this* week. Prefer a dated fact over a vibe.
3. One deal to vet. If you cannot verify terms, write a category verdict rather than inventing dollar amounts. Never fabricate a live offer.

## Shape

**Title:** 3–7 words. Can be a little more pointed than the lede. Should still make sense to someone who has not been to Mass yet.

**Lede:** 2–3 warm sentences. Name the week in plain English, then name the three things inside. Do not announce the deal verdict. Do not explain what The Ledger is every single week after Issue 01 — just write the issue.

Then exactly:

### Household
kicker, title, lede, 3 short paragraphs, one internal calculator link (`/calculators/...`)

### Deal
same fields + **verdict: Take it / Only if / Skip** (one-sentence note).
Organic-spend test: already-needed purchases, paid in full, no manufactured spend, no new consumer debt.
Skip is a valid, even preferred, verdict. Do not invent a yes. Put the verdict on the deal card, not in the issue lede.

### Fidelity
Sunday Gospel or feast, applied to this week’s money. Not a homily, and not a publishing note. End on the application, not on “this is Sunday’s essay.”

## Hard no

- No CNA/EWTN recap, no link dump, no “hot deals” list
- No FIRE-as-the-goal, no pause-the-tithe, no emoji
- No shop-talk on the page (cadence, “lanes,” “organic-spend test” as a label for readers)
- No overconfident lede that has already decided the week for them

## Output

1. Slug (kebab-case)
2. Issue number + Sunday date
3. Full edition object ready to prepend in `src/data/ledger.js`
4. One-sentence email subject (friendly, not shouty)
5. One tweet-length X post in the same voice
6. Anything you chose not to say, and why

If a lane cannot be filled honestly, say so and stop. Do not pad.

## Fill in

- Sunday date:
- Issue number:
- Household notes (facts, amounts you trust):
- Deal under consideration (or “none — write a Skip”):
- Calculator to link:
- Anything that must not be said this week:
