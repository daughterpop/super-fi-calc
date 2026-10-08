# TAN Books in Via Fidelitatis posts

Tracking: append `?afmc=28p` to any tanbooks.com product URL (LeadDyno). That keeps the referral and lands on the book, not the homepage.

Helper: `bookHref('Confessions')` in `src/data/tanBooks.js`.

Do not put TAN on the Tools page. Use:
- Evergreen post `/blog/books-we-keep-in-the-house` for the household shelf
- One "Further reading" title inside a saint post only when that book continues the argument
- Do not put a books tile on `/blog` or in the post footer

## Daily automation rules

Write the essay first. Only then ask whether one mapped TAN title continues THIS argument. Default is no book block.

If yes, add `<FurtherReading title="..." note="..." />` after the last household application and before the sign-off. The component resolves the product URL from the title.

- One title only
- One sentence tying the book to today's claim
- Do not mention codes, discounts, or "affiliate"
- If no honest match, omit the block
- Never invent that TAN publishes a title
- Do not shape the post around a TAN title

### Editing shared files (posts.js, sitemap.xml, rss.xml)

`src/data/posts.js`, `public/sitemap.xml`, and `public/rss.xml` hold every post on the site. Rewriting them whole has broken production builds and shipped a 2-URL sitemap.

- Never replace, truncate, or regenerate these files. Edit them in place.
- Add the new post by inserting exactly one entry and leaving every existing entry untouched:
  - `src/data/posts.js`: one new object at the top of the `rawPosts` array.
  - `public/sitemap.xml`: one new `<url>` line directly after the `/blog` entry.
  - `public/rss.xml`: one new `<item>` directly before the first existing `<item>`.
- Put the new page file and all three inserts in ONE commit when the tool allows it. If it can only commit one file at a time, commit the page file first, then each insert, and every commit must leave the file complete. No "restore" or follow-up fix commits.
- Never commit placeholder text (`PLACEHOLDER_POSTS`, "...", "rest unchanged", etc.).
- Before committing, check the diff: these three files should only show added lines (the only allowed changed lines are the `/blog` `<lastmod>` in sitemap.xml and `<lastBuildDate>` in rss.xml). If any other existing line is removed or changed, or a file looks shorter than before or truncated, stop and do not commit.
- If the post's slug is already in posts.js, do not add it again.
