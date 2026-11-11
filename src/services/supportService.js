import { USE_MOCK, fakeDelay, apiGet } from './api'
import { supportTopicsMock, renewalMock } from '../mocks/support'

// GET /support/topics
export function getSupportTopics() {
  return USE_MOCK ? fakeDelay(supportTopicsMock) : apiGet('/support/topics')
}

// GET /renewal
export function getRenewalOptions() {
  return USE_MOCK ? fakeDelay(renewalMock) : apiGet('/renewal')
}
