/** Prefix public paths so they work under a GitHub Pages subpath. */
export function asset(path: string) {
  if (!path) return path;
  if (/^(https?:|data:|blob:|mailto:|tel:)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}
