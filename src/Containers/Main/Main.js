import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
import BooksContainer from '../../Containers/BooksContainer/BooksContainer'
const API_KEY =`${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`

// import { cleanBooks } from '../../Utility/cleanBooks';



class Main extends Component {
  

  async componentDidMount(){
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
    this.props.fetchAllBooks(url)
  }



  render() {

    return (
      <div className="Main-wrapper">
        {this.props.allBooks && <BooksContainer books={this.props.allBooks}/>}
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
 allBooks: store.allBooks
})

export const mapDispatchToProps = (dispatch) => ({
fetchAllBooks: (url) => dispatch(fetchAllBooks(url))
})



export default connect(mapStateToProps, mapDispatchToProps) (Main)