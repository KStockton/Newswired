import React from 'react';

const Travel = ({id, source, author, bookImage, description, title, content}) =>{
  return (
    <div id={id}>
      <p>{title}</p>
      <img src={bookImage} alt="travel" className="Travel-img"/>
      <p>{source}</p>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  )
}
export default Travel