import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksContainer from '../../Containers/BooksContainer/BooksContainer';
import TravelContainer from '../TravelContainer/TravelContainer';
// import Nav from '../../Components/Nav/Nav'; coming soon
// import Time from '../../Components/Time/Time'; coming soon
import SportContainer from '../SportContainer/SportContainer';
import TopNewsContainer from '../TopNewsContainer/TopNewsContainer';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export class Main extends Component {

  render() {
    const { categories } = this.props;
    
    return (
      <div className="Main-background">
        <div className="Main-header">
          <Link to="/Options" className="news-title">
            <h1 className="Main-title">
            News Wired
            </h1>
          </Link>
          {/* <Nav/> */}
          {/* <Time/> */}
        </div>
      
        { categories.books && <BooksContainer /> }
        { categories.sportsNews && <SportContainer /> }
        { categories.travel && <TravelContainer  /> }
        { categories.topNews && <TopNewsContainer /> }
      </div>
    );
  }
}

Main.propTypes = {
  categories: PropTypes.object
};
export const mapStateToProps = (state) => ({
  categories: state.categories
});

export default connect(mapStateToProps, null)(Main);