import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSportsNews } from '../../Thunks/fetchSportsNews';
import Travel from '../../Components/Travel/Travel';
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
    return (<Travel {...location} key={shortid.generate()} id={shortid.generate()}/>)
   })
   }
  
  render() {
    const displaySportNews = this.displaySportNews()
   
    return (
      <section>
      <h2>Sport News</h2>
      <div className="SportNews-wrapper">
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

export default connect(mapStateToProps, mapDispatchToProps)(SportsContainer)