import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksContainer from '../../Containers/BooksContainer/BooksContainer';
import TravelContainer from '../TravelContainer/TravelContainer';
import Nav from '../../Components/Nav/Nav';
import SportContainer from '../SportContainer/SportContainer';
import TopNewsContainer from '../TopNewsContainer/TopNewsContainer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export class Main extends Component {
  

  render() {
    const {categories} = this.props
    return (
      <div className="Main-background">
        <div className="Main-header">
          <Link to="/Options" className="news-title">
          <h1 className="Main-title">
          <FontAwesomeIcon className="Main-fontawesome" icon={faHome}/>
            News Wire
            </h1>
          </Link>
          <Nav/>
        </div>
        {categories.books && <BooksContainer />}
        {categories.travel && <TravelContainer  />}
        {categories.sportsNews && <SportContainer />}
        {categories.topNews && <TopNewsContainer />}
      </div>
    )
  }
}

Main.propTypes = {
  categories: PropTypes.object
}
export const mapStateToProps = (state) => ({
 categories: state.categories
})

export default connect(mapStateToProps, null) (Main)