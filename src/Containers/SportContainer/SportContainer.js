import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSportsNews } from '../../Thunks/fetchSportsNews';
import Card from '../../Components/Card/Card';
import PropTypes from 'prop-types';
const shortid = require('shortid')
const API_KEY =`${process.env.REACT_APP_NEWSAPI_API_KEY}`
class SportsContainer extends Component {

   componentDidMount() {
    if(this.props.allSports.length == 0){
      const sportNewsUrl = 
      `https://newsapi.org/v2/everything?q=sports&language=en&from=2019-06-03&page=1&domains=espn.com&apiKey=${API_KEY}`;
      this.props.fetchSportsNews(sportNewsUrl)
    }
  }
  

  displaySportNews = () => {
   return this.props.allSports.map(location => {
    return (<Card {...location} key={shortid.generate()} id={shortid.generate()}/>)
   })
   }
  
  render() {
    const displaySportNews = this.displaySportNews()
   
    return (
      <section>
      <h2 className="Sports-header">Sport News</h2>
      <div className="sports-wrapper Card-wrapper">
        {displaySportNews}
      </div>
      </section>
    )
  }
}
export const mapStateToProps = (state) => ({
  allSports: state.allSports
})

export const mapDispatchToProps = (dispatch) => ({
  fetchSportsNews: (url) => dispatch(fetchSportsNews(url))
})

SportsContainer.propTypes = {
  allSports: PropTypes.array,
  fetchSportsNews: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SportsContainer)