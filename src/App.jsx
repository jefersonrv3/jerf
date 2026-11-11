import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Overview from './pages/Overview'
import MyData from './pages/MyData'
import Proposals from './pages/Proposals'
import ProposalDetail from './pages/ProposalDetail'
import Financing from './pages/Financing'
import Payments from './pages/Payments'
import Renewal from './pages/Renewal'
import Documents from './pages/Documents'
import Support from './pages/Support'
import Closing from './pages/Closing'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/saiu" element={<Logout />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/dados" element={<MyData />} />
        <Route path="/propostas" element={<Proposals />} />
        <Route path="/propostas/:id" element={<ProposalDetail />} />
        <Route path="/financiamento" element={<Financing />} />
        <Route path="/pagamentos" element={<Payments />} />
        <Route path="/renovacao" element={<Renewal />} />
        <Route path="/documentos" element={<Documents />} />
        <Route path="/atendimento" element={<Support />} />
        <Route path="/encerramento" element={<Closing />} />
      </Route>
    </Routes>
  )
}

export default App
