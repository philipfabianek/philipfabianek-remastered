// React
import PropTypes from 'prop-types';

const Paragraph = ({
  light = false,
  center = false,
  inline = false,
  text = false,
  children
}) => {
  let className = 'paragraph';

  if (center) {
    className += ' paragraph--center';
  }

  if (inline) {
    className += ' paragraph--inline';
  }

  if (light) {
    className += ' paragraph--light';
  }

  if (text) {
    className += ' paragraph--text';
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
  text: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Paragraph;
