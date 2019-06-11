// React
import PropTypes from 'prop-types';

const Paragraph = ({ light = false, center = false, children }) => {
  let className = 'paragraph';

  if (center) {
    className += ' paragraph--center';
  }

  if (light) {
    className += ' paragraph--light';
  }

  return (
    <p className={className}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  light: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Paragraph;
