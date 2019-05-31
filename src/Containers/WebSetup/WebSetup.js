import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class WebSetup extends Component {
  constructor() {
    super()
    this.state = {
      numOfSelect: 0
    }
  }

  // componentDidMount() {
  //   this.getDate()
  // }
  // static propTypes = {
  //   prop: PropTypes
  // }
  increment = () => {

    this.setState({numOfSelect: this.state.numOfSelect + 1 })
  }

  render() {
   
    

    return (
      <div className="WebSetup-wrapper">
        <h1>Select Your Favorites</h1>
        {/* <h1>{this.state.date}</h1> */}
        <label for="top-news">Top News</label>
        <input type="checkbox" id="top-news" onClick={this.increment}></input>
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

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(WebSetup)
