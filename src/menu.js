import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuItem from './menuItem.js'

class Menu extends React.Component {
  render() {
    return (
    <div>
        <h2>{this.props.restaurantNameProp}</h2>
        <MenuItem meatProp = "Aff" fishProp = "fishy" vegProp = "vegz" soupProp="soupz"
                sallad1Prop = "salladOne" sallad2Prop = "salladTwo" sallad3Prop = "salladThree"/>
    </div>
    );
  }
}

Menu.defaultProps = {
    restaurantNameProp : "Default restaurantName"
}

export default Menu;
