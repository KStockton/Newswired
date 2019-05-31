import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';



export class Begin extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="begin-wrapper">
        <div >
        <h1>Welcome to News Wire</h1>  
        </div>
        <button className="begin-btn">Get Started</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Begin)
