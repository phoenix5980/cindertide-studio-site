/** Public site URL (no trailing slash) used for canonical and Open Graph links. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? "https://phoenix5980.github.io/cindertide-studio-site"
).replace(/\/$/, "");
