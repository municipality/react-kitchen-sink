import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import componentsList from './ComponentsList';

class Sidebar extends Component {
  //State : {hovering: compName, selected: compName}
  constructor(props) {
    super();

    this.state = {
      hovering: '',
      //Replace the %20 from the url with single space
      selected: document.location.pathname.substring(1).replace('%20', ' ') || ''
    }
  }
  handleHover(compName) {
    this.setState({
      hovering: compName
    });
  }

  handleHoverExit() {
    this.setState({
      hovering: ''
    });
  }

  handleSelect(compName) {
    this.setState({
      selected: compName,
      hovering: ''
    });
  }

  render() {
    return (
      <div className='sidebar'>
        <ul>
          <div className='sidebar-title'>Components</div>
          {componentsList.map(comp => (
            <li key={comp.name}>
              <Link to={'/' + comp.name}
              //If it is this.state.selected, then append class to it
                className={this.state.selected === comp.name ? 'selected' : ''}
                //Handle selected
                //Hover handlers
                onMouseEnter={this.handleHover.bind(this, comp.name)}
                onMouseLeave={this.handleHoverExit.bind(this)}
                onClick={this.handleSelect.bind(this, comp.name)}>{comp.name}
                <div className={this.state.hovering === comp.name ? 'sidebar-title-animation hovering' : 'sidebar-title-animation'}>
                </div>
              </Link>

            </li>

          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
