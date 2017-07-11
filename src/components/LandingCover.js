import React, { Component } from 'react';

var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default class LandingCover extends Component {
  /*
    @this.props = {
      align: 'left' or null for title align left or center of component
      title: string
      desc: string,
      src: image src
    }
  */
  render() {
    return (
      <div className='landing-cover' style={{
        backgroundImage: 'url(' + this.props.src + ')'
      }}>
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

// Combine both alignments
export class LandingCoverContainer extends Component {
  render() {
    return (
      <div>
        <div className='title'>Landing Cover</div>
        <LandingCover title='Left Title' desc={lorem} align='left' src='city.jpg'/>
        <LandingCover title='Right Title' desc={lorem} src='landingcover-right.jpg'/>
      </div>
    )
  }
}
