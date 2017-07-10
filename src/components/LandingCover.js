import {Component}, React from 'react';

class LandingCover extends Component {
  /*
    this.props = {
      align: 'left' or null for title align left or center of component
      title: string
      desc: string

    }
  */
  render() {
    return (
      <div className='landing-cover'>
        <div
          className={this.props.align === 'left' ? 'landing-cover-title-container left-align' : 'landing-cover-title-container'}>
          <div className='landing-cover-title'>
            {this.props.title}
          </div>
          <div className='landing-cover-desc'>
            {this.props.desc}
          </div>
        </div>
      </div>
    )
  }
}

export default LandingCover;
