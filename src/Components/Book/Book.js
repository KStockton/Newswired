import React from 'react';
import PropTypes from 'prop-types';
import love from '../../Assets/love.svg'
import nolove from '../../Assets/nolove.svg'


const Book = ({bookImage, rank, author, id, description, title, weeksOnList, isfavorited}) => {

  return (
    <article className="book-tile" id={id}>
        <img className={isfavorited ? 'book-favorite' : 'book-nofavorite'}
          src={isfavorited ? love : nolove} 
          alt="emoji favorite icon"
        />
        <img className="book-img" src={bookImage} alt="book"/>
        <p className="author">{author}</p>
        <p className="book-rank">Rank: {rank}</p>
        <p className="book-weeks">{weeksOnList} weeks on list</p>
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