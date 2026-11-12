import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Badge from '../components/Badge'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getClosing } from '../services/financingService'
import { mockAction } from '../utils/mockAction'

function Closing() {
  const { data, loading, error } = useFetch(getClosing)

  return (
    <div className="page-round">
      <PageTitle title="Encerramento do contrato" subtitle="Acompanhe a quitação integral e a finalização do vínculo contratual." />
      <AsyncState loading={loading} error={error} empty={!data}>
        {data && (
          <>
            <Card className="banner banner-success">
              <div>
                <h3>Contrato integralmente quitado</h3>
                <p>Não existem parcelas ou encargos pendentes.</p>
              </div>
              <Badge status={data.status} />
            </Card>
            <div className="split">
              <Card title="Status do encerramento">
                {data.etapas.map((step) => (
                  <div className="step-row" key={step.id}>
                    <span className="check">{step.concluida ? '✓' : '○'}</span>
                    <span className="name">{step.nome}</span>
                    <span className="status">{step.concluida ? 'Concluída' : 'Pendente'}</span>
                  </div>
                ))}
              </Card>
              <Card title="Documentos finais">
                <div className="stack">
                  {data.documentos.map((doc) => (
                    <button key={doc} className="btn btn-outline" onClick={() => mockAction(doc)}>{doc}</button>
                  ))}
                </div>
              </Card>
            </div>
          </>
        )}
      </AsyncState>
    </div>
  )
}

export default Closing
