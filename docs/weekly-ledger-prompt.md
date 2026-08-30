# Weekly Ledger prompt

Fill in the blanks at the bottom, then paste **everything below the line** into a new Grok conversation on Saturday. Ask it to ship to the live site, not a prototype.

---

You are writing and shipping **Issue [NUMBER] of The Ledger** for Via Fidelitatis (viafidelitatis.com) — “the way of fidelity.” Practical financial independence for Catholic families. Site owner: Dustin Himmerich.

**Ship to the live site.** Repo: `daughterpop/super-fi-calc`, production branch **`Fixed`**. Vite + React + Tailwind (emerald/gray), already deployed on Vercel to https://www.viafidelitatis.com. Do not scaffold a new app, do not invent a second visual system, do not leave the work in a sandbox.

The only content change most weeks is: prepend a new edition object at the top of the `editions` array in `src/data/ledger.js`. After that, update `public/sitemap.xml` with the new `/ledger/[slug]` URL. Then commit and push to `Fixed` so Vercel ships it.

Already built — do not rebuild or rewrite these:

- Nav item **Ledger** in the header and footer
- Routes `/ledger` and `/ledger/:slug`
- Homepage Ledger band
- Landing-page intro copy (friendly, reader-facing — leave it)
- Subscribe copy and welcome-to-current-issue flow
- Rotating **referral cards** on `/ledger` (slot 9) and each edition (slot 10). Do not add a new ad, a hardcoded offer, or a fourth “lane.”

**The Ledger** is the name. Keep it. It means the household book: what came in, what is owed, what is given, what can wait. It is not a blog post, not a news feed, and not a saint memorial. Do not rename it in the copy (not “this week’s newsletter,” not “Sunday surplus,” not “our roundup”).

Money exists so it stops crowding out Mass, kids, and generosity.

Issue 01 (Sunday, August 30, 2026) is already live:
- slug: `take-up-septembers-cross`
- title: Take up September’s cross
- Next issue is **02** unless the fill-in below says otherwise. Never reuse a slug.

## Voice

Friendly, clear, a little pastoral. Like a calm note after Mass, not a manifesto and not a sales email.

- Talk to a tired Catholic parent, not to the editor.
- Ordinary words first: bills, rent, school, weekend, Gospel. Site words (surplus, first-fruits, margin, vocation) belong in the lanes, once, if they earn their place.
- Confidence is for the **deal verdict**. The lede should not spoil it (“almost certainly a skip”) or preach (“the Gospel will not let you…”).
- Do not stack liturgy + calendar + verdict + sermon in the opening. One picture of the week, then what this issue actually contains.
- Never put the editorial calendar on the page: no “not a news feed,” no “Monday through Saturday the saint essays stay on the blog,” no “there is no saint post today.” That is for the writer. Readers just get Sunday’s piece.

**Bad lede (do not imitate):**
“The 22nd Sunday in Ordinary Time lands on the doorstep of September. The first of the month is Tuesday. Labor Day ads are already selling a long weekend you did not plan. This week’s surplus is a first-fruits list, a travel offer that is almost certainly a skip, and a Gospel that will not let the household save its life by buying the whole weekend.”

**Better lede (this is the bar):**
“September starts Tuesday, and Labor Day ads are already here. This first Ledger is a simple Sunday read: the bills that should come first this month, a travel offer that only helps if you were already going, and a short note from this week’s Gospel.”

After Issue 01, do **not** re-explain what The Ledger is every week. Just write the issue in that same warmth.

Lane titles and body can be a little firmer than the issue lede. The opening paragraph of the issue is where friendliness matters most.

## Cadence (writer only — do not print this on the site)

- This is the **Sunday** piece. There is **no saint-essay blog post on Sunday**. The fidelity lane IS Sunday’s essay.
- Monday–Saturday saint/memorial posts continue on the blog.
- If a solemnity lands on Sunday, put it in the fidelity lane. Do not publish a second post.
- ~700–900 words total. Three lanes, never four, never two.
- The weekly email IS this edition. Welcome email for new subscribers = current issue, not a teaser. You do not have to send the email; produce the subject line.

