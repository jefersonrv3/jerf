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
      <PageTitle title="Renovação e regularização" subtitle="Ações do ciclo do contrato reunidas em um único lugar." />
      <AsyncState loading={loading} error={error} empty={!data?.length}>
        <div className="grid">
          {(data || []).map((item, index) => (
            <Card key={item.id} className="step-card">
              <span className="step-num">{index + 1}</span>
              <h3>{item.titulo}</h3>
              <Badge status={item.status} />
              <p>{item.descricao}</p>
              <button className={index === 0 ? 'btn' : 'btn btn-outline'} onClick={() => mockAction(item.botao)}>{item.botao}</button>
            </Card>
          ))}
        </div>
      </AsyncState>
    </>
  )
}

export default Renewal
