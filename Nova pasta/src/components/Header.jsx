import { useFetch } from '../hooks/useFetch'
import { getStudent } from '../services/studentService'

// Saudação no topo do conteúdo. O botão "Sair" agora fica no final do menu lateral.
function Header() {
  const { data: student } = useFetch(getStudent)
  const firstName = student ? student.nome.split(' ')[0] : ''

  return (
    <header className="header">
      <span>Olá, {firstName}</span>
      <div className="avatar" aria-hidden="true">{firstName.charAt(0)}</div>
    </header>
  )
}

export default Header
