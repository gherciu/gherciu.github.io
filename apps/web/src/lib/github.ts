/**
 * Read at build time only — the site is a static export, so these calls run during
 * `next build` and the resulting counts are baked into the HTML.
 */
async function getStarsByRepository(repository: string): Promise<number | undefined> {
  const response = await fetch(`https://api.github.com/repos/${repository}`, {
    headers: { Accept: 'application/vnd.github+json' },
  })

  if (!response.ok) return undefined

  const { stargazers_count: stars } = (await response.json()) as { stargazers_count?: number }

  return stars
}

export default {
  getStarsByRepository,
}
