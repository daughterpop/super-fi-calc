# Automation rules — content publishing

These rules apply to every automated content job (Grok tasks, scripts, agents)
that edits this repo. They exist because of the 2026-10-12 incident, when a
daily-post run truncated `src/data/posts.js` to a one-line placeholder and
broke the production build.

## The append-only rule

- **Edit data files by appending or modifying entries — never rewrite whole files.**
  To add a post: read the current file, prepend the new entry object to the
  array, write it back. If the new file is dramatically smaller than the old
  one, stop and report instead of pushing.
- **Never write placeholder text** (`PLACEHOLDER_*`, `TODO`, `...`) into a data
  file and push it. A placeholder is a broken build.
- **One concern per commit.** Don't bundle a content update with refactors.

## Validate before pushing

Run this before every push (locally or in the automation sandbox):

```sh
node scripts/check-content.mjs
```

It checks that `src/data/posts.js` parses, exports a non-empty post list with
all required fields, contains no placeholder text, and that `public/rss.xml`
and `public/sitemap.xml` are well-formed. CI runs the same script on every
push to `Fixed` and every pull request — a red check means the push broke
content; fix forward immediately.

## If a push breaks the build

1. Don't push another "fix" blindly — read the failing check output first.
2. Restore the last good version of the file (git history / GitHub), re-apply
   only the intended change, re-run the check, then push.
3. If the automation can't produce a passing check after two tries, stop and
   flag Dustin instead of pushing a third attempt.
