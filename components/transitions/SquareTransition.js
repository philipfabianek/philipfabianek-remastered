// React
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SquareTransition = ({ reversed = false }) => {
  let className = 'square-transition';

  if (reversed) {
    className += ' square-transition--reversed';
  }

  return (
    <div className={className} />
  );
};

SquareTransition.propTypes = {
  reversed: PropTypes.bool,
};

export default SquareTransition;
