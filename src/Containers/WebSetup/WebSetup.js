import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


// import PropTypes from 'prop-types'

export class WebSetup extends Component {
  constructor() {
    super()
    this.state = {
      numOfSelect: 0
    }
  }

  componentDidMount() {
  //   this.getDate()
  // }
  // static propTypes = {
  //   prop: PropTypes
  }
  increment = () => {

    this.setState({numOfSelect: this.state.numOfSelect + 1 })
  }

  render() {
   
    

    return (
      <div className="WebSetup-wrapper">
        <h1>Select Your Favorites</h1>
        {/* <h1>{this.state.date}</h1> */}
        <label for="top-news">Top News</label>
        <FontAwesomeIcon id="top-news" className="Home-fontawesome" onClick={this.increment} icon={faBookOpen}/>
        <label for="new-york-times-books">New York Time Books</label>
        <input type="checkbox" id="new-york-times-books"></input>
        <label for="movie-review">Movie Review</label>
        <input type="checkbox" id="movie-review"></input>
        <label for="latest-news">Latest News</label>
        <input type="checkbox" id="latest-news"></input>
      </div>
    )
  }
}



export default WebSetup
