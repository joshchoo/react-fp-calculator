import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      expression: '',
    };
  }

  render() {
    return (
      <div className="calculator">
        <Screen
          className="calculator__screen--type-expression expression"
          value={this.state.expression}
        />
        <Screen
          className="calculator__screen--type-display display"
          value={this.state.display}
        />
        <Button className="calculator__button--type-ac ac" value="AC" />
        <Button
          className="calculator__button--type-operator divide"
          value="/"
        />
        <Button
          className="calculator__button--type-operator multiply"
          value="X"
        />
        <Button
          className="calculator__button--type-operator subtract"
          value="-"
        />
        <Button className="calculator__button--type-operator add" value="+" />
        <Button className="calculator__button--type-equal equal" value="=" />
        <Button className="calculator__button--type-number zero" value="0" />
        <Button className="calculator__button--type-number one" value="1" />
        <Button className="calculator__button--type-number two" value="2" />
        <Button className="calculator__button--type-number three" value="3" />
        <Button className="calculator__button--type-number four" value="4" />
        <Button className="calculator__button--type-number five" value="5" />
        <Button className="calculator__button--type-number six" value="6" />
        <Button className="calculator__button--type-number seven" value="7" />
        <Button className="calculator__button--type-number eight" value="8" />
        <Button className="calculator__button--type-number nine" value="9" />
        <Button className="calculator__button--type-number decimal" value="." />
      </div>
    );
  }
}

class Screen extends React.Component {
  render() {
    const className = this.props.className;
    const value = this.props.value;

    return <div className={`calculator__screen ${className}`}>{value}</div>;
  }
}

Screen.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

Screen.defaultProps = {
  className: '',
  value: '',
};

class Button extends React.Component {
  render() {
    const className = this.props.className;
    const value = this.props.value;

    return <div className={`calculator__button ${className}`}>{value}</div>;
  }
}

Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  value: '',
};

ReactDOM.render(<Calculator />, document.getElementById('root'));
