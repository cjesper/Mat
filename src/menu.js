import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuItem from './menuItem.js'

class Menu extends React.Component {
  state = {menu: []}

  componentDidMount(){
    fetch('/menu')
      .then(res => res.json())
      .then(menu => this.setState({ menu }));
      console.log(this.state);
  }

  render() {
    return (
        <div className="menu">
            <MenuItem meatProp = {this.state.menu.meat} fishProp = {this.state.menu.fish} vegProp = {this.state.menu.veg} soupProp= {this.state.menu.soup}
                salladProp = {this.state.menu.sallad} expressProp = {this.state.menu.express}/>
        </div>
    );
  }
}

Menu.defaultProps = {
    restaurantNameProp : "Default restaurantName"
}

export default Menu;
