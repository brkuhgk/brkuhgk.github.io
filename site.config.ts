// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to change your site name, bio, links, and tabs.
//  Nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const site = {
  title: "Karthik",
  tagline: "Notes, lists, and things I'm working on.",

  // Shown on the home page under your name. Markdown-ish plain text.
  bio: "I build things — software, hardware, and the occasional 3D-printed mistake. This is where I keep what I'm reading, making, and thinking about.",

  url: "https://brkuhgk.github.io",

  // Footer links. Add or remove freely.
  links: [
    { label: "GitHub", href: "https://github.com/brkuhgk" },
    { label: "Email", href: "mailto:codewithkarthik007@gmail.com" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

// ─────────────────────────────────────────────────────────────
//  HEADER TABS
//  Reorder, rename, add, or delete lines here.
//
//  • { label: "Blog", href: "/blog" }        → the blog index
//  • { label: "Books", href: "/books" }      → renders content/lists/books.md
//  • { label: "X", href: "https://..." }     → any external link
//
//  To add a NEW list tab:
//    1. create content/lists/<name>.md
//    2. add a line below with href: "/<name>"
// ─────────────────────────────────────────────────────────────

export const nav = [
  { label: "Blog", href: "/blog" },
  { label: "List 100", href: "/list-100" },
  { label: "Books", href: "/books" },
  { label: "Events", href: "/events" },
  { label: "Now", href: "/now" },
];
