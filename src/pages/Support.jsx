import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getSupportTopics } from '../services/supportService'
import { mockAction } from '../utils/mockAction'

function Support() {
  const { data, loading, error } = useFetch(getSupportTopics)

  return (
    <div className="page-round">
      <PageTitle title="Atendimento e suporte" subtitle="Escolha o assunto para iniciar um atendimento já vinculado ao contrato." />
      <AsyncState loading={loading} error={error} empty={!data?.length}>
        <div className="grid support-grid">
          {(data || []).map((topic, index) => (
            <Card key={topic.id} className="support-card">
              <span className={index < 2 ? 'step-square' : 'step-square dark'}>{index + 1}</span>
              <div>
                <h3>{topic.titulo}</h3>
                <p>{topic.descricao}</p>
                <button className="btn btn-outline" onClick={() => mockAction(topic.botao)}>{topic.botao}</button>
              </div>
            </Card>
          ))}
        </div>
      </AsyncState>
    </div>
  )
}

export default Support
