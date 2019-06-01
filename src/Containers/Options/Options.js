import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFire, faFilm, faRss } from '@fortawesome/free-solid-svg-icons';


// import PropTypes from 'prop-types'

export class Options extends Component {
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
      <div>
        <div className="Options-header">
          <h1 className="Options-title">News Wire</h1>
        </div>
      <header>
        <p className="Options-select">Select Your Favorites</p>
      </header>

      <div className="Options-wrapper">

      <button className="Options-btn">
        <label htmlFor="top-news">
          <FontAwesomeIcon id="top-news" className="Options-fontawesome" onClick={this.increment} icon={faFire}/>
          Top News
        </label>
        </button>

<button className="Options-btn">
        <label htmlFor="new-york-times-books">
          <FontAwesomeIcon id="new-york-times-books" className="Options-fontawesome" onClick={this.increment} icon={faBookOpen}/>
            New York Time Books
        </label>
</button>

<button className="Options-btn">
        <label htmlFor="movie-review">
          <FontAwesomeIcon id="movie-review" className="Options-fontawesome" onClick={this.increment} icon={faFilm}/>
            Movie Review
        </label>
        </button>

        <button className="Options-btn">
        <label htmlFor="latest-news">
          <FontAwesomeIcon id="latest-news" className="Options-fontawesome" onClick={this.increment} icon={faRss}/>
            Latest News
        </label>
        </button>

        </div>
      </div>
    )
  }
}



export default Options
