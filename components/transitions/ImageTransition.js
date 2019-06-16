// React
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ImageTransition = ({ type, reversed = false }) => {
  let className = 'image-transition';

  if (reversed) {
    className += ' image-transition--reversed';
  }

  if (type === 'waves') {
    className += ' image-transition--waves'
  }

  return (
    <div className={className} />
  );
};

ImageTransition.propTypes = {
  type: PropTypes.oneOf(['waves']).isRequired,
  reversed: PropTypes.bool,
};

export default ImageTransition;
