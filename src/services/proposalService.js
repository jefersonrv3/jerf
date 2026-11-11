import { USE_MOCK, fakeDelay, apiGet } from './api'
import { proposalsMock } from '../mocks/proposals'

// GET /proposals
export function getProposals() {
  return USE_MOCK ? fakeDelay(proposalsMock) : apiGet('/proposals')
}

// GET /proposals/:id
export async function getProposalById(id) {
  if (!USE_MOCK) return apiGet(`/proposals/${id}`)
  const proposal = proposalsMock.find((item) => item.id === id)
  if (!proposal) throw new Error('Proposta não encontrada')
  return fakeDelay(proposal)
}
