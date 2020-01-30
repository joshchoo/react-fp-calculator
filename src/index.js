import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  render() {
    return <div className="calculator">Calculator App</div>;
  }
}

class Screen extends React.Component {
  render() {
    return <div className="calculator__screen">Screen</div>;
  }
}

class Button extends React.Component {
  render() {
    return <div className="calculator__button">Button</div>;
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
