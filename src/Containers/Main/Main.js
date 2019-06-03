import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBooks } from '../../Thunks/fetchAllBooks';
import { fetchTopTravel } from '../../Thunks/fetchTopTravel';
import BooksContainer from '../../Containers/BooksContainer/BooksContainer';
import TravelContainer from '../../Containers/TravelContainer/TravelContainer';
import Loading from '../../Components/Loading/Loading';
import Nav from '../Nav/Nav';
import {NYT_KEY} from '../../Utility/Config/Key'
const API_KEY =`${process.env.REACT_APP_NEWSAPI_API_KEY}`
// import { cleanResponse } from '../../Utility/cleanResponse';



class Main extends Component {
  

  async componentDidMount() {

    // const categories = Object.keys(this.props.categories)
//  let selectedTopics = categories.filter(category => this.props.categories[category] === true)
 ///tried includes but realize that after first condition is met the next if/else statement wont run
//  selectedTopics.forEach(topic => {
   if(topic === 'books' && this.props.allBooks.length === 0){
     const bookUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYT_KEY}`
     this.props.fetchAllBooks(bookUrl)
      // } else if(topic === 'travel' && this.props.allTravel.length === 0){
        // const travelUrl = `https://newsapi.org/v2/everything?q=travel&apiKey=${API_KEY}`
        // this.props.fetchTopTravel(travelUrl)
      // } else if(topic === 'topNews' && this.props.allTopNews.length === 0){
        // const topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&${API_KEY}`
          //this.props.fetchTopNews(topNewsUrl)
      // } else if(topic === 'sportsNews' && this.props.allSports.length === 0){
        // const sportsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`
        //this.props.fetchUSSports(sportsURL)
      }
     
     //     if(this.props.allBooks.length || this.props.allTravel.length){
       //       // //prevents a second fetch when going back and forth
       //     }
       //     else {
         //       // const travelUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${API_KEY}`
         
         //       }
        })
  }



  render() {
   

    return (
      <div className="">
        <div className="Main-header">
          <h1 className="Main-title">News Wire</h1>
          <Nav/>
        </div>
        {
          (!this.props.isLoading && this.props.categories.books) ? 
          // <TravelContainer travel={this.props.allTravel}/>
          <BooksContainer/>
           :
            <Loading/>
        }
        {
          (!this.props.isLoading && this.props.categories.topNews) ? 
          // <TravelContainer travel={this.props.allTravel}/>
          <BooksContainer/>
           :
            <Loading/>
        }
        {
          (!this.props.isLoading && this.props.categories.sportsNews) ? 
          // <TravelContainer travel={this.props.allTravel}/>
          <BooksContainer/>
           :
            <Loading/>
        }
        {
          (!this.props.isLoading && this.props.categories.travel) ? 
          // <TravelContainer travel={this.props.allTravel}/>
          <BooksContainer/>
           :
            <Loading/>
        }
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
 isLoading: store.isLoading,
 categories: store.categories
})

// export const mapDispatchToProps = (dispatch) => ({
// fetchAllBooks: (url) => dispatch(fetchAllBooks(url)),
// fetchTopTravel: (url) => dispatch(fetchTopTravel(url))
// })



export default connect(mapStateToProps, mapDispatchToProps) (Main)