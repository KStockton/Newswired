import React, { Component } from 'react';
import Book from '../../Components/Book/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
import {NYT_KEY} from '../../Utility/Config/Key'
const shortid = require('shortid');
 class BooksContainer extends Component {
  
async componentDidMount() {
  if(this.props.allBooks.length === 0){
    const bookUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYT_KEY}`
     this.props.fetchAllBooks(bookUrl)
  }
}



  displayBooks = () => {
    return this.props.allBooks.map(book => {
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

BooksContainer.propTypes = {
  allBooks: PropTypes.array
}

export const mapStateToProps = (store) => ({
  allBooks: store.allBooks
});

export const mapDispatchToProps = (dispatch) => ({
  fetchAllBooks: (url) => dispatch(fetchAllBooks(url))
})


export default connect(mapStateToProps, mapDispatchToProps) (BooksContainer)
