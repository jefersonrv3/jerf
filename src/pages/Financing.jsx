import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Badge from '../components/Badge'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getFinancing } from '../services/financingService'
import { formatCurrency, formatDate } from '../utils/format'
import { mockAction } from '../utils/mockAction'

const ACTIONS = ['Contrato / CCB', 'Memória de cálculo', 'Comprovantes', 'Histórico financeiro']

function Financing() {
  const { data, loading, error } = useFetch(getFinancing)

  return (
    <>
      {data && (
        <PageTitle
          title="Meu financiamento"
          subtitle={`Contrato ativo nº ${data.contrato} • Atualizado em ${formatDate(data.atualizadoEm)}`}
        />
      )}
      <AsyncState loading={loading} error={error} empty={!data}>
        {data && (
          <>
            <div className="grid">
              <Card title="Saldo devedor"><p className="big">{formatCurrency(data.saldoDevedor)}</p></Card>
              <Card title="Parcelas pagas"><p className="big">{data.parcelasPagas} de {data.totalParcelas}</p></Card>
              <Card title="Próximo vencimento"><p className="big">{formatDate(data.proximoVencimento)}</p></Card>
              <Card title="Próxima parcela"><p className="big">{formatCurrency(data.valorParcela)}</p></Card>
            </div>
            <p></p>
            <Card title="Próximas parcelas">
              <table className="table">
                <tbody>
                  {data.proximasParcelas.map((p) => (
                    <tr key={p.id}>
                      <td>{formatDate(p.vencimento)}</td>
                      <td>{formatCurrency(p.valor)}</td>
                      <td><Badge status={p.situacao} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <Card title="Documentos do contrato">
              <div className="row">
                {ACTIONS.map((name) => (
                  <button key={name} className="btn btn-outline" onClick={() => mockAction(name)}>{name}</button>
                ))}
              </div>
            </Card>
          </>
        )}
      </AsyncState>
    </>
  )
}

export default Financing
