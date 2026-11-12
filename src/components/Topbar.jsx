import logo from '../assets/buni-logo.png'

// Barra superior azul com o logo b.Uni. Aparece em todas as telas.
function Topbar() {
  return (
    <div className="topbar">
      <img src={logo} alt="b.Uni" />
      <span>Crédito Estudantil | Área Cliente</span>
    </div>
  )
}

export default Topbar
