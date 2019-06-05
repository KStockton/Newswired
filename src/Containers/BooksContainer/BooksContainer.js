import React, { Component } from 'react';
import Book from '../../Components/Book/Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
import {Link} from 'react-router-dom'
import {NYT_KEY} from '../../Utility/Config/Key';
const shortid = require('shortid');

 export class BooksContainer extends Component {
   
  
async componentDidMount() {
  if(this.props.allBooks.length === 0){
     const historyUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?&api-key=${NYT_KEY}`
     this.props.fetchAllBooks(historyUrl)
  }
}



  displayBooks = () => {
  if(this.props.allBooks.length > 0){
    return this.props.allBooks.map(book => {
      return (<Book {...book} key={shortid.generate() } />
      )
    })
  }
  }

  render() {
    const {error, allBooks}= this.props
    const errorMsg = 
                    <div>
                      <h2>{error}</h2>
                      <Link to="/Options">Back</Link>
                    </div>
    const displayBooks = this.displayBooks()    
    return (
      <section>
        <h2 className="book-title-header"> New York Times Best Sellers</h2>
      <div className='book-wrapper'>
      {(error !== '' && allBooks.length === 0) && errorMsg}
        {displayBooks}
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
