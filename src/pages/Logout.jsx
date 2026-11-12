import { Link } from 'react-router-dom'
import Topbar from '../components/Topbar'

function Logout() {
  return (
    <div className="page-round">
      <Topbar />
      <div className="center-page">
        <div className="card logout-card">
          <h1>Você saiu com sucesso!</h1>
          <Link to="/login">Entrar novamente</Link>
        </div>
      </div>
    </div>
  )
}

export default Logout
