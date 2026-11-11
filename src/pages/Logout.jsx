import { Link } from 'react-router-dom'

function Logout() {
  return (
    <div className="center-page">
      <div className="card">
        <h1>Você saiu com sucesso!</h1>
        <Link to="/login">Entrar novamente</Link>
      </div>
    </div>
  )
}

export default Logout
