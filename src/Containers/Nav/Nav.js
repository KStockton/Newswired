import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class Nav extends Component {
    constructor() {
      super()
      this.state = {
        isChecked: false
      }
    }

    handleClick = (event) => {
      this.setState({checked: !this.state.checked})
    }
  
  render() {
//note sure if im making book solo page
//if not then i dont need a menu component   


    let menu
    if(this.state.checked){
      menu = 
            <nav className="Nav">
              {/* {this.props.categories['books'] && <NavLink to='/Main/Books'>
                <FontAwesomeIcon  className="icon"/>
                  Books
              </NavLink>} */}
              {/* <NavLink to='/portfolio' className="nav">  */}
                {/* <FontAwesomeIcon icon={} className="icon"/> */}
                {/* Portfolio */}
              {/* </NavLink> */}
              {/* <NavLink to='/contact' className="nav"> */}
                {/* <FontAwesomeIcon icon={} className="icon"/> */}
                  {/* Contact */}
              {/* </NavLink> */}
          </nav>
    }
    return (
      <header className="Nav-header">
        {menu}
        <input type="checkbox" className="toggle" id="menu" value={this.state.checked} onClick={this.handleClick}/>
          <label for="menu">
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
          </label>
      </header>
    )
  }
}

export const mapStateToProps = (state) => ({
categories: state.categories
})
 
export default connect(mapStateToProps)(Nav)