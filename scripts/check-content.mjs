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

checkXml("public/rss.xml", "<rss");
checkXml("public/sitemap.xml", "<urlset");

if (problems.length) {
  console.error(`check-content: ${problems.length} problem(s):\n  - ${problems.join("\n  - ")}`);
  process.exit(1);
}
console.log(
  `check-content: ok (${allPosts?.length ?? "?"} posts, rss.xml and sitemap.xml well-formed)`,
);
