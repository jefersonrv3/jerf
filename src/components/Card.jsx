function Card({ title, className = '', children }) {
  return (
    <section className={`card ${className}`.trim()}>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  )
}

export default Card
