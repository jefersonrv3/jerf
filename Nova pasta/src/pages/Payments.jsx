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
    <div className="page-round">
      <PageTitle title="Pagamentos" subtitle="Acompanhe parcelas pagas, vencidas e documentos relacionados." />
      <AsyncState loading={payments.loading} error={payments.error} empty={!payments.data?.length}>
        {hasOverdue && overdue.data && (
          <>
            <div className="alert">
              Existe uma parcela vencida em {formatDate(overdue.data.vencimento)}.
            </div>
            <div className="split">
              <Card title="Detalhamento da parcela vencida">
                <p className="kv"><span>Valor original</span><strong>{formatCurrency(overdue.data.valorOriginal)}</strong></p>
                <p className="kv"><span>Juros e encargos</span><strong>{formatCurrency(overdue.data.encargos)}</strong></p>
                <p className="kv kv-total"><span>Valor atualizado</span><strong>{formatCurrency(overdue.data.valorAtualizado)}</strong></p>
              </Card>
              <Card title="Como deseja pagar?">
                <div className="stack">
                  <button className="btn" onClick={() => mockAction('Emitir boleto atualizado')}>Emitir boleto atualizado</button>
                  <button className="btn btn-outline" onClick={copyBarcode}>Copiar código de barras</button>
                </div>
              </Card>
            </div>
          </>
        )}

        <div className="card card-table">
          <table className="table table-plain">
            <thead>
              <tr>
                <th>Parcela</th><th>Vencimento</th><th>Valor</th><th>Pagamento</th><th>Situação</th><th>Documento</th>
              </tr>
            </thead>
            <tbody>
              {(payments.data || []).map((p) => (
                <tr key={p.parcela}>
                  <td>{p.parcela}</td>
                  <td className="strong-cell">{formatDate(p.vencimento)}</td>
                  <td>{formatCurrency(p.valor)}</td>
                  <td>{formatDate(p.pagamento)}</td>
                  <td><Badge status={p.situacao} /></td>
                  <td className="doc-cell">{p.documento}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AsyncState>
    </div>
  )
}

export default Payments
