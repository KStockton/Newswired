import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopNews } from '../../Thunks/fetchTopNews';
import Card from '../../Components/Card/Card';
const shortid = require('shortid')
const API_KEY =`${process.env.REACT_APP_NEWSAPI_API_KEY}`


class TravelContainer extends Component {

   componentDidMount() {
    if(this.props.allTopNews.length == 0){
       const topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
       this.props.fetchTopNews(topNewsUrl)
    }
  }

  displayTopNews =() => {
   return this.props.allTopNews.map(location => {
    return (<Card {...location} key={shortid.generate()} id={shortid.generate()}/>)
   })
   }
  
  render() {
    const displayTopNews = this.displayTopNews()
   
    return (
      <section>
      <h2 className="TopNews-header">Top News</h2>
      <div className="TravelContainer-wrapper Card-wrapper">
        {displayTopNews}
      </div>
      </section>
    )
  }
}


export const mapStateToProps = (state) => ({
  allTopNews: state.allTopNews
})

export const mapDispatchToProps = (dispatch) => ({
  fetchTopNews: (url) => dispatch(fetchTopNews(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer)
