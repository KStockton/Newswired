import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopTravel } from '../../Thunks/fetchTopTravel';
const API_KEY =`${process.env.REACT_APP_NEWSAPI_API_KEY}`


class TravelContainer extends Component {

  async componentDidMount() {
    if(this.props.allTravel === 0){
      const travelUrl = `https://newsapi.org/v2/everything?q=travel&apiKey=${API_KEY}`
        this.props.fetchTopTravel(travelUrl)
    }
  }




  displayTravel =() => {
   return this.props.allTravel.map(location => {
      const {id, title, author, abstract, image} = location
  
      return <article>
          <h6>{abstract}</h6>
          <img src={image} alt="travel" />
      </article>
    })
  }
  
  render() {
    const displayTravel = this.displayTravel()
    console.log(this.props.travel)
    return (
      <div>
        {displayTravel}
      </div>
    )
  }
}


export const mapStateToProps = (store) => ({
  allTravel: store.allTravel
})

export const mapDispatchToProps = (dispatch) => ({
  fetchTopTravel: (url) => dispatch(fetchTopTravel(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer)
