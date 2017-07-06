import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class Slider extends Component {
  constructor(props) {
    super(props);
    //set state to not yet loaded
    this.state = {
      loaded: false
    };
    this.showNext.bind(this);
  }

  showNext() {
    //Increment active counter
    this.setState({
      active: 1+this.state.active%this.state.images.length,
      reverse: false
    });
  }

  componentDidMount() {
    //Fetch images when component is mounted
    let header = new Headers({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'multipart/form-data'
    });

    let options = {
      mode: 'cors',
      header: header
    };
    fetch('http://localhost:8000/api/getphotopanels', options)
      .then(response => response.json())
      .then(json => {
        this.setState({
          loaded: true,
          images: json,
          active: json.length,
          reverse: false,
          intervalFunc: setInterval(this.showNext.bind(this), 5000)
        });

      });
  }

  handleRightArrowClick() {
    //Reset interval so that there is a delay before auto next activates again
    this.resetInterval();
    this.setState({
      active: (1+this.state.active)%this.state.images.length,
      intervalFunc: setInterval(this.showNext.bind(this), 5000),
      reverse: false
    });
  }

  handleLeftArrowClick() {
    //Reset interval so that there is a delay before auto next activates again
    this.resetInterval();
    //Set reverse to do reverse animation
    this.setState({
      active: (this.state.active - 1 + this.state.images.length)%this.state.images.length,
      intervalFunc: setInterval(this.showNext.bind(this), 5000),
      reverse: true
    });
  }

  resetInterval() {
    clearInterval(this.state.intervalFunc);
  }

  componentWillUnmount() {
    //Clear next image interval when component is dismounted
    clearInterval(this.state.intervalFunc);
  }



  render() {
    if(this.state.loaded) {
      var classes = 'slider-image'
      var active = this.state.active;
      var image0, image1, image2, image3, image4;
      var images = this.state.images;
      if(this.state.reverse) {
        classes += ' reverse';
        active++;
      }
      image0 = images[active % images.length];
      image1 = images[(active + images.length + 1) % images.length];
      image2 = images[(active + images.length + 2) % images.length];
      image3 = images[(active + images.length + 3) % images.length];
      image4 = images[(active + images.length + 4) % images.length];
      return (
        <div>
          <div className='title'>Slider</div>

          <div className='slider'>
            <div className='arrow left-arrow' onClick={this.handleLeftArrowClick.bind(this)}></div>
            <div className='arrow right-arrow' onClick={this.handleRightArrowClick.bind(this)}></div>
            {/* <div className='slider-inner'> */}
            {/* retrieve correct image by 'active' counter */}
            {/* 5 pictures seen at once:
                leftoff left center right rightoff
               */}
            {
              <div className={classes + ' leftoff'}
                alt={'slider-image' + image0.id} style={{
                  backgroundImage: 'url(' + image0.src + ')'
                }} key={image0.id}></div>
            }
            {
              <div className={classes + ' left'}
                alt={'slider-image' + image1.id} style={{
                  backgroundImage: 'url(' + image1.src + ')'
                }} key={image1.id}></div>
            }
            {
              <div className={classes + ' center'}
                alt={'slider-image' + image2.id} style={{
                  backgroundImage: 'url(' + image2.src + ')'
                }} key={image2.id}></div>
            }
            {
              <div className={classes + ' right'}
                alt={'slider-image' + image3.id} style={{
                  backgroundImage: 'url(' + image3.src + ')'
                }} key={image3.id}></div>
            }
            {
              <div className={classes + ' rightoff'}
                alt={'slider-image' + image4.id} style={{
                  backgroundImage: 'url(' + image4.src + ')'
                }} key={image4.id}></div>
            }
            {/* </div> */}
          </div>
        </div>
      );
    }

    return (
      <div>
        loading...
      </div>
    );
  }
}

export default Slider;
