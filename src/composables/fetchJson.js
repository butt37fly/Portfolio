const cache = new Map()

export async function fetchJson(path) {
  // const url = `${import.meta.env.BASE_URL}${path}`
  const url = `${path}`

  if (cache.has(url)) {
    return cache.get(url)
  }

  const response = await fetch(url)
  const json = await response.json()

  cache.set(url, json)
  return json
}
