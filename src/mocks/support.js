export const supportTopicsMock = [
  { id: 1, titulo: 'Suporte geral', descricao: 'Dúvidas sobre portal, cadastro, documentos ou proposta.', botao: 'Abrir atendimento' },
  { id: 2, titulo: 'WhatsApp', descricao: 'Continuar o atendimento pelo canal de mensagens.', botao: 'Ir para WhatsApp' },
  { id: 3, titulo: 'Renegociação / Regularização', descricao: 'Consultar alternativas para parcelas em atraso.', botao: 'Ver opções' },
  { id: 4, titulo: 'Encerramento do contrato', descricao: 'Consultar quitação e status final do contrato.', botao: 'Acompanhar' },
]

export const renewalMock = [
  { id: 1, titulo: 'Renovação semestral', status: 'DISPONIVEL', descricao: 'Atualize os dados acadêmicos e envie a matrícula do novo período.', botao: 'Iniciar renovação' },
  { id: 2, titulo: 'Regularização', status: 'SEM_PENDENCIAS', descricao: 'Consulte alternativas quando houver parcelas em atraso.', botao: 'Consultar opções' },
  { id: 3, titulo: 'Encerramento', status: 'CONTRATO_ATIVO', descricao: 'Após a quitação, o status e os documentos finais ficam disponíveis.', botao: 'Ver condições' },
]

export const closingMock = {
  status: 'QUITADO',
  etapas: [
    { id: 1, nome: 'Quitação financeira', concluida: true },
    { id: 2, nome: 'Atualização contratual', concluida: true },
    { id: 3, nome: 'Contrato encerrado', concluida: true },
  ],
  documentos: ['Termo de quitação', 'Comprovante de encerramento'],
}
