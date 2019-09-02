import React from 'react';
import { Link } from 'react-router-dom';

const Begin = () => {
    
  return (
    <div className="begin-wrapper">
      <section id='welcome-container'>
        <h1 id="welcome">Welcome</h1>  
        <h3 id="news-wire">to News Wired</h3>
        <Link to="/Options" className="start">
          <button className="begin-btn">Get Started</button>
        </Link>
      </section>
    </div>
  );
};




export default Begin;
