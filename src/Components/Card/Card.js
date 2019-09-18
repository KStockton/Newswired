import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ id, author, source, articleImage, description, title}) =>{
  return (
    <section className="CardCard-tile" id={id}>
      <Link to={`/card/${id}`}>
        <img className="Card-img" src={articleImage} alt="travel"/>
      </Link>
      <p className="Card-author">{author}</p>
      <p className="Card-title">{title}</p>
      <p className="Card-description">{description}</p>
    </section>
  );
};

Card.propTypes = {
  author: PropTypes.string,
  source: PropTypes.string,
  title: PropTypes.string,
  articleImage: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string
};

export default Card;
