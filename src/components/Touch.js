import React from 'react';
import PropTypes from 'prop-types';

export default class Touch extends React.PureComponent {
  render() {
    const { value, className } = this.props;
    return (
      <button className={className} type="button">
        <span>{value}</span>
      </button>
    );
  }
}

Touch.defaultProps = {
  className: 'touch',
};

Touch.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};
