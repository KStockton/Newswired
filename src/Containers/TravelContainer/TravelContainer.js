import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopTravel } from '../../Thunks/fetchTopTravel';
import Card from '../../Components/Card/Card';
const shortid = require('shortid')
const API_KEY =`${process.env.REACT_APP_NEWSAPI_API_KEY}`


class TravelContainer extends Component {

   componentDidMount() {
    if(this.props.allTravel.length == 0){
      const travelUrl = `https://newsapi.org/v2/everything?q=travel-news&language=en&page=1&domains=vice.com&apiKey=${API_KEY}`
       this.props.fetchTopTravel(travelUrl)
    }
  }





      // const topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&${API_KEY}`
      // this.props.fetchTopNews(topNewsUrl)
      

  displayTravel =() => {
   return this.props.allTravel.map(location => {
    return (<Card {...location} key={shortid.generate()} id={shortid.generate()}/>)
   })
   }
  
  render() {
    const displayTravel = this.displayTravel()
   
    return (
      <section>
      <h2>Vice Travel News</h2>
      <div className="TravelContainer-wrapper Card-wrapper">
        {displayTravel}
      </div>
      </section>
    )
  }
}


export const mapStateToProps = (state) => ({
  allTravel: state.allTravel

})

export const mapDispatchToProps = (dispatch) => ({
  fetchTopTravel: (url) => dispatch(fetchTopTravel(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer)
