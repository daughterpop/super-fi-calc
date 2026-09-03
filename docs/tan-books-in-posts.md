# TAN Books in Via Fidelitatis posts

Tracking: append `?afmc=28p` to any tanbooks.com product URL (LeadDyno). That keeps the referral and lands on the book, not the homepage.

Helper: `bookHref('Confessions')` in `src/data/tanBooks.js`.

Do not put TAN on the Tools page. Use:
- Favorite-books strip on `/blog` and at the end of posts (each chip = that product page)
- One "Further reading" title inside a saint post when it earns it

## Daily automation rules

If the saint or virtue has a clear classic TAN title that continues the argument, add `<FurtherReading title="..." note="..." />` after the last household application and before the sign-off. The component resolves the product URL from the title.

- One title only
- One sentence tying the book to today's claim
- Do not mention codes, discounts, or "affiliate"
- If no honest match, omit the block
- Never invent that TAN publishes a title
- If you add a new title, add it to BOOK_PAGES in tanBooks.js (that is an extra file — only do it when shipping a new mapped title)

Starter map:
- Augustine / Monica / ordered loves → Confessions
- Detachment, surplus, Aidan, Clare, John the Baptist → The Imitation of Christ
- Household peace, Jane Frances, marriage rule → Introduction to the Devout Life
- Marian / consecration / Queenship / Assumption → True Devotion to Mary
- Interior fight → The Spiritual Combat
- Kids / family prayer → Oremus
- Dominic / Rosary → The Secret of the Rosary
