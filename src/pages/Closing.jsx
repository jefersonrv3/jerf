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
    <>
      <PageTitle title="Encerramento do contrato" subtitle="Acompanhe a quitação e a finalização do contrato." />
      <AsyncState loading={loading} error={error} empty={!data}>
        {data && (
          <>
            <Card>
              <h3>Contrato integralmente quitado</h3>
              <p>Não existem parcelas ou encargos pendentes.</p>
              <Badge status={data.status} />
            </Card>
            <Card title="Status do encerramento">
              {data.etapas.map((step) => (
                <p key={step.id}>{step.concluida ? '✓' : '○'} {step.nome}</p>
              ))}
            </Card>
            <Card title="Documentos finais">
              <div className="row">
                {data.documentos.map((doc) => (
                  <button key={doc} className="btn btn-outline" onClick={() => mockAction(doc)}>{doc}</button>
                ))}
              </div>
            </Card>
          </>
        )}
      </AsyncState>
    </>
  )
}

export default Closing
