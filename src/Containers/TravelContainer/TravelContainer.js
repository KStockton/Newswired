import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopTravel } from '../../Thunks/fetchTopTravel';
import PropTypes from 'prop-types';
import Card from '../../Components/Card/Card';
import {Link} from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
const shortid = require('shortid')
const API_KEY =`${process.env.REACT_APP_NEWSAPI_API_KEY}`

export class TravelContainer extends Component {

 componentDidMount() {
    if(this.props.allTravel.length === 0){
      const travelUrl = `https://newsapi.org/v2/everything?q=travel-news&language=en&page=1&domains=vice.com&apiKey=${API_KEY}`
      this.props.fetchTopTravel(travelUrl)
    }
  }
 
  displayTravel = () => {
  
   return this.props.allTravel.map(location => {
    return (<Card {...location} key={shortid.generate()}/>)
   })
  }
  
  render() {
    const {error, allTravel}= this.props
    const errorMsg = 
                    <div>
                      <h2>{error}</h2>
                      <Link to="/Options">Back</Link>
                    </div>

    const displayTravel = this.displayTravel()
   
    return (
      <section>
        <h2 className="Travel-header">Vice Travel News</h2>
        {(error !== '' && allTravel.length === 0) && errorMsg}
        {(error === '' && allTravel.length === 0 ) && <Loading/>}
        <div className="TravelContainer-wrapper Card-wrapper">
          {displayTravel}
        </div>
      </section>
    )
  }
}

TravelContainer.propTypes = {
  allTravel: PropTypes.array,
  error: PropTypes.string,
  fetchTopTravel: PropTypes.func
}

export const mapStateToProps = (state) => ({
  allTravel: state.allTravel,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  fetchTopTravel: (url) => dispatch(fetchTopTravel(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TravelContainer)
