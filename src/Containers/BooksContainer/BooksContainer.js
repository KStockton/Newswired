import React, { Component } from 'react';
import Book from '../../Components/Book/Book'
const shortid = require('shortid')

export default class BooksContainer extends Component {

  displayBooks = () => {
    return this.props.books.map(book => {
      return (<Book {...book} key={shortid.generate()} />
    )
  })
  }

  render() {
    const displayBooks = this.displayBooks()
    
    return (
      <div className='book-wrapper'>
        <h2>Top NewYork Times Books</h2>
        {displayBooks}
      </div>
    )
  }
}

