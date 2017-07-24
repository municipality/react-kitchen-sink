import React, {Component} from 'react';

export default class PhotoButton extends Component {
  /*
    @props {
      src: image src
      text: button text
      style: whatever style
    }
  */
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  clickHandler(text) {
    console.log(`Clicked on ${text}`);
  }

  render() {
    return (
      <div className='photo-button'
        //Set hover listeners
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}
        onClick={this.clickHandler.bind(this, this.props.text)}
        //Object.assign appends properties to target(arg1) from objs(other args)
        style={Object.assign(this.props.style, {
          height: '300px',
          width: '300px',
          margin: '10px'
      })}>
        <div className={this.state.hover ? 'photo-button-image hover' : 'photo-button-image'}
          style={{
            backgroundImage: 'url(' + this.props.src + ')',
            height: '100%',
            width: '100%'
          }
        }>
        </div>
        {
          //Conditional rendering of text
          this.state.hover &&
          <div className='photo-button-text'>
            {this.props.text}
          </div>
        }

      </div>
    )
  }
}

export class PhotoButtonContainer extends Component {
  render() {
    return (
      <div>
        <div className='title'>Photo button</div>
        <div className='photo-button-container' style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '20px'
        }}>
          {[
            {
              src: 'city.jpg',
              text: 'sample1'
            },
            {
              src: 'city.jpg',
              text: 'sample2'
            },
            {
              src: 'city.jpg',
              text: 'sample3'
            }
          ].map((item) => {
            return (
              <PhotoButton key={item.text} src={item.src} text={item.text}
              style={{}}/>
            );
          })}
        </div>
      </div>
    )
  }
}
