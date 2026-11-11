import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Badge from '../components/Badge'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getPayments, getOverdueDetail } from '../services/paymentService'
import { formatCurrency, formatDate } from '../utils/format'
import { mockAction } from '../utils/mockAction'

function Payments() {
  const payments = useFetch(getPayments)
  const overdue = useFetch(getOverdueDetail)

  const hasOverdue = payments.data?.some((p) => p.situacao === 'VENCIDA')

  async function copyBarcode() {
    await navigator.clipboard.writeText(overdue.data.codigoBarras)
    mockAction('Código de barras copiado')
  }

  return (
    <>
      <PageTitle title="Pagamentos" subtitle="Acompanhe parcelas pagas, vencidas e documentos relacionados." />
      <AsyncState loading={payments.loading} error={payments.error} empty={!payments.data?.length}>
        {hasOverdue && overdue.data && (
          <>
            <div className="alert">
              Existe uma parcela vencida em {formatDate(overdue.data.vencimento)}.
            </div>
            <Card title="Detalhamento da parcela vencida">
              <p>Valor original: {formatCurrency(overdue.data.valorOriginal)}</p>
              <p>Juros e encargos: {formatCurrency(overdue.data.encargos)}</p>
              <p><strong>Valor atualizado: {formatCurrency(overdue.data.valorAtualizado)}</strong></p>
              <div className="row">
                <button className="btn" onClick={() => mockAction('Emitir boleto atualizado')}>Emitir boleto atualizado</button>
                <button className="btn btn-outline" onClick={copyBarcode}>Copiar código de barras</button>
              </div>
            </Card>
          </>
        )}

        <table className="table">
          <thead>
            <tr>
              <th>Parcela</th><th>Vencimento</th><th>Valor</th><th>Pagamento</th><th>Situação</th><th>Documento</th>
            </tr>
          </thead>
          <tbody>
            {(payments.data || []).map((p) => (
              <tr key={p.parcela}>
                <td>{p.parcela}</td>
                <td>{formatDate(p.vencimento)}</td>
                <td>{formatCurrency(p.valor)}</td>
                <td>{formatDate(p.pagamento)}</td>
                <td><Badge status={p.situacao} /></td>
                <td>{p.documento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AsyncState>
    </>
  )
}

export default Payments
