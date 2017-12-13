import React from 'react';
import ReactDOM from 'react-dom';
import { Button} from 'reactstrap'
import './index.css';

class Menu extends React.Component {
  render() {
    return (
      <Button
        bsStyle="primary"> 
        { "Hello!"/* TODO */}
      </Button>
    );
  }
}

ReactDOM.render(
  <Menu/>,
  document.getElementById('root')
);
