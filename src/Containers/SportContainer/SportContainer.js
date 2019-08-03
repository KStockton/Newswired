import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSportsNews } from '../../Thunks/fetchSportsNews';
import Card from '../../Components/Card/Card';
import PropTypes from 'prop-types';
import Loading from '../../Components/Loading/Loading';
import {Link} from 'react-router-dom';
const shortid = require('shortid');


export class SportContainer extends Component {

 componentDidMount = () => {

   const todaysDate = this.date();

   if (this.props.allSports.length === 0){
     const sportNewsUrl = `https://newsapi.org/v2/everything?q=sports&language=en&from=${todaysDate}&page=1&domains=espn.com&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;
     this.props.fetchSportsNews(sportNewsUrl);
   }
 }
  
  date = () => {

    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return [year, month, day - 1].join('-');
  
  }

  displaySportNews = () => {
    return this.props.allSports.map(location => {
      return (<Card {...location} key={shortid.generate()}/>);
    });
  }
  
  render() {

    const {error, allSports}= this.props;
    const errorMsg = 
                    <div>
                      <h2>{error}</h2>
                      <Link to="/Options">Back</Link>
                    </div>;

    const displaySportNews = this.displaySportNews();

    return (
      <section>
        <h2 className="Sports-header">Sport News</h2>
        <div className="sports-wrapper Card-wrapper">
          {(error !== '' && allSports.length === 0) && errorMsg}
          {(error === '' && allSports.length === 0) && <Loading/>}
          {displaySportNews}
        </div>
      </section>
    );
  }
}
export const mapStateToProps = (state) => ({
  allSports: state.allSports,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  fetchSportsNews: (url) => dispatch(fetchSportsNews(url))
});

SportContainer.propTypes = {
  allSports: PropTypes.array,
  fetchSportsNews: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SportContainer);