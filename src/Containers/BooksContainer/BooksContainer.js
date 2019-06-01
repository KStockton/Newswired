import React from 'react';
const shortid = require('shortid')

const BooksContainer = ({books}) => {
    console.log(books)
  const bookGrid = books.map(book => {
    const { bookImage, rank, author, description, title, weeksOnList} = book
    return (
      <article key={shortid.generate()} className="book-tile">
        <p>Rank: {rank}</p>
        <img className="book-img" src={bookImage} alt="book"/>
        <p className="author">{author}</p>
        
      </article>
    )
  })

  return (
    <div className='book-wrapper'>
      {bookGrid}
    </div>
  )
}

export default BooksContainer
