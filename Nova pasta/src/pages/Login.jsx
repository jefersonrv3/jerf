import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topbar from '../components/Topbar'
import { login } from '../services/authService'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('test@email.com')
  const [senha, setSenha] = useState('12345678')

  async function handleSubmit(event) {
    event.preventDefault()
    const result = await login(email, senha)
    localStorage.setItem('token', result.token)
    navigate('/')
  }

  return (
    <>
      <Topbar />
      <div className="center-page">
        <form className="card" onSubmit={handleSubmit}>
          <h1>Portal do Aluno</h1>
          <label className="field">
            E-mail
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="field">
            Senha
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>
          <p></p>
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </>
  )
}

export default Login
