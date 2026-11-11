import { useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { getStudent } from '../services/studentService'

function Header() {
  const navigate = useNavigate()
  const { data: student } = useFetch(getStudent)
  const firstName = student ? student.nome.split(' ')[0] : ''

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/saiu')
  }

  return (
    <header className="header">
      <span>Olá, {firstName}</span>
      <button className="btn btn-outline" onClick={handleLogout}>
        Sair
      </button>
    </header>
  )
}

export default Header
