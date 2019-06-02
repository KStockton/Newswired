import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
import BooksContainer from '../../Containers/BooksContainer/BooksContainer'
import Loading from '../../Components/Loading/Loading';
import Nav from '../Nav/Nav';
const API_KEY =`${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`

// import { cleanBooks } from '../../Utility/cleanBooks';



class Main extends Component {
  

  async componentDidMount() {
    if(this.props.allBooks.length){
//prevents a second fetch when going back and forth
    }
      else {
        const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
        this.props.fetchAllBooks(url)
      }
  }



  render() {

    return (
      <div className="">
        <div className="Main-header">
          <h1 className="Main-title">News Wire</h1>
          <Nav/>
        </div>
        {
          (!this.props.isLoading) ? <BooksContainer books={this.props.allBooks}/> :
            <Loading/>
        }
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
 allBooks: store.allBooks,
 isLoading: store.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
fetchAllBooks: (url) => dispatch(fetchAllBooks(url))
})



export default connect(mapStateToProps, mapDispatchToProps) (Main)