import React, { Component } from 'react';

class Navbutton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggled: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var current = this.state.isToggled;
    if(!this.state.isToggled) {
      this.setState({
        isToggled: e.target
      });
    }
    if(e.target !== current) {
      if(current) {
        current.classList = "navbar-animation-button";
      }
      this.setState({
        isToggled: e.target
      });
      current = e.target;
      current.classList += " clicked animation";
    }
  }

  render() {
    return (
      <div>
        <div className='title'>Animation Navbar</div>
        <div className="navbar-animation">
          <div className="navbar-button-container">
            <button className="navbar-animation-button" onClick={this.handleClick}>Button 1</button>
          </div>
          <div className="navbar-button-container">
            <button className="navbar-animation-button" onClick={this.handleClick}>Button 2</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbutton;
