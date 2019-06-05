import React, { Component } from 'react';

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
          <label htmlFor="menu">
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
          </label>
      </header>
    )
  }
}
 
export default Nav