import './Card.css'

function Card({ title }) {
  return (
    <article className="card-wrapper">
      <h3 className="card-title">{title}</h3>
    </article>
  )
}

export default Card
