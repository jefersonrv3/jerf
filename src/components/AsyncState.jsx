// Mostra carregando, erro ou vazio. Se estiver tudo ok, mostra os filhos.
function AsyncState({ loading, error, empty, children }) {
  if (loading) return <p className="state">Carregando...</p>
  if (error) return <p className="state state-error">Erro: {error}</p>
  if (empty) return <p className="state">Nada para mostrar.</p>
  return children
}

export default AsyncState
