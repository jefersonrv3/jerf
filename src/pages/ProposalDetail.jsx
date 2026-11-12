import { Link, useParams } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Timeline from '../components/Timeline'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getProposalById } from '../services/proposalService'
import { formatCurrency, formatDate } from '../utils/format'
import { mockAction } from '../utils/mockAction'

function ProposalDetail() {
  const { id } = useParams()
  const { data: proposal, loading, error } = useFetch(getProposalById, id)

  return (
    <>
      <Link className="back-link" to="/propostas">‹ Voltar</Link>
      <AsyncState loading={loading} error={error} empty={!proposal}>
        {proposal && (
          <>
            <div className="title-row">
              <PageTitle title={`Proposta ${proposal.id}`} subtitle={`${proposal.produto} • ${proposal.instituicao}`} />
              <Badge status={proposal.situacao} />
            </div>
            <Card className="card-timeline">
              <Timeline currentStep={proposal.etapaAtual} />
            </Card>

            <div className="split">
              <Card title="Documentos e pendências">
                <p className="sub">Acompanhe cada item individualmente.</p>
                <table className="table table-plain table-compact">
                  <tbody>
                    {proposal.documentos.map((doc) => (
                      <tr key={doc.id}>
                        <td>{doc.nome}</td>
                        <td><Badge status={doc.status} /></td>
                        <td>
                          {doc.status === 'PENDENTE' ? (
                            <button className="btn" onClick={() => mockAction(`Enviar arquivo: ${doc.nome}`)}>Enviar arquivo</button>
                          ) : (
                            <button className="btn btn-outline" onClick={() => mockAction(`Visualizar: ${doc.nome}`)}>Visualizar</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>

              <Card title="Resumo">
                <p className="kv"><span>Valor solicitado</span><strong>{formatCurrency(proposal.valor)}</strong></p>
                <p className="kv"><span>Prazo</span><strong>{proposal.prazo} meses</strong></p>
                <p className="kv"><span>Curso</span><strong>{proposal.curso}</strong></p>
                <p className="kv"><span>Última atualização</span><strong>{formatDate(proposal.atualizacao)}</strong></p>
              </Card>
            </div>
          </>
        )}
      </AsyncState>
    </>
  )
}

export default ProposalDetail
