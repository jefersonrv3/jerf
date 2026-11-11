export const financingMock = {
  contrato: 'C-5001',
  atualizadoEm: '2025-03-10',
  saldoDevedor: 1500,
  parcelasPagas: 9,
  totalParcelas: 12,
  proximoVencimento: '2025-04-10',
  valorParcela: 500,
  proximasParcelas: [
    { id: 1, vencimento: '2025-04-10', valor: 500, situacao: 'EM_ABERTO' },
    { id: 2, vencimento: '2025-05-10', valor: 500, situacao: 'A_VENCER' },
    { id: 3, vencimento: '2025-06-10', valor: 500, situacao: 'A_VENCER' },
  ],
}
