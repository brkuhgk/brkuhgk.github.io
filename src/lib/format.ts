const fmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export const formatDate = (d: Date) => fmt.format(d);

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

/** Published posts, newest first. Drafts are hidden in production only. */
export function publish<T extends { data: { draft?: boolean } }>(entries: T[]) {
  return import.meta.env.PROD ? entries.filter((e) => !e.data.draft) : entries;
}
