import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Badge from '../components/Badge'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getFinancing } from '../services/financingService'
import { formatCurrency, formatDate } from '../utils/format'
import { mockAction } from '../utils/mockAction'

const ACTIONS = [
  { name: 'Contrato / CCB', button: 'Visualizar' },
  { name: 'Memória de cálculo', button: 'Baixar' },
  { name: 'Comprovantes', button: 'Consultar' },
  { name: 'Histórico financeiro', button: 'Consultar' },
]

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
            <div className="grid stats">
              <Card title="Saldo devedor"><p className="big">{formatCurrency(data.saldoDevedor)}</p></Card>
              <Card title="Parcelas pagas"><p className="big">{data.parcelasPagas} de {data.totalParcelas}</p></Card>
              <Card title="Próximo vencimento"><p className="big">{formatDate(data.proximoVencimento)}</p></Card>
              <Card title="Próxima parcela"><p className="big">{formatCurrency(data.valorParcela)}</p></Card>
            </div>
            <div className="split">
              <Card title="Próximas parcelas">
                <p className="sub">Resumo financeiro do contrato.</p>
                <table className="table table-plain table-compact">
                  <tbody>
                    {data.proximasParcelas.map((p) => (
                      <tr key={p.id}>
                        <td>{formatDate(p.vencimento)}</td>
                        <td className="strong-cell">{formatCurrency(p.valor)}</td>
                        <td><Badge status={p.situacao} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
              <Card title="Documentos do contrato">
                {ACTIONS.map((item) => (
                  <div className="doc-row" key={item.name}>
                    <span>{item.name}</span>
                    <button className="link-btn" onClick={() => mockAction(item.name)}>{item.button}</button>
                  </div>
                ))}
              </Card>
            </div>
          </>
        )}
      </AsyncState>
    </>
  )
}

export default Financing
