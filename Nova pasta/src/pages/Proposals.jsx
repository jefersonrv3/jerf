import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import Badge from '../components/Badge'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getProposals } from '../services/proposalService'
import { formatDate } from '../utils/format'

function Proposals() {
  const { data, loading, error } = useFetch(getProposals)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')

  const filtered = (data || []).filter(
    (item) => item.id.includes(search) && (status === '' || item.situacao === status),
  )

  return (
    <>
      <PageTitle title="Minhas propostas" subtitle="Consulte o andamento e acesse as ações de cada solicitação." />
      <div className="filters">
        <input placeholder="Buscar por número" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Todas as situações</option>
          <option value="EM_ANALISE">Em análise</option>
          <option value="DOCUMENTO_PENDENTE">Documento pendente</option>
          <option value="CONTRATADA">Contratada</option>
          <option value="ENCERRADA">Encerrada</option>
        </select>
      </div>
      <AsyncState loading={loading} error={error} empty={filtered.length === 0}>
        <div className="card card-table">
          <table className="table">
            <thead>
              <tr>
                <th>Proposta</th>
                <th>Produto / Instituição</th>
                <th>Atualização</th>
                <th>Situação</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.produto} • {item.instituicao}</td>
                  <td className="muted-cell">{formatDate(item.atualizacao)}</td>
                  <td><Badge status={item.situacao} /></td>
                  <td><Link to={`/propostas/${item.id}`}>Ver detalhes ›</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AsyncState>
    </>
  )
}

export default Proposals
