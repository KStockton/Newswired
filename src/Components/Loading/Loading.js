import React from 'react';
import loading from '../../Assets/loading.svg';

const Loading = () => {

  return (
    <section className="Loading-wrapper">
      <img src={loading} alt="loading" />
      <h4 className="Loading-text">Loading...</h4>
    </section>
  )
}

export default Loading