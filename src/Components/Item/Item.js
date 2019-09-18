import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const Item = ( {
  bookImage, author, id, description, title, articleImage, content}) => {

  return (
    <article className="Item-wrapper" id={id}>
      <section>
        <p className="Item-title">{title}</p>
        <img className="Item-img" src={bookImage|| articleImage} alt="book"/>
        <p className="Item-author">{author}</p>
        <p className="Item-description">{description}</p>
        <p className="Item-content">{content || null}</p>
      </section>
      <Link to={`/main`} className="Item-back">
        <p>back</p>
        <FontAwesomeIcon id="latest-news" className="Item-fontawesome" icon={faArrowLeft}/>
      </Link>
    </article>
  );
}; 

Item.propTypes = {
  id: PropTypes.string,
  bookImage: PropTypes.string,
  title: PropTypes.string,
  articleImage: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string
};
export default Item;