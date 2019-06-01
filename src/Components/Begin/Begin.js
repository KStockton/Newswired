import React from 'react';

const Begin = (props) => {
  
  return (
    <div className="begin-wrapper">
      <div >
      <h1>Welcome to News Wire</h1>  
      </div>
      <button className="begin-btn" onClick={props.pageSetup}>Get Started</button>
    </div>
  )
}




export default Begin
