import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';



export const Error = () => {

  return (
    <section className="error" >
      <div className="error-wrapper">
        <h5 className="Error-title">404 Page Not Found</h5>
        <NavLink className="error-back"to="/Options">
          <FontAwesomeIcon className="Error-fontawesome" icon={faHome}/>
          Home
        </NavLink>
      </div>
    </section>
  );
};


export default Error;