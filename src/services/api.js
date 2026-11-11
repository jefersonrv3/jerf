// Cliente HTTP simples. Só é usado quando VITE_USE_MOCK=false.
const BASE_URL = import.meta.env.VITE_API_URL

export const USE_MOCK = import.meta.env.VITE_USE_MOCK !== 'false'

// Simula o tempo de resposta de uma API (só para o mock).
export function fakeDelay(data, ms = 400) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}

export async function apiGet(path) {
  const response = await fetch(`${BASE_URL}${path}`)
  if (!response.ok) throw new Error(`Erro ${response.status} ao buscar ${path}`)
  return response.json()
}

export async function apiPut(path, body) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!response.ok) throw new Error(`Erro ${response.status} ao salvar ${path}`)
  return response.json()
}
