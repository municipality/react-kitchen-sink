import React, {Component} from 'react';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item1', 'Item2', 'Item3', 'Item4'],
      hover: false,
      selected: -1
    };
  }

  handleEnter() {
    this.setState({
      hover: true
    });
  }

  handleExit() {
    this.setState({
      hover: false
    });
  }
  handleSelect(option) {
    this.setState({
      hover: false,
      selected: option
    });
  }

  render() {
    return (
      <div>
        <div className='title'>Dropdown Menu</div>
        <div className='dropdownmenu-container' onMouseEnter={this.handleEnter.bind(this)} onMouseLeave={this.handleExit.bind(this)}>
          <div className='dropdownmenu-item chosen'>
            {this.state.selected > -1 ? this.state.items[this.state.selected] : 'Select One..'}
          </div>

          <div className='dropdownmenu'
            // Have to dynamically find height of dropdownmenu
             style={this.state.hover ? {maxHeight : this.state.items.length * 30 + 'px'} : {}}>
            {this.state.items.map((obj, index) => (
              <div key={index}
                className={index === this.state.selected ? 'dropdownmenu-item dropdownmenu-item-selected' : 'dropdownmenu-item'}
                onClick={this.handleSelect.bind(this, index)}>
                {obj}
              </div>
            ))}
          </div>
        </div>

      </div>
    )

  }
}

export default DropdownMenu;
