const STEPS = ['Solicitada', 'Documentos', 'Análise', 'Contrato', 'Concluída']

// currentStep: índice (0 a 4) da etapa atual
function Timeline({ currentStep }) {
  return (
    <ol className="timeline">
      {STEPS.map((step, index) => (
        <li key={step} className={index <= currentStep ? 'done' : ''}>
          {step}
        </li>
      ))}
    </ol>
  )
}

export default Timeline
