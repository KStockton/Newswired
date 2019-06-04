import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopTravel } from '../../Thunks/fetchTopTravel';
import Travel from '../../Components/Travel/Travel';
const shortid = require('shortid')
const API_KEY =`${process.env.REACT_APP_NEWSAPI_API_KEY}`


class TravelContainer extends Component {

   componentDidMount() {

    if(this.props.allTravel.length == 0){
      const travelUrl = `https://newsapi.org/v2/everything?q=travel-news&language=en&page=1&domains=vice.com&apiKey=${API_KEY}`
      console.log('hi')
       this.props.fetchTopTravel(travelUrl)
    }
  }




  displayTravel =() => {
   return this.props.allTravel.map(location => {
    return (<Travel {...location} key={shortid.generate()}/>)
   })
   }
  
  render() {
    const displayTravel = this.displayTravel()
   
    return (
      <section>
      <h2>Vice Travel News</h2>
      <div className="Travel-wrapper">
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
  fetchTopTravel: (url) => dispatch(fetchTopTravel(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer)
