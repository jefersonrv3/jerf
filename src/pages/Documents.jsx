import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import { mockAction } from '../utils/mockAction'

// Página estática por enquanto. Quando a API existir, busque os documentos em um service.
const OPTIONS = [
  { title: 'Assinar contrato', description: 'Emissão da CCB para assinar.', button: 'Emitir CCB' },
  { title: 'Cópia do contrato', description: 'Acesse os contratos já contratados.', button: 'Emitir cópia' },
  { title: 'Documentos disponíveis', description: 'Download de documentos.', button: 'Consultar' },
]

function Documents() {
  return (
    <>
      <PageTitle title="Documentos" subtitle="Opções exibidas conforme as condições do contrato." />
      <div className="grid">
        {OPTIONS.map((item) => (
          <Card key={item.title} title={item.title}>
            <p>{item.description}</p>
            <button className="btn" onClick={() => mockAction(item.button)}>{item.button}</button>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Documents
