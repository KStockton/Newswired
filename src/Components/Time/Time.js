import React, { Component }  from 'react';
import Clock from 'react-live-clock';
 
export default class Time extends Component {
  //coming soon
  render() {
    return (
      <time>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Moutain'} />
      </time>
    );
  }
}