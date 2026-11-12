import { NavLink, useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  // Mesma lógica de saída que existia no Header.
  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/saiu')
  }

  return (
    <aside className="sidebar">
      <p className="sidebar-label">Área do aluno</p>
      <nav>
        {MENU.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'}>
            <span className="dot" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <button className="sidebar-logout" onClick={handleLogout}>
        Sair
      </button>
    </aside>
  )
}

export default Sidebar