## Research first (do this in the reply before drafting)

1. USCCB readings for this Sunday (https://bible.usccb.org). Quote the governing verse in the fidelity lane. Do **not** open the issue lede with the liturgical week name unless the feast *is* the story (Easter, Christmas, a solemnity).
2. One real household money item that hits Catholic families *this* week. Prefer a dated fact over a vibe.
3. One deal to vet. If you cannot verify terms, write a category verdict rather than inventing dollar amounts. Never fabricate a live offer. Check current terms; do not copy last week’s deal.

## Shape

**Title:** 3–7 words. Can be a little more pointed than the lede. Should still make sense to someone who has not been to Mass yet.

**Lede:** 2–3 warm sentences. Name the week in plain English, then name the three things inside. Do not announce the deal verdict.

Then exactly three lanes, matching Issue 01’s object shape:

```js
{
  slug: 'kebab-case-from-title',
  issue: N,
  date: 'YYYY-MM-DD',          // the Sunday
  sundayLabel: 'Sunday, Month D, YYYY',
  title: '...',
  lede: '...',
  lanes: [
    {
      lane: 'household',
      kicker: 'short date or fact',
      title: '...',
      lede: '...',
      body: ['para 1', 'para 2', 'para 3'],
      tool: { label: '...', href: '/calculators/...' },
    },
    {
      lane: 'deal',
      kicker: '...',
      title: '...',
      lede: '...',
      body: ['para 1', 'para 2', 'para 3'],
      verdict: { label: 'Take it' | 'Only if' | 'Skip', note: 'one sentence' },
      tool: { label: '...', href: '/calculators/...' },
    },
    {
      lane: 'fidelity',
      kicker: 'liturgical name is fine here',
      title: '...',
      lede: '...',
      body: ['para 1', 'para 2', 'para 3'],
      tool: { label: '...', href: '/calculators/...' },
    },
  ],
}
```

### Household
One money item that actually touches a Catholic family budget this week. 3 short paragraphs. One internal calculator link.

### Deal
One offer, run through the organic-spend test: already-needed purchases, paid in full, no manufactured spend, no new consumer debt.
**Verdict: Take it / Only if / Skip** (one-sentence note).
Skip is a valid, even preferred, verdict. Do not invent a yes. Put the verdict on the deal card, not in the issue lede.

### Fidelity
Sunday Gospel or feast, applied to this week’s money. Not a homily, and not a publishing note. End on the application, not on “this is Sunday’s essay.” Liturgical week name belongs in the fidelity **kicker**, not in the issue lede.

## Hard no

- No CNA/EWTN recap, no link dump, no “hot deals” list
- No FIRE-as-the-goal, no pause-the-tithe, no emoji
- No shop-talk on the page (cadence, “lanes,” “organic-spend test” as a label for readers)
- No overconfident lede that has already decided the week for them
- No new components, no extra referral units, no copy changes to the Ledger landing intro unless asked
- No Sunday saint essay on the blog

## Output, in order

1. Brief research notes (readings, household fact, deal terms you verified)
2. Slug, issue number, Sunday date
3. Full edition object, then **actually prepend it** in `src/data/ledger.js` and add the URL to `public/sitemap.xml`
4. Commit + push to `Fixed` (live site)
5. One-sentence email subject (friendly, not shouty)
6. One tweet-length X post in the same voice
7. Live URLs: `/ledger` and `/ledger/[slug]`
8. Anything you chose not to say, and why

If a lane cannot be filled honestly, say so and stop. Do not pad. Do not ship a half issue.

## Fill in (do this before you paste)

- Sunday date:
- Issue number:
- Household notes (facts, amounts you trust):
- Deal under consideration (or “none — write a Skip”):
- Calculator to link:
- Anything that must not be said this week:
