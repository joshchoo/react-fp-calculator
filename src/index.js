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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target.id);
  }

  render() {
    return (
      <div className="calculator">
        <Screen
          className="calculator__screen--type-expression expression"
          value={this.state.expression}
          id="expression"
          onClick={this.handleClick}
        />
        <Screen
          className="calculator__screen--type-display display"
          value={this.state.display}
          id="display"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-ac ac"
          value="AC"
          id="clear"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-operator divide"
          value="/"
          id="divide"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-operator multiply"
          value="X"
          id="multiply"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-operator subtract"
          value="-"
          id="subtract"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-operator add"
          value="+"
          id="add"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-equal equal"
          value="="
          id="equals"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number zero"
          value="0"
          id="zero"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number one"
          value="1"
          id="one"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number two"
          value="2"
          id="two"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number three"
          value="3"
          id="three"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number four"
          value="4"
          id="four"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number five"
          value="5"
          id="five"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number six"
          value="6"
          id="six"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number seven"
          value="7"
          id="seven"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number eight"
          value="8"
          id="eight"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number nine"
          value="9"
          id="nine"
          onClick={this.handleClick}
        />
        <Button
          className="calculator__button--type-number decimal"
          value="."
          id="decimal"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

class Screen extends React.Component {
  render() {
    const className = this.props.className;
    const id = this.props.id;
    const value = this.props.value;

    return (
      <div id={id} className={`calculator__screen ${className}`}>
        {value}
      </div>
    );
  }
}

Screen.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
};

Screen.defaultProps = {
  className: '',
  id: '',
  value: '',
};

class Button extends React.Component {
  render() {
    const className = this.props.className;
    const id = this.props.id;
    const value = this.props.value;

    return (
      <button
        id={id}
        className={`calculator__button ${className}`}
        onClick={this.props.onClick}
        value={value}
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  id: '',
  value: '',
};

ReactDOM.render(<Calculator />, document.getElementById('root'));
