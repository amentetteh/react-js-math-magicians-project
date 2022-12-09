import React from 'react';
import Touch from './Touch';
import Display from './Display';

export default class Calculator extends React.Component {
  static renderTouch(i, cl) {
    return <Touch value={i} className={cl} />;
  }

  render() {
    return (
      <div id="calculator">
        <div className="touch-row">
          <Display value="0" />
        </div>
        <div className="touch-row">
          {Calculator.renderTouch('AC')}
          {Calculator.renderTouch('+/-')}
          {Calculator.renderTouch('%')}
          {Calculator.renderTouch('+', 'touch fn-col')}
        </div>
        <div className="touch-row">
          {Calculator.renderTouch('7')}
          {Calculator.renderTouch('8')}
          {Calculator.renderTouch('9')}
          {Calculator.renderTouch('x', 'touch fn-col')}
        </div>
        <div className="touch-row">
          {Calculator.renderTouch('4')}
          {Calculator.renderTouch('5')}
          {Calculator.renderTouch('6')}
          {Calculator.renderTouch('-', 'touch fn-col')}
        </div>
        <div className="touch-row">
          {Calculator.renderTouch('1')}
          {Calculator.renderTouch('2')}
          {Calculator.renderTouch('3')}
          {Calculator.renderTouch('+', 'touch fn-col')}
        </div>
        <div className="touch-row">
          <div className="bottom-line-item">
            {Calculator.renderTouch('0', 'touch zero-touch')}
          </div>
          <div className="bottom-line-item right">
            {Calculator.renderTouch('.')}
            {Calculator.renderTouch('=', 'touch fn-col')}
          </div>
        </div>
      </div>
    );
  }
}
