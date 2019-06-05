import React from 'react';
import {Link} from 'react-router-dom'


const Item = ({bookImage, rank, author, id, description, title, weeksOnList}) => {

  return (
      <article className="Item-wrapper" id={id}>
          <Link to={`/card/${id}`}>
            <img className="Item-img" src={bookImage} alt="book"/>
              </Link>
            <p className="Item-author">{author}</p>
            <p className="Item-rank">Rank: {rank}</p>
            <p className="Item-weeks">{weeksOnList} weeks on list</p>
            <p className="Item-title">{title}</p>
            <p className="Item-description">{description}</p>
          </article >
  )
} 
export default Item