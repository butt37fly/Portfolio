const cache = new Map()

export async function fetchJson(path) {
  const normalizedPath = path.replace(/^\//, '')

  const baseUrl = import.meta.env.BASE_URL
  const url = `${baseUrl}${normalizedPath}`

  if (cache.has(url)) {
    return cache.get(url)
  }

  const response = await fetch(url)
  const json = await response.json()

  cache.set(url, json)
  return json
}
