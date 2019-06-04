import React, { Component } from 'react';
import Book from '../../Components/Book/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
import {NYT_KEY} from '../../Utility/Config/Key';
import Error from '../../Components/Error/Error'
const shortid = require('shortid');

 class BooksContainer extends Component {
  
async componentDidMount() {
  console.log(this.props.allBooks.length)
  if(this.props.allBooks.length == 0){
    const bookUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?&api-key=${NYT_KEY}`
     this.props.fetchAllBooks(bookUrl)
     const historyUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?&api-key=${NYT_KEY}`
     this.props.fetchAllBooks(historyUrl)
  }
}



  displayBooks = () => {
  if(this.props.allBooks.length > 0){
    return this.props.allBooks.map(book => {
      return (<Book {...book} key={shortid.generate()} />
      )
    })
  }
  }

  render() {
    const errorMsg = <h2>{this.props.error}</h2>
    const displayBooks = this.displayBooks()    
    return (
      <section>
        <h2>Top NewYork Times Books</h2>
      <div className='BookContainer-wrapper'>
        {displayBooks}
        <p className="error-text">{this.props.error && errorMsg }</p>
      </div>
      </section>
    )
  }
}

BooksContainer.propTypes = {
  allBooks: PropTypes.array
}

export const mapStateToProps = (state) => ({
  allBooks: state.allBooks,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  fetchAllBooks: (url) => dispatch(fetchAllBooks(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
