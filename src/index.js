import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './greeting.js'
import Menu from './menu.js'
import getDate from './frontend.js'

/* Main page*/
class Index extends React.Component {
  render() {
    return (
        <div>
            <Greeting dateProp = {getDate()}/>
            <Menu restaurantNameProp = "Kårrestaurangen"/>
        </div>
    );
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
