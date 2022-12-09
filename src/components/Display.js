import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.PureComponent {
  render() {
    const { answer } = this.props;
    return (
      <div id="screen">
        {answer}
      </div>
    );
  }
}

Display.defaultProps = {
  answer: 0,
};

Display.propTypes = {
  answer: PropTypes.number,
};
