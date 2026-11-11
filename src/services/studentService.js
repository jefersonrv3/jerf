import { USE_MOCK, fakeDelay, apiGet, apiPut } from './api'
import { studentMock } from '../mocks/student'

// GET /student
export function getStudent() {
  return USE_MOCK ? fakeDelay(studentMock) : apiGet('/student')
}

// PUT /student
export function updateStudent(data) {
  return USE_MOCK ? fakeDelay({ ...studentMock, ...data }) : apiPut('/student', data)
}
