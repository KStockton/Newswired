import React from 'react';
import {Link} from 'react-router-dom'

const Begin = () => {
    
  return (
    <div className="begin-wrapper">
      <section >
        <h1>Welcome to News Wire</h1>  
      </section>
      <Link to="/Options">
        <button className="begin-btn">Get Started</button>
      </Link>
    </div>
  )
}




export default Begin
