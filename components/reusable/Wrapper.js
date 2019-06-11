// React
import PropTypes from 'prop-types';

const Wrapper = ({ widthPerc = 90, maxWidth = 1000, fullHeight = false, children }) => {
  let className = 'wrapper';

  if (fullHeight) {
    className += ' wrapper--full-height';
  }

  return (
    <div
      className={className}
      style={{ width: `${widthPerc}%`, maxWidth: `${maxWidth}px` }}
    >
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  widthPerc: PropTypes.number,
  maxWidth: PropTypes.number,
  fullHeight: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
