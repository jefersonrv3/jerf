import { NavLink } from 'react-router-dom'

const MENU = [
  { to: '/', label: 'Visão geral' },
  { to: '/dados', label: 'Meus dados' },
  { to: '/propostas', label: 'Minhas propostas' },
  { to: '/financiamento', label: 'Meu financiamento' },
  { to: '/pagamentos', label: 'Pagamentos' },
  { to: '/renovacao', label: 'Renovação' },
  { to: '/documentos', label: 'Documentos' },
  { to: '/atendimento', label: 'Atendimento' },
  { to: '/encerramento', label: 'Encerramento' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Área do Aluno</h2>
      <nav>
        {MENU.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
