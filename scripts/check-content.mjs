#!/usr/bin/env node
/**
 * Content guard for src/data/posts.js, public/rss.xml, and public/sitemap.xml.
 *
 * Added 2026-10-12 after the daily-post automation truncated posts.js to a
 * one-line placeholder ("PLACEHOLDER_FULL_CONTENT_FROM_TMP"), which broke the
 * Vite build and left Vercel serving a stale deploy. This script fails loudly
 * (non-zero exit) so a broken push can never look green.
 *
 * Runs in CI (.github/workflows/validate-content.yml) on every push to Fixed
 * and on every pull request. Run it locally before pushing automation edits:
 *   node scripts/check-content.mjs
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];
const bad = (where, msg) => problems.push(`${where}: ${msg}`);

// ---------- src/data/posts.js ----------
const postsPath = join(root, "src/data/posts.js");
const postsSrc = readFileSync(postsPath, "utf8");

// Tripwires for the 2026-10-12 failure mode: file replaced by a placeholder.
if (/PLACEHOLDER/i.test(postsSrc))
  bad("posts.js", 'contains placeholder text (e.g. "PLACEHOLDER_FULL_CONTENT_FROM_TMP")');
if (postsSrc.length < 2000)
  bad("posts.js", `suspiciously small (${postsSrc.length} bytes) — file may be truncated`);
if (!/export\s+const\s+allPosts/.test(postsSrc)) bad("posts.js", "does not export allPosts");

// It must actually parse and export a usable post list.
let allPosts;
try {
  ({ allPosts } = await import(pathToFileURL(postsPath).href));
} catch (e) {
  bad("posts.js", `failed to parse/import: ${e.message}`);
}
if (allPosts !== undefined) {
  if (!Array.isArray(allPosts) || allPosts.length === 0) {
    bad("posts.js", "allPosts must be a non-empty array");
  } else {
    const isText = (v) => typeof v === "string" && v.trim().length > 0;
    const isDateSort = (v) => {
      if (typeof v !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
      const d = new Date(`${v}T12:00:00Z`);
      return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === v;
    };
    const links = new Set();
    for (const [i, p] of allPosts.entries()) {
      const w = `posts[${i}] (${p?.link ?? "?"})`;
      if (!isText(p?.title)) bad(w, "title is required");
      if (!isDateSort(p?.dateSort))
        bad(w, `dateSort must be a real YYYY-MM-DD (got ${JSON.stringify(p?.dateSort)})`);
      if (typeof p?.link !== "string" || !p.link.startsWith("/blog/"))
        bad(w, `link must start with /blog/ (got ${JSON.stringify(p?.link)})`);
      else if (links.has(p.link)) bad(w, "duplicate link");
      links.add(p.link);
      if (!isText(p?.excerpt)) bad(w, "excerpt is required");
      if (!Array.isArray(p?.tags)) bad(w, "tags must be an array");
      if (typeof p?.featured !== "boolean") bad(w, "featured must be a boolean");
    }
  }
}

// ---------- XML files ----------
// Lightweight well-formedness check: declaration present, expected root
// element present, tags balanced. Catches truncation, the incident mode.
const checkXml = (rel, rootTag) => {
  const src = readFileSync(join(root, rel), "utf8");
  if (!src.includes("<?xml")) bad(rel, "missing XML declaration");
  if (!src.includes(rootTag)) bad(rel, `missing root element ${rootTag}`);
  const stack = [];
  const tagRe =
    /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<\?[\s\S]*?\?>|<\/?([A-Za-z_][\w:.-]*)(?:\s[^<>]*)?\/?>/g;
  let m;
  while ((m = tagRe.exec(src))) {
    const full = m[0];
    if (full.startsWith("<!--") || full.startsWith("<![CDATA[") || full.startsWith("<?")) continue;
    const name = m[1];
    if (full.startsWith("</")) {
      const open = stack.pop();
      if (open !== name) {
        bad(rel, `mismatched tag: expected </${open ?? "?"}>, got </${name}>`);
        return;
      }
    } else if (!full.endsWith("/>")) {
      stack.push(name);
    }
  }
  if (stack.length) bad(rel, `unclosed tags: ${stack.join(", ")}`);
};

// ---------- src/data/ledger.js ----------
// Added 2026-11-18: the Nov 14 Ledger Issue 09 push replaced ledger.js and
// sitemap.xml with the literal text "$(cat /tmp/...)" (an unexpanded shell
// substitution). RouteSeo.jsx then failed to import getEdition and every
// Vercel build errored from Nov 14 to Nov 18.
const ledgerPath = join(root, "src/data/ledger.js");
const ledgerSrc = readFileSync(ledgerPath, "utf8");
if (ledgerSrc.length < 2000)
  bad("ledger.js", `suspiciously small (${ledgerSrc.length} bytes) — file may be truncated`);
for (const fn of ["getEdition", "latestEdition", "adjacentEditions"])
  if (!new RegExp(`export\\s+function\\s+${fn}\\b`).test(ledgerSrc))
    bad("ledger.js", `does not export ${fn}()`);

// Shrink guard (added 2026-11-18): an automation rewrite that drops earlier
// issues must fail the build. Issues must run 1..N with no gaps, N must not fall
// below MIN_LEDGER_ISSUES (raise it when a new issue ships), and every issue
// needs a /ledger/<slug> entry in public/sitemap.xml.
const MIN_LEDGER_ISSUES = 9;
try {
  const { editions } = await import(pathToFileURL(ledgerPath).href);
  if (!Array.isArray(editions)) bad("ledger.js", "editions must be an array");
  else {
    const nums = editions.map((e) => e?.issue).sort((a, b) => a - b);
    if (editions.length < MIN_LEDGER_ISSUES)
      bad("ledger.js", `only ${editions.length} issues (expected at least ${MIN_LEDGER_ISSUES}) — earlier issues were dropped`);
    if (nums.some((n, i) => n !== i + 1))
      bad("ledger.js", `issue numbers must run 1..${nums.length} with no gaps (got ${nums.join(",")})`);
    const slugs = new Set();
    const sitemapSrc = readFileSync(join(root, "public/sitemap.xml"), "utf8");
    for (const e of editions) {
      const w = `ledger issue ${e?.issue ?? "?"}`;
      if (typeof e?.slug !== "string" || !/^[a-z0-9-]+$/.test(e.slug)) bad(w, "slug must be kebab-case");
      else if (slugs.has(e.slug)) bad(w, "duplicate slug");
      else if (!sitemapSrc.includes(`/ledger/${e.slug}</loc>`)) bad(w, `public/sitemap.xml is missing /ledger/${e.slug}`);
      slugs.add(e.slug);
      if (!Array.isArray(e?.lanes) || e.lanes.length !== 3) bad(w, "must have exactly 3 lanes");
    }
  }
} catch (e) {
  bad("ledger.js", `failed to parse/import: ${e.message}`);
}

// Tripwire for unexpanded shell substitutions / placeholders in any guarded file.
for (const rel of ["src/data/posts.js", "src/data/ledger.js", "public/rss.xml", "public/sitemap.xml"]) {
  const src = readFileSync(join(root, rel), "utf8");
  if (/\$\((cat|echo)\s/.test(src)) bad(rel, 'contains an unexpanded shell substitution like "$(cat ...)"');
  if (/PLACEHOLDER|rest unchanged/i.test(src)) bad(rel, "contains placeholder text");
}

// RSS item-level checks (the Oct 13 failure: a new block was inserted *after*
// the first <item> line, so the old first entry lost its opening <item>).
{
  const rss = readFileSync(join(root, "public/rss.xml"), "utf8");
  const opens = (rss.match(/<item>/g) || []).length;
  const closes = (rss.match(/<\/item>/g) || []).length;
  if (opens !== closes) bad("public/rss.xml", `<item> count (${opens}) != </item> count (${closes})`);
  if (/<item>\s*<item>/.test(rss) || /<\/item>\s*<title>/.test(rss))
    bad("public/rss.xml", "an <item> is missing its opening or closing tag");
}

checkXml("public/rss.xml", "<rss");
checkXml("public/sitemap.xml", "<urlset");

if (problems.length) {
  console.error(`check-content: ${problems.length} problem(s):\n  - ${problems.join("\n  - ")}`);
  process.exit(1);
}
console.log(
  `check-content: ok (${allPosts?.length ?? "?"} posts, rss.xml and sitemap.xml well-formed)`,
);
