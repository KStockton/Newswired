import React from 'react';
import {Link} from 'react-router-dom'


const Item = ({bookImage, rank, author, id, description, title, weeksOnList}) => {

  return (
    <div>
      <Link to={`/card/${id}`} className="Item-back">
        Back
      </Link>
      <article className="Item-wrapper" id={id}>
        <section className="Item-content-wrapper">
          <img className="Item-img" src={bookImage} alt="book"/>
          <p className="Item-author">{author}</p>
          <p className="Item-rank">Rank: {rank}</p>
          <p className="Item-weeks">{weeksOnList} weeks on list</p>
          <p className="Item-title">{title}</p>
          <p className="Item-description">{description}</p>
        </section>
      </article >
    </div>
  )
} 
export default Item