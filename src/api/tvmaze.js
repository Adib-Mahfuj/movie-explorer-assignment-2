const BASE_URL = "https://api.tvmaze.com";

/**
 * Fetch the full show catalog.
 * GET /shows
 */
export async function getAllShows() {
  const res = await fetch(`${BASE_URL}/shows`);
  if (!res.ok) {
    throw new Error(`Failed to load shows (status ${res.status})`);
  }
  return res.json();
}

/**
 * Search shows by title.
 * GET /search/shows?q=:query
 * TVMaze wraps each result as { score, show }, so we unwrap it here
 * to keep the shape identical to getAllShows().
 */
export async function searchShows(query) {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error(`Search failed (status ${res.status})`);
  }
  const results = await res.json();
  return results.map((entry) => entry.show);
}

/** Strip TVMaze's HTML-formatted summary down to plain text. */
export function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, "");
}
