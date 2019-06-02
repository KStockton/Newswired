import React from 'react';

const Book = ({bookImage, rank, author, description, title, weeksOnList}) => {
  return (
    <article className="book-tile">
        <p>{rank}</p>
        <img className="book-img" src={bookImage} alt="book"/>
        <p className="author">{author}</p>
        <p className="book-weeks">{weeksOnList} weeks on list </p>
        <p className="book-title">{title}</p>
        <p className="book-description">{description}</p>
      </article>
  )
}
export default Book