import React, {Component} from 'react';
import PropTypes from 'prop-types';
import love from '../../Assets/love.svg'
import nolove from '../../Assets/nolove.svg'
import { connect } from 'react-redux';
import {toggleFavorite} from '../../actions/index';
import {Link} from 'react-router-dom';


export class Book extends Component{


  render() {
    const {bookImage, rank, author, id, description, title, weeksOnList, isfavorited} = this.props
    

      return (
        <article className="book-tile" id={id}>
          <Link to={`/card/${id}`}>
            <img className={isfavorited ? 'book-favorite' : 'book-nofavorite'}
              src={isfavorited ? love : nolove} 
              alt="emoji favorite icon"
              onClick={() => this.props.toggleFavorite(id)}
              role="button"
              id="img-test"
              />
            <img className="book-img" src={bookImage} alt="book"/>
              </Link>
            <p className="author">{author}</p>
            <p className="book-rank">Rank: {rank}</p>
            <p className="book-weeks">{weeksOnList} weeks on list</p>
            <p className="book-title">{title}</p>
            <p className="book-description">{description}</p>
          </article >
      )
    }
  }

Book.propTypes = {
  bookImage: PropTypes.string,
  rank: PropTypes.number,
  author: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  weeksOnList: PropTypes.number
}

export const mapDispatchToProps = (dispatch) => ({
  toggleFavorite: (id) => dispatch(toggleFavorite(id))
})


export default connect(null, mapDispatchToProps)(Book)