import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksContainer from '../../Containers/BooksContainer/BooksContainer';
import TravelContainer from '../TravelContainer/TravelContainer';
import Loading from '../../Components/Loading/Loading';
import Nav from '../Nav/Nav';
import SportContainer from '../SportContainer/SportContainer';
import PropTypes from 'prop-types'

// const API_KEY =`${process.env.REACT_APP_NEWSAPI_API_KEY}`
// import { cleanResponse } from '../../Utility/cleanResponse';



class Main extends Component {
  

  componentDidMount() {

      // } else if(topic === 'topNews' && this.props.allTopNews.length === 0){
        // const topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&${API_KEY}`
          //this.props.fetchTopNews(topNewsUrl)

      // } else if(topic === 'sportsNews' && this.props.allSports.length === 0){
        // const sportsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`
        //this.props.fetchUSSports(sportsURL)
      }


      toggleFavorite = (type, name) => {

      }
     
 


  render() {
    const {categories} = this.props
   console.log(typeof this.props.isLoading)
    return (
      <div className="">
        <div className="Main-header">
          <h1 className="Main-title">News Wire</h1>
          <Nav/>
        </div>
        {categories.books && <BooksContainer toggleFavorite={this.toggleFavorite} />}
        {categories.travel && <TravelContainer toggleFavorite={this.toggleFavorite} />}
        {categories.sportsNews && <SportContainer toggleFavorite={this.toggleFavorite} />}
        {categories.topNews && <TravelContainer toggleFavorite={this.toggleFavorite} />}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
 isLoading: state.isLoading,
 categories: state.categories
})

Main.propTypes = {
  isLoading: PropTypes.bool
}


export default connect(mapStateToProps, null) (Main)