import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBookOpen, 
  faFire, 
  faRunning, 
  faGlobeAfrica, 
  faCheck, 
  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategories } from '../../actions/index';
import PropTypes from 'prop-types';

export class Options extends Component {

  
  selectTopic = (event) => {
    const { name } = event.target;
    this.props.setCategories(name);
  }
  
  render() {
    let numOfCategories = Object.values(this.props.categories).filter(item=> item === true).length;

    const { topNews, books, sportsNews, travel } = this.props.categories;

    return (
      <section>
        <div className="Options-background">
          <div className="Options-header">
            <h1 className="Options-title">News Wired</h1>
          </div>
          <header className="Options-news">
            <h4 className="Options-select-choice">Select News</h4>
          </header>
          <div className="Options-wrapper">
            <div className="Options-btn-wrapper">
              <button className="Options-btn" name="topNews" onClick={(event) => this.selectTopic(event)}>
                <label htmlFor="top-news">
                  <FontAwesomeIcon id="top-news" className="Options-fontawesome select-options" icon={faFire}/>
                Top News
                </label>
              </button>
              { topNews ? 
                <FontAwesomeIcon  className="Options-check" icon={faCheck}/> : <FontAwesomeIcon  className="Options-uncheck" icon={faCheck}/> }
            </div>
            <div className="Options-btn-wrapper">
              <button className="Options-btn" name="books" onClick={this.selectTopic}>
                <label htmlFor="new-york-times-books">
                  <FontAwesomeIcon id="new-york-times-books" className="Options-fontawesome select-options" icon={faBookOpen}/>
                  NYT Best Sellers
                </label>
              </button>
              { books ?  <FontAwesomeIcon  className="Options-check" icon={faCheck}/> : <FontAwesomeIcon  className="Options-uncheck" icon={faCheck}/>}
            </div>
            <div className="Options-btn-wrapper">
              <button className="Options-btn"  name="sportsNews" onClick={this.selectTopic}>
                <label htmlFor="sports-news">
                  <FontAwesomeIcon id="sports-news" className="Options-fontawesome select-options" icon={faRunning}/>
                  Sports 
                </label>
              </button>
              { sportsNews ? <FontAwesomeIcon  className="Options-check select-options" icon={faCheck}/> : <FontAwesomeIcon  className="Options-uncheck" icon={faCheck}/>}
            </div>
            <div className="Options-btn-wrapper">
              <button className="Options-btn" name="travel" onClick={this.selectTopic}>
                <label htmlFor="latest-news">
                  <FontAwesomeIcon id="latest-news" className="Options-fontawesome select-options" icon={faGlobeAfrica}/>
                  Travel
                </label>
              </button>
              { travel ? <FontAwesomeIcon  className="Options-check" icon={faCheck}/> : <FontAwesomeIcon  className="Options-uncheck" icon={faCheck}/> }
            </div>
          </div>
          <div className="Options-continue" role="button">
            { 
              numOfCategories >= 1 && 
              <div id='next-container'>
                <FontAwesomeIcon id="latest-news" className="Options-fontawesome" icon={faArrowRight}/>
                <NavLink to="/Main" id="next"> 
                  <p>continue</p>
                </NavLink>
              </div>
            }
          </div>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = (state) => ({
  categories: state.categories
});

export const mapDispatchToProps = (dispatch) => ({
  setCategories: (category) => dispatch(setCategories(category))
});

Options.propTypes = {
  categories: PropTypes.object,
  setCategories: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
