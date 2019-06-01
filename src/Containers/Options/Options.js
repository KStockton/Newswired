import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFire, faFilm, faRss } from '@fortawesome/free-solid-svg-icons';


// import PropTypes from 'prop-types'

export class Options extends Component {
  constructor() {
    super()
    this.state = {
      topNews: false,
      books: false,
      movieReview: false,
      latestNews: false
    }
  }

  componentDidMount() {
  }

  selectTopic = (event) => {
    const { name } = event.target
    this.setState({[name]: !this.state[name]})
  }

  render() {
   
    console.log(this.state)

    return (
      <div>
        <div className="Options-header">
          <h1 className="Options-title">News Wire</h1>
        </div>
        <header>
          <p className="Options-select">Please Select Your Favorites</p>
        </header>
        <div className="Options-wrapper">
          <button className="Options-btn" name="topNews" onClick={this.selectTopic}>
            <label htmlFor="top-news">
              <FontAwesomeIcon id="top-news" className="Options-fontawesome" icon={faFire}/>
                Top News
            </label>
          </button>
          <button className="Options-btn" name="books" onClick={this.selectTopic}>
            <label htmlFor="new-york-times-books">
              <FontAwesomeIcon id="new-york-times-books" className="Options-fontawesome" icon={faBookOpen}/>
                New York Times Books
            </label>
          </button>
          <button className="Options-btn"  name="movieReview" onClick={this.selectTopic}>
            <label htmlFor="movie-review">
              <FontAwesomeIcon id="movie-review" className="Options-fontawesome" icon={faFilm}/>
                Movie Reviews
            </label>
          </button>
          <button className="Options-btn" name="latestNews" onClick={this.selectTopic}>
            <label htmlFor="latest-news">
              <FontAwesomeIcon id="latest-news" className="Options-fontawesome" icon={faRss}/>
                The Latest News
            </label>
          </button>
        </div>
      </div>
    )
  }
}



export default Options
