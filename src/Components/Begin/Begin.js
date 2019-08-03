import React from 'react';
import {Link} from 'react-router-dom'

const Begin = () => {
    
  return (
    <div className="begin-wrapper">
      <section>
        <h1>
          <span id="welcome">Welcome</span> 
          <span id="news-wire">to News Wire</span>
        </h1>  
      </section>
      <Link to="/Options" className="start">
        <button className="begin-btn">Get Started</button>
      </Link>
    </div>
  )
}




export default Begin
