import React, {Component} from 'react';

export default class Parallax extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mousePos : {
        x: 0,
        y: 0
      }
    }
  }

  mouseMoveListener(e) {

    this.setState({
      mousePos : {
        x: e.pageX,
        y: e.pageY
      }
    })
  }

  render() {
    //Position moving offset should always be bigger than moving
    var posOffset = -100.0;
    var movingOffset = 20.0;
    var backgroundPositionX = movingOffset * this.state.mousePos.x / document.body.offsetWidth + posOffset;
    var backgroundPositionY = movingOffset * this.state.mousePos.y / window.innerHeight + posOffset;
    debugger
    return (
      <div onMouseMove={this.mouseMoveListener.bind(this)}>
        <div className='title'>Parallax
          {/* {this.state.mousePos.x} {this.state.mousePos.y} */}
        </div>
        <div className='parallax-bg1' style={{
          backgroundImage: "url('starry.jpg')",
          backgroundPosition: `${backgroundPositionX}px ${backgroundPositionY}px`
        }}></div>
      </div>
    );
  }
}
