import React, { useState } from 'react';
import Touch from './Touch';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [values, setValues] = useState({
    result: '0',
    next: null,
    operator: null,
  });

  const renderTouch = (obj) => (
    <Touch
      onClick={() => obj.onClick(obj.value)}
      value={obj.value}
      className={obj.className}
    />
  );

  // clear
  const clear = () => {
    setValues({
      result: '0',
      next: null,
      operator: null,
    });
  };

  const clickHandler = (e) => {
    setValues((state) => calculate(state, e));
  };

  const { result, next, operator } = values;
  return (
    <div id="calculator">
      <div className="touch-row">
        <Display answer={result} next={next} operator={operator} />
      </div>
      <div className="touch-row">
        {renderTouch({ onClick: clear, value: 'AC' })}
        {renderTouch({ onClick: clickHandler, value: '+/-' })}
        {renderTouch({ onClick: clickHandler, value: '%' })}
        {renderTouch({
          onClick: clickHandler,
          value: '÷',
          className: 'touch fn-col',
        })}
      </div>
      <div className="touch-row">
        {renderTouch({ onClick: clickHandler, value: '7' })}
        {renderTouch({ onClick: clickHandler, value: '8' })}
        {renderTouch({ onClick: clickHandler, value: '9' })}
        {renderTouch({
          onClick: clickHandler,
          value: 'x',
          className: 'touch fn-col',
        })}
      </div>
      <div className="touch-row">
        {renderTouch({ onClick: clickHandler, value: '4' })}
        {renderTouch({ onClick: clickHandler, value: '5' })}
        {renderTouch({ onClick: clickHandler, value: '6' })}
        {renderTouch({
          onClick: clickHandler,
          value: '-',
          className: 'touch fn-col',
        })}
      </div>
      <div className="touch-row">
        {renderTouch({ onClick: clickHandler, value: '1' })}
        {renderTouch({ onClick: clickHandler, value: '2' })}
        {renderTouch({ onClick: clickHandler, value: '3' })}
        {renderTouch({
          onClick: clickHandler,
          value: '+',
          className: 'touch fn-col',
        })}
      </div>
      <div className="touch-row">
        <div className="bottom-line-item">
          {renderTouch({
            onClick: clickHandler,
            value: '0',
            className: 'touch zero-touch',
          })}
        </div>
        <div className="bottom-line-item right">
          {renderTouch({ onClick: clickHandler, value: '.' })}
          {renderTouch({
            onClick: clickHandler,
            value: '=',
            className: 'touch fn-col',
          })}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
