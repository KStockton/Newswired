import React from 'react';
import rott404 from '../../Assets/rottweiler-404.jpg';
import {NavLink} from 'react-router-dom'


export const Error = () => {

  return (
    <section>
      <div>
        <h3 className="Error-title">"ruff" <span role="img" aria-label="dog">&#128054;</span> 404 Page Not Found</h3>
        <NavLink className="error-back"to="/Options">Home</NavLink>
      </div>
      <img className="error" src={rott404} alt="Page Not Found"/>
    </section>
  )
};


export default Error