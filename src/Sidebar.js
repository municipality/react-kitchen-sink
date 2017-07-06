import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import componentsList from './ComponentsList';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <ul>
          <div className='sidebar-title'>Components</div>
          {componentsList.map(comp => (
            <li key={comp.name}><Link to={'/' + comp.name}>{comp.name}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
