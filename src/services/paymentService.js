import { USE_MOCK, fakeDelay, apiGet } from './api'
import { paymentsMock, overdueDetailMock } from '../mocks/payments'

// GET /payments
export function getPayments() {
  return USE_MOCK ? fakeDelay(paymentsMock) : apiGet('/payments')
}

// GET /payments/overdue
export function getOverdueDetail() {
  return USE_MOCK ? fakeDelay(overdueDetailMock) : apiGet('/payments/overdue')
}
