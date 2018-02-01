import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/* Oklart */
class MenuItem extends React.Component {
  render() {
    return (
    <div>
        <p>{this.props.meatProp}</p>
        <p>{this.props.fishProp}</p>
        <p>{this.props.vegProp}</p>
        <p>{this.props.soupProp}</p>
        <p>{this.props.salladProp}</p>
        <p>{this.props.expressProp}</p>
    </div>
    );
  }
}

MenuItem.defaultProps = {
    meatProp: "Default meat",
    fishProp: "Default fish",
    soupProp: "Default soup",
    vegProp: "Default veg",
    salladProp: "Default sallad1",
    expressProp: "Default express"
}

export default MenuItem;
