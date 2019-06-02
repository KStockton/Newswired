import React, { Component } from 'react'

export default class TravelContainer extends Component {


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
