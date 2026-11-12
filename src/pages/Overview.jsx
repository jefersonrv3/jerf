import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Timeline from '../components/Timeline'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getProposals } from '../services/proposalService'
import { getFinancing } from '../services/financingService'
import { formatCurrency, formatDate } from '../utils/format'

function Overview() {
  const proposals = useFetch(getProposals)
  const financing = useFetch(getFinancing)

  const loading = proposals.loading || financing.loading
  const error = proposals.error || financing.error
  const current = proposals.data?.[0]
  const pendingDocs = current?.documentos.filter((doc) => doc.status === 'PENDENTE').length

  return (
    <>
      <PageTitle title="Visão geral" subtitle="Acompanhe sua jornada e veja o que precisa de atenção." />
      <AsyncState loading={loading} error={error} empty={!current}>
        {current && financing.data && (
          <>
            <div className="overview-top">
              <div className="overview-left">
                <section className="hero">
                  <div>
                    <h3>Sua proposta está {current.situacao === 'EM_ANALISE' ? 'em análise' : 'em andamento'}</h3>
                    {pendingDocs > 0 && <p>Você tem {pendingDocs} documento(s) pendente(s) para enviar.</p>}
                  </div>
                  <Link className="btn btn-light" to={`/propostas/${current.id}`}>Ver proposta</Link>
                </section>

                <div className="grid stats">
                  <Card title="Proposta">
                    <p className="big">{current.id}</p>
                    <Badge status={current.situacao} />
                  </Card>
                  <Card title="Pendências">
                    <p className="big">{pendingDocs}</p>
                    <span className="label">documento(s)</span>
                  </Card>
                  <Card title="Próxima parcela">
                    <p className="big">{formatCurrency(financing.data.valorParcela)}</p>
                    <span className="label">vence em {formatDate(financing.data.proximoVencimento)}</span>
                  </Card>
                </div>
              </div>

              <Card title="Atalhos" className="shortcuts">
                <div className="links">
                  <Link to="/pagamentos">2ª via de boleto</Link>
                  <Link to="/financiamento">Consultar contrato</Link>
                  <Link to="/atendimento">Falar com atendimento</Link>
                </div>
              </Card>
            </div>

            <Card className="card-timeline">
              <h3>Linha do tempo</h3>
              <Timeline currentStep={current.etapaAtual} />
            </Card>
          </>
        )}
      </AsyncState>
    </>
  )
}

export default Overview
