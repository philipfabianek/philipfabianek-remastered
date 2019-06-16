// React
import PropTypes from 'prop-types';

const ImageTransition = ({ type, reversed = false, moving = false }) => {
  let className = 'image-transition';

  if (type === 'waves') {
    className += ' image-transition--waves'
  }

  if (reversed) {
    if (!moving) {
      className += ' image-transition--reversed';
    } else {
      className += ' image-transition--reversed--moving';
    }
  }

  if (moving) {
    className += ' image-transition--moving';
  }

  return (
    <div className={className} />
  );
};

ImageTransition.propTypes = {
  type: PropTypes.oneOf(['waves']).isRequired,
  reversed: PropTypes.bool,
  moving: PropTypes.bool,
};

export default ImageTransition;
