import React from 'react';
import {Link} from 'react-router-dom'

const Card = ({id, author, source, articleImage, description, title, content}) =>{
  return (
    <section className="CardCard-tile" id={id}>
      <Link to={`/card/${id}`}>
        <img className="Card-img" src={articleImage} alt="travel"/>
      </Link>
        <p className="Card-author">{author}</p>
        <p className="Card-title">{title}</p>
        <p className="Card-description">{description}</p>
    </section>
  )
}
export default Card
