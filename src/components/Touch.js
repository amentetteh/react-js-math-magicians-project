import React from 'react';
import PropTypes from 'prop-types';

export default class Touch extends React.PureComponent {
  render() {
    const { onClick, value, className } = this.props;
    return (
      <button onClick={onClick} className={className} type="button">
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
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
