import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


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
        <MuiThemeProvider>
        <div className="menu">
          <h2> Kårrestaurangen </h2>
          <p>CLASSIC KÖTT: <span style={{color: getColor(this.state.menu.meatCO)}}> {this.state.menu.meat} </span> </p>
          <p>CLASSIC FISK: <span style={{color: getColor(this.state.menu.fishCO)}}> {this.state.menu.fish} </span> </p>
          <p>CLASSIC VEG: <span style={{color: getColor(this.state.menu.vegCO)}}> {this.state.menu.veg} </span> </p>
          <p>VECKANS SOPPA: <span style={{color: getColor(this.state.menu.soupCO)}}> {this.state.menu.soup} </span> </p>
          <p>EXPRESS: <span style={{color: getColor(this.state.menu.expressCO)}}> {this.state.menu.express} </span> </p>
        </div>
        </MuiThemeProvider>
    );
  }
}


function getColor(co) {
  console.log(co);
  if (co <= 0.3) {
    return "green";
  } else if (co > 0.3 && co <= 0.6) {
    return "#ffcc00";
  } else if (co > 0.6 && co <= 1.0){
    return "orange";
  } else if (co > 1) {
    return "red";
  } else {
    return "black";
  }
}

Menu.defaultProps = {
    restaurantNameProp : "Default restaurantName"
}

export default Menu;
