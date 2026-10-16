/** Build a root-relative URL that works on localhost and GitHub Pages project sites. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath === '/' ? `${base}/` : `${base}${normalizedPath}`;
}
