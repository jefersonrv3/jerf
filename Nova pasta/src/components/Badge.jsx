const LABELS = {
  EM_ANALISE: 'Em análise',
  DOCUMENTO_PENDENTE: 'Documento pendente',
  CONTRATADA: 'Contratada',
  ENCERRADA: 'Encerrada',
  APROVADO: 'Aprovado',
  PENDENTE: 'Pendente',
  EM_VALIDACAO: 'Em validação',
  EM_ABERTO: 'Em aberto',
  A_VENCER: 'A vencer',
  VENCIDA: 'Vencida',
  PAGA: 'Paga',
  DISPONIVEL: 'Disponível',
  SEM_PENDENCIAS: 'Sem pendências',
  CONTRATO_ATIVO: 'Contrato ativo',
  QUITADO: 'Quitado',
}

const COLORS = {
  APROVADO: 'green', PAGA: 'green', CONTRATADA: 'green', QUITADO: 'green', DISPONIVEL: 'blue',
  PENDENTE: 'red', VENCIDA: 'red', DOCUMENTO_PENDENTE: 'red',
  EM_ANALISE: 'yellow', EM_VALIDACAO: 'yellow', EM_ABERTO: 'yellow',
}

function Badge({ status }) {
  const color = COLORS[status] || 'gray'
  return <span className={`badge badge-${color}`}>{LABELS[status] || status}</span>
}

export default Badge
