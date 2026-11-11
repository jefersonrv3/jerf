import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import AsyncState from '../components/AsyncState'
import { useFetch } from '../hooks/useFetch'
import { getSupportTopics } from '../services/supportService'
import { mockAction } from '../utils/mockAction'

function Support() {
  const { data, loading, error } = useFetch(getSupportTopics)

  return (
    <>
      <PageTitle title="Atendimento e suporte" subtitle="Escolha o assunto para iniciar um atendimento." />
      <AsyncState loading={loading} error={error} empty={!data?.length}>
        <div className="grid">
          {(data || []).map((topic, index) => (
            <Card key={topic.id} title={`${index + 1}. ${topic.titulo}`}>
              <p>{topic.descricao}</p>
              <button className="btn" onClick={() => mockAction(topic.botao)}>{topic.botao}</button>
            </Card>
          ))}
        </div>
      </AsyncState>
    </>
  )
}

export default Support
