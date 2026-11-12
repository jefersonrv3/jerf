import { Navigate, Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Header from './Header'

// Layout das páginas internas. Sem token, volta para o login.
function Layout() {
  if (!localStorage.getItem('token')) return <Navigate to="/login" replace />

  return (
    <>
      <Topbar />
      <div className="app-body">
        <Sidebar />
        <div className="layout-content">
          <Header />
          <main className="main">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
