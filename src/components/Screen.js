import React from 'react';
import PropTypes from 'prop-types';

export default class Screen extends React.PureComponent {
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

Screen.defaultProps = {
  answer: null,
  operator: null,
  next: null,
};

Screen.propTypes = {
  answer: PropTypes.string,
  operator: PropTypes.string,
  next: PropTypes.string,
};
