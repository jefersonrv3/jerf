import { USE_MOCK, fakeDelay, apiGet } from './api'
import { financingMock } from '../mocks/financing'
import { closingMock } from '../mocks/support'

// GET /financing
export function getFinancing() {
  return USE_MOCK ? fakeDelay(financingMock) : apiGet('/financing')
}

// GET /financing/closing
export function getClosing() {
  return USE_MOCK ? fakeDelay(closingMock) : apiGet('/financing/closing')
}
