import React from 'react';

const Card = ({id, source, author, bookImage, description, title, content}) =>{
  return (
    <section className="CardCard-tile" id={id}>
    <img className="Card-img" src={bookImage} alt="travel"/>
      <p className="Card-author">{author}</p>
      <p className="Card-title">{title}</p>
      <p className="Card-source">{source}</p>
      <p className="Card-description">{description}</p>
    </section>
  )
}
export default Card
