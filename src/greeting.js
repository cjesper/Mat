import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Greeting extends React.Component {
  render() {
    return (
    <div>
        <h1>Todays ({this.props.dateProp}) lunches are:</h1>
    </div>
    );
  }
}
Greeting.defaultProps = {
    dateProp: "Default date prop."
}

export default Greeting;
