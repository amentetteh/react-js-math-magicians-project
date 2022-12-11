import React from 'react';
import Touch from './Touch';
import Display from './Display';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: '0',
      next: null,
      operator: null,
    };
  }

  static renderTouch(props) {
    return (
      <Touch
        onClick={() => props.onClick(props.value)}
        value={props.value}
        className={props.className}
      />
    );
  }

  // clear
  clear = () => {
    this.setState({
      result: '0',
      next: null,
      operator: null,
    });
  };

  clickHandler = (e) => {
    this.setState((state) => calculate(state, e));
  };

  render() {
    const { result, next, operator } = this.state;
    return (
      <div id="calculator">
        <div className="touch-row">
          <Display answer={result} next={next} operator={operator} />
        </div>
        <div className="touch-row">
          {Calculator.renderTouch({ onClick: this.clear, value: 'AC' })}
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '+/-' })}
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '%' })}
          {Calculator.renderTouch({
            onClick: this.clickHandler,
            value: '÷',
            className: 'touch fn-col',
          })}
        </div>
        <div className="touch-row">
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '7' })}
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '8' })}
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '9' })}
          {Calculator.renderTouch({
            onClick: this.clickHandler,
            value: 'x',
            className: 'touch fn-col',
          })}
        </div>
        <div className="touch-row">
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '4' })}
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '5' })}
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '6' })}
          {Calculator.renderTouch({
            onClick: this.clickHandler,
            value: '-',
            className: 'touch fn-col',
          })}
        </div>
        <div className="touch-row">
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '1' })}
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '2' })}
          {Calculator.renderTouch({ onClick: this.clickHandler, value: '3' })}
          {Calculator.renderTouch({
            onClick: this.clickHandler,
            value: '+',
            className: 'touch fn-col',
          })}
        </div>
        <div className="touch-row">
          <div className="bottom-line-item">
            {Calculator.renderTouch({
              onClick: this.clickHandler,
              value: '0',
              className: 'touch zero-touch',
            })}
          </div>
          <div className="bottom-line-item right">
            {Calculator.renderTouch({ onClick: this.clickHandler, value: '.' })}
            {Calculator.renderTouch({
              onClick: this.clickHandler,
              value: '=',
              className: 'touch fn-col',
            })}
          </div>
        </div>
      </div>
    );
  }
}
