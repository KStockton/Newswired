import React from 'react';

const Book = ({bookImage, rank, author, description, title, weeksOnList}) => {
  return (
    <article className="book-tile">
        <p>Rank: {rank}</p>
        <img className="book-img" src={bookImage} alt="book"/>
        <p className="author">{author}</p>
      </article>
  )
}
export default Book