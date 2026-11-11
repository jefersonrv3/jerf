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
      <Link to="/propostas">‹ Voltar</Link>
      <AsyncState loading={loading} error={error} empty={!proposal}>
        {proposal && (
          <>
            <PageTitle title={`Proposta ${proposal.id}`} subtitle={`${proposal.produto} • ${proposal.instituicao}`} />
            <Badge status={proposal.situacao} />
            <p></p>
            <Card title="Etapas">
              <Timeline currentStep={proposal.etapaAtual} />
            </Card>

            <Card title="Documentos e pendências">
              <table className="table">
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
              <p>Valor solicitado: {formatCurrency(proposal.valor)}</p>
              <p>Prazo: {proposal.prazo} meses</p>
              <p>Curso: {proposal.curso}</p>
              <p>Última atualização: {formatDate(proposal.atualizacao)}</p>
            </Card>
          </>
        )}
      </AsyncState>
    </>
  )
}

export default ProposalDetail
