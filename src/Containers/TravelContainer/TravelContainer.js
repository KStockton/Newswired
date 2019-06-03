import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopTravel } from '../../Thunks/fetchTopTravel';


class TravelContainer extends Component {

  async componentDidMount() {

  }




  displayTravel =() => {
   return this.props.travel.map(location => {
      const {id, title, author, abstract, image} = location
      console.log(image)
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
