import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
import { fetchTopTravel } from '../../Thunks/fetchTopTravel';
import BooksContainer from '../../Containers/BooksContainer/BooksContainer';
import TravelContainer from '../../Containers/TravelContainer/TravelContainer';
import Loading from '../../Components/Loading/Loading';
import Nav from '../Nav/Nav';
const API_KEY =`${process.env.REACT_APP_NEWYORKTIMES_API_KEY}`

// import { cleanBooks } from '../../Utility/cleanBooks';



class Main extends Component {
  

  async componentDidMount() {

    

    if(this.props.allBooks.length || this.props.allTravel.length){
      // //prevents a second fetch when going back and forth
    }
    else {
      // const travelUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${API_KEY}`
      // this.props.fetchTopTravel(travelUrl)
      
      const bookUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
      this.props.fetchAllBooks(bookUrl)
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
          (!this.props.isLoading) ? 
          // <TravelContainer travel={this.props.allTravel}/>
          <BooksContainer books={this.props.allBooks}/>
           :
            <Loading/>
        }
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
 allBooks: store.allBooks,
 allTravel: store.allTravel,
 isLoading: store.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
fetchAllBooks: (url) => dispatch(fetchAllBooks(url)),
fetchTopTravel: (url) => dispatch(fetchTopTravel(url))
})



export default connect(mapStateToProps, mapDispatchToProps) (Main)