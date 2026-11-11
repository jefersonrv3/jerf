export const paymentsMock = [
  { parcela: '9/12', vencimento: '2025-04-10', valor: 500, pagamento: null, situacao: 'EM_ABERTO', documento: 'À debitar' },
  { parcela: '8/12', vencimento: '2025-03-10', valor: 500, pagamento: null, situacao: 'VENCIDA', documento: 'Atualizar boleto' },
  { parcela: '7/12', vencimento: '2025-02-10', valor: 500, pagamento: '2025-02-10', situacao: 'PAGA', documento: 'Comprovante' },
  { parcela: '6/12', vencimento: '2025-01-10', valor: 500, pagamento: '2025-01-10', situacao: 'PAGA', documento: 'Comprovante' },
]

export const overdueDetailMock = {
  vencimento: '2025-03-10',
  valorOriginal: 500,
  encargos: 12.5,
  valorAtualizado: 512.5,
  codigoBarras: '00000.00000 00000.000000 00000.000000 0 00000000000000',
}
