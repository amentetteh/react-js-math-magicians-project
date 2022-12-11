import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.PureComponent {
  render() {
    const { answer, next, operator } = this.props;
    return (
      <div id="screen">
        {answer}
        {operator}
        {next}
      </div>
    );
  }
}

Display.defaultProps = {
  answer: null,
  operator: null,
  next: null,
};

Display.propTypes = {
  answer: PropTypes.string,
  operator: PropTypes.string,
  next: PropTypes.string,
};
