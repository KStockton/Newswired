import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFire, faRunning, faGlobeAfrica, faCheck } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategories } from '../../actions/index'


// import PropTypes from 'prop-types'

export class Options extends Component {
  // constructor() {
    // super()
    // this.state = {
    //   topNews: false,
    //   books: false,
    //   sportsNews: false,
    //   travel: false
    // }
  // }
  
  
  selectTopic = (event) => {
    const { name } = event.target
    this.props.setCategories(name)

    // this.setState({[ name ]: !this.state[name]})
  }
  
  render() {
    let numOfCategories = Object.values(this.props.categories).filter(item=> item === true).length

    const {topNews, books, sportsNews, travel} = this.props.categories

    return (
      <div>
        <div className="Options-header">
          <h1 className="Options-title">News Wire</h1>
        </div>
        <header className="Options-news">
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
            <button className="Options-btn"  name="sportsNews" onClick={this.selectTopic}>
              <label htmlFor="sports-news">
                <FontAwesomeIcon id="sports-news" className="Options-fontawesome" icon={faRunning}/>
                  Sports 
              </label>
            </button>
          {sportsNews && <FontAwesomeIcon  className="Options-check" icon={faCheck}/>}
          </div>
          <div className="Options-btn-wrapper">
            <button className="Options-btn" name="travel" onClick={this.selectTopic}>
              <label htmlFor="latest-news">
                <FontAwesomeIcon id="latest-news" className="Options-fontawesome" icon={faGlobeAfrica}/>
                  Travel
              </label>
            </button>
            {travel && <FontAwesomeIcon  className="Options-check" icon={faCheck}/>}
            {numOfCategories >= 3 ? <NavLink to="/main" className="Options-btn">Next</NavLink> : 
              <h3>Please Select 3 Categories</h3>}
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  categories: state.categories
})

export const mapDispatchToProps = (dispatch) => ({
 setCategories: (category) => dispatch(setCategories(category))
})



export default connect(mapStateToProps, mapDispatchToProps) (Options)
