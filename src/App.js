import React, { Component } from 'react';
import Sidebar from './Sidebar';
// import Navbutton from './components/Navbutton';
// import Slider from './components/Slider';
import {BrowserRouter, Route} from 'react-router-dom';
import componentsList from './ComponentsList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Routers can only have one child component, so wrap everything in a div */}
        <div className='app-container'>
          <Sidebar />
          <div className='route-container'>
            {componentsList.map(comp => (
              <Route key={comp.name} exact path={'/' + comp.name} render={() => (
                <comp.comp />
              )
              }/>
            ))}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
