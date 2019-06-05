import React, { Component } from 'react';
import { connect } from 'react-redux';
import BooksContainer from '../../Containers/BooksContainer/BooksContainer';
import TravelContainer from '../TravelContainer/TravelContainer';
import Nav from '../Nav/Nav';
import SportContainer from '../SportContainer/SportContainer';
import TopNewsContainer from '../TopNewsContainer/TopNewsContainer';
import PropTypes from 'prop-types'

class Main extends Component {
  

  render() {
    const {categories} = this.props
    return (
      <div className="">
        <div className="Main-header">
          <h1 className="Main-title">News Wire</h1>
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
  isLoading: PropTypes.bool,
  categories: PropTypes.object
}
export const mapStateToProps = (state) => ({
 categories: state.categories
})

export default connect(mapStateToProps, null) (Main)