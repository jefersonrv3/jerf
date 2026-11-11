import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import Badge from '../components/Badge'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getRenewalOptions } from '../services/supportService'
import { mockAction } from '../utils/mockAction'

function Renewal() {
  const { data, loading, error } = useFetch(getRenewalOptions)

  return (
    <>
      <PageTitle title="Renovação e regularização" subtitle="Ações do ciclo do contrato em um único lugar." />
      <AsyncState loading={loading} error={error} empty={!data?.length}>
        <div className="grid">
          {(data || []).map((item, index) => (
            <Card key={item.id} title={`${index + 1}. ${item.titulo}`}>
              <Badge status={item.status} />
              <p></p>
              <p>{item.descricao}</p>
              <button className="btn" onClick={() => mockAction(item.botao)}>{item.botao}</button>
            </Card>
          ))}
        </div>
      </AsyncState>
    </>
  )
}

export default Renewal
