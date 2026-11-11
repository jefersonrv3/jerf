import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

// Layout das páginas internas. Sem token, volta para o login.
function Layout() {
  if (!localStorage.getItem('token')) return <Navigate to="/login" replace />

  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
