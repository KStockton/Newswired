import React, { Component } from 'react';
import Book from '../../Components/Book/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
import {NYT_KEY} from '../../Utility/Config/Key';
import Error from '../../Components/Error/Error'
const shortid = require('shortid');

 export class BooksContainer extends Component {
   
  
async componentDidMount() {
  if(this.props.allBooks.length == 0){
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
        <h2 className="book-title-header"> New York Times Best Sellers</h2>
      <div className='book-wrapper'>
        {displayBooks}
        <p className="error-text">{this.props.error && errorMsg }</p>
      </div>
      </section>
    )
  }
}

BooksContainer.propTypes = {
  allBooks: PropTypes.array,
  error: PropTypes.string,
  fetchAllBooks: PropTypes.func
}

export const mapStateToProps = (state) => ({
  allBooks: state.allBooks,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  fetchAllBooks: (url) => dispatch(fetchAllBooks(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)
