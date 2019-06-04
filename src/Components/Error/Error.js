import React from 'react';
import rott404 from '../../Assets/rottweiler-404.jpg'


export const Error = () => {

  return (
    <section>
      <h3 className="Error-title">404 Page Not Found</h3>
      <img className="error" src={rott404} alt="Page Not Found"/>
    </section>
  )
};


export default Error