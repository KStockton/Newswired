import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFire, faFilm, faRss, faCheck } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategories } from '../../actions/index'


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


    
    
    componentDidUpdate() {
    // this.props.setCategories(this.state)
    
  }
  
  selectTopic = (event) => {
    const { name } = event.target
    this.props.setCategories(name)

    this.setState({[ name ]: !this.state[name]})
  }
  
  render() {
    let numOfCategories = Object.values(this.state).filter(item=> item === true).length

    const {topNews, books, movieReview, latestNews} = this.state

    return (
      <div>
        <div className="Options-header">
          <h1 className="Options-title">News Wire</h1>
        </div>
        <header>
          <p className="Options-select">Select Your News</p>
        </header>
        <div className="Options-wrapper">
        <div className="Options-btn-wrapper">
          <button className="Options-btn" name="topNews" onClick={this.selectTopic}>
            <label htmlFor="top-news">
              <FontAwesomeIcon id="top-news" className="Options-fontawesome" icon={faFire}/>
                Top News
            </label>
          </button>
          {topNews && <FontAwesomeIcon  className="Options-check" icon={faCheck}/>}
          </div>
          <div className="Options-btn-wrapper">
            <button className="Options-btn" name="books" onClick={this.selectTopic}>
              <label htmlFor="new-york-times-books">
                <FontAwesomeIcon id="new-york-times-books" className="Options-fontawesome" icon={faBookOpen}/>
                  New York Times Books
              </label>
            </button>
            {books && <FontAwesomeIcon  className="Options-check" icon={faCheck}/>}
          </div>
          <div className="Options-btn-wrapper">
            <button className="Options-btn"  name="movieReview" onClick={this.selectTopic}>
              <label htmlFor="movie-review">
                <FontAwesomeIcon id="movie-review" className="Options-fontawesome" icon={faFilm}/>
                  Movie Reviews
              </label>
            </button>
          {movieReview && <FontAwesomeIcon  className="Options-check" icon={faCheck}/>}
          </div>
          <div className="Options-btn-wrapper">
            <button className="Options-btn" name="latestNews" onClick={this.selectTopic}>
              <label htmlFor="latest-news">
                <FontAwesomeIcon id="latest-news" className="Options-fontawesome" icon={faRss}/>
                  The Latest News
              </label>
            </button>
            {latestNews && <FontAwesomeIcon  className="Options-check" icon={faCheck}/>}
        {numOfCategories >= 3 ? <NavLink to="/main" className="Options-btn">Next</NavLink> : <h3>Please Select 3 Categories</h3>}
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  topic: state.topic
})

export const mapDispatchToProps = (dispatch) => ({
 setCategories: (category) => dispatch(setCategories(category))
})



export default connect(mapStateToProps, mapDispatchToProps) (Options)
