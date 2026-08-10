# brkuhgk.github.io

My blog and lists. Live at **https://brkuhgk.github.io**

Push to `main` → GitHub Actions builds and deploys. Usually live in ~60 seconds.

---

## Write a new post

**From your laptop:**

```bash
npm run new "The title of the thing"
```

That creates `content/posts/the-title-of-the-thing.md` as a draft. Write, then
delete the `draft: true` line and push.

**From your phone or anyone's browser:** go to
[content/posts](https://github.com/brkuhgk/brkuhgk.github.io/tree/main/content/posts)
on github.com → **Add file → Create new file** → name it `something.md` → paste:

```markdown
---
title: Something
date: 2026-08-09
summary: One line that shows up in the list.
tags: [notes]
---

Your writing here.
```

Commit. Done.

To edit an existing post, open it on github.com and click the ✏️ pencil.

### Post frontmatter

| Field     | Required | Notes                                    |
| --------- | -------- | ---------------------------------------- |
| `title`   | yes      |                                          |
| `date`    | yes      | `YYYY-MM-DD`                             |
| `summary` | no       | Shown on index pages and in RSS          |
| `tags`    | no       | `[one, two]`                             |
| `draft`   | no       | `true` hides it from the live site       |

The filename becomes the URL: `content/posts/my-post.md` → `/blog/my-post/`.

---

## Change the header tabs

Everything lives in [`site.config.ts`](site.config.ts). Edit the `nav` array:

```ts
export const nav = [
  { label: "Blog", href: "/blog" },
  { label: "Books", href: "/books" },
  { label: "Elsewhere", href: "https://github.com/brkuhgk" }, // external is fine
];
```

Reorder, rename, delete — the header follows.

---

## Add a new list page

Two steps:

1. Create `content/lists/<name>.md`
2. Add `{ label: "Name", href: "/<name>" }` to `nav` in `site.config.ts`

```markdown
---
title: Films
summary: What I watched.
style: plain # plain | numbered | checklist
items:
  - Stalker
  - text: Chungking Express
    note: Rewatch
    date: "2026"
    link: https://example.com
    done: false
---

Optional markdown intro, rendered above the list.
```

Items can be a bare string or an object with `text`, `note`, `date`, `link`,
`done`. Mix both in one list.

- `style: numbered` → 1, 2, 3 (used by **List 100**)
- `style: checklist` → checkboxes, with a "3 of 10 done" counter (used by **Now**)
- `style: plain` → clean rows (used by **Books**, **Events**)

Existing lists: `list-100.md`, `books.md`, `events.md`, `now.md`.

---

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:4321. Drafts are visible in dev, hidden in production.

```bash
npm run build
```

Builds to `dist/` — same thing CI runs, so use it to catch errors before pushing.

---

## Change how it looks

Colours, fonts, and spacing are CSS variables at the top of
[`src/styles/global.css`](src/styles/global.css). Light and dark are separate
blocks. There's a theme toggle in the header; it remembers your choice.

---

## Layout

```
site.config.ts            title, bio, footer links, header tabs
content/posts/*.md        blog posts (one file per post)
content/lists/*.md        list pages (one file per list)
src/pages/                routes
src/styles/global.css     all the styling
.github/workflows/        deploy on push to main
```

The `master` branch holds the old academicpages site.
