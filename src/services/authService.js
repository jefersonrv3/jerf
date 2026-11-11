import { USE_MOCK, fakeDelay } from './api'

// POST /auth/login (mock: aceita qualquer valor)
export function login(email) {
  if (!USE_MOCK) throw new Error('Login real ainda não implementado')
  return fakeDelay({ token: 'token-de-teste', email }, 300)
}
