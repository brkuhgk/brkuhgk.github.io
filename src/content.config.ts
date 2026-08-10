import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One markdown file per blog post → content/posts/*.md
const posts = defineCollection({
  loader: glob({ base: "./content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// An item can be a plain string, or an object with extra bits.
// Both of these are valid:
//   - Learn to weld
//   - { text: "Read GEB", done: true, note: "started Jan", link: "https://..." }
const listItem = z.union([
  z.string(),
  z.object({
    text: z.string(),
    note: z.string().optional(),
    link: z.string().optional(),
    date: z.string().optional(),
    done: z.boolean().default(false),
  }),
]);

// One markdown file per list page → content/lists/*.md
const lists = defineCollection({
  loader: glob({ base: "./content/lists", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    // "numbered" | "checklist" | "plain"
    style: z.enum(["numbered", "checklist", "plain"]).default("plain"),
    items: z.array(listItem).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, lists };
