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
    <div className="page-round">
      <PageTitle title="Documentos" subtitle="Opções exibidas conforme elegibilidade e condições disponíveis para o contrato." />
      <div className="grid">
        {OPTIONS.map((item, index) => (
          <Card key={item.title} title={item.title} className="doc-card">
            <p>{item.description}</p>
            <button className={index === 1 ? 'btn' : 'btn btn-outline'} onClick={() => mockAction(item.button)}>{item.button}</button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Documents
