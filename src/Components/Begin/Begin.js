import React from 'react';
import {NavLink} from 'react-router-dom'

const Begin = () => {
    
  return (
    <div className="begin-wrapper">
      <section >
        <h1>Welcome to News Wire</h1>  
      </section>
      <NavLink to="/Options">
        <button className="begin-btn">Get Started</button>
      </NavLink>
    </div>
  )
}




export default Begin
