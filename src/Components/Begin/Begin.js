import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';



export class Begin extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div >
        <div className="begin-wrapper">
        <hi>HI</hi>    
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Begin)
