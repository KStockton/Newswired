import React from 'react';
import PropTypes from 'prop-types';

const Book = ({bookImage, rank, author, description, title, weeksOnList}) => {
  return (
    <article className="book-tile">
        <img className="book-img" src={bookImage} alt="book"/>
        <p className="author">{author}</p>
        <p className="book-rank">Rank: {rank}</p>
        <p className="book-weeks">{weeksOnList} weeks on list </p>
        <p className="book-title">{title}</p>
        <p className="book-description">{description}</p>
      </article>
  )
}

Book.propTypes = {
  bookImage: PropTypes.string,
  rank: PropTypes.number,
  author: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  weeksOnList: PropTypes.number
}
export default Book