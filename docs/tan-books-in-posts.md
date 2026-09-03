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
