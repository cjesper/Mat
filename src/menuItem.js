import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MenuItem extends React.Component {
  render() {
    return (
    <div>
        <p>Meat : {this.props.meatProp}</p>
        <p>Fish: {this.props.fishProp}</p>
        <p>Vegetarian : {this.props.vegProp}</p>
        <p>Soup : {this.props.soupProp}</p>
        <p>Sallad One : {this.props.sallad1Prop}</p>
        <p>Sallad Two : {this.props.sallad2Prop}</p>
        <p>Sallad Thre: {this.props.sallad3Prop}</p>
    </div>
    );
  }
}

MenuItem.defaultProps = {
    meatProp: "Default meat",
    fishProp: "Default fish",
    soupProp: "Default soup",
    vegProp: "Default veg",
    sallad1Prop: "Default sallad1",
    sallad2Prop: "Default sallad2",
    sallad3Prop: "Default sallad3",
}

export default MenuItem;
