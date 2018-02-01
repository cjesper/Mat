import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuItem from './menuItem.js'

class Menu extends React.Component {
  state = {menu: []}

  componentDidMount(){
    fetch('/menu')
      .then(res => res.json())
      .then(menu => this.setState({ menu }))
      .then(getColor(this.state.menu.meatCO));
      console.log(this.state);
  }

  render() {

      console.log("rendering");
      console.log(getColor(this.state.menu.meatCO));
    return (
        //<div className="menu">
            //<MenuItem meatProp = {this.state.menu.meat} fishProp = {this.state.menu.fish} vegProp = {this.state.menu.veg} soupProp= {this.state.menu.soup}
                //salladProp = {this.state.menu.sallad} expressProp = {this.state.menu.express}/>
        //</div>
        <div className="menu">
          <p style={{color: getColor(this.state.menu.meatCO)}}> {this.state.menu.meat} </p>
          <p style={{color: getColor(this.state.menu.fishCO)}}>{this.state.menu.fish}</p>
          <p style={{color: getColor(this.state.menu.vegCO)}}>{this.state.menu.veg}</p>
          <p style={{color: getColor(this.state.menu.soupCO)}}>{this.state.menu.soup}</p>
          <p style={{color: getColor(this.state.menu.salladCO)}}>{this.state.menu.sallad}</p>
          <p style={{color: getColor(this.state.menu.expressCO)}}>{this.state.menu.express}</p>
        </div>
    );
  }
}


function getColor(co) {
  console.log(co);
  if (co < 0.3) {
    return "green";
  } else if (co > 0.3 && co < 0.6) {
    return "yellow";
  } else if (co > 0.6 && co < 1.0){
    return "orange";
  } else if (co > 1000) {
    return "red";
  } else {
    return "black";
  }
}

Menu.defaultProps = {
    restaurantNameProp : "Default restaurantName"
}

export default Menu;
