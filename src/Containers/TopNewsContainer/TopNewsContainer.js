import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopNews } from '../../Thunks/fetchTopNews';
import PropTypes from 'prop-types';
import Loading from '../../Components/Loading/Loading';
import {Link} from 'react-router-dom';
import Card from '../../Components/Card/Card';
const shortid = require('shortid');


export class TopNewsContainer extends Component {

  componentDidMount() {
    if (this.props.allTopNews.length === 0){
      const topNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;
      this.props.fetchTopNews(topNewsUrl);
    }
  }

  displayTopNews =() => {
    return this.props.allTopNews.map(location => {
      return (<Card {...location} key={shortid.generate()}/>);
    });
  };
  
  render() {
    const {error, allTopNews}= this.props;
    const errorMsg = 
                    <div>
                      <h2>{error}</h2>
                      <Link to="/Options">Back</Link>
                    </div>;
    const displayTopNews = this.displayTopNews();
    
    return (
      <section>
        <h2 className="TopNews-header">Top News</h2>
        <div className="TopNews-wrapper Card-wrapper">
          {(error !== '' && allTopNews.length === 0 ) && errorMsg}
          {(error === '' && allTopNews.length === 0 ) && <Loading/>}
          {displayTopNews}
        </div>
      </section>
    );
  }
}

TopNewsContainer.propTypes = {
  allTopNews: PropTypes.array,
  error: PropTypes.string,
  fetchTopNews: PropTypes.func
};

export const mapStateToProps = (state) => ({
  allTopNews: state.allTopNews,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTopNews: (url) => dispatch(fetchTopNews(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopNewsContainer);
