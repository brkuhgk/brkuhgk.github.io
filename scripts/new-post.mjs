#!/usr/bin/env node
// Usage:  npm run new "My post title"
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new "My post title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-")
  .replace(/^-|-$/g, "");

const date = new Date().toISOString().slice(0, 10);
const dir = path.join(process.cwd(), "content", "posts");
const file = path.join(dir, `${slug}.md`);

if (existsSync(file)) {
  console.error(`Already exists: content/posts/${slug}.md`);
  process.exit(1);
}

await mkdir(dir, { recursive: true });
await writeFile(
  file,
  `---
title: ${title.includes(":") ? JSON.stringify(title) : title}
date: ${date}
summary:
tags: []
draft: true
---

Write here.
`,
  "utf8"
);

console.log(`\n  content/posts/${slug}.md`);
console.log(`  → /blog/${slug}/`);
console.log(`\n  It's a draft — remove 'draft: true' when you're ready.\n`);
