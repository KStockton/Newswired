import React from 'react';

const Travel = ({id, source, author, bookImage, description, title, content}) =>{
  return (
    <section className="TravelCard-tile" id={id}>
    <img className="Travel-img" src={bookImage} alt="travel"/>
      <p className="Travel-title">{title}</p>
      <p className="Travel-source">{source}</p>
      <p className="Travel-author">{author}</p>
      <p className="Travel-description">{description}</p>
    </section>
  )
}
export default Travel
