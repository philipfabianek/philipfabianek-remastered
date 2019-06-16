// React
import PropTypes from 'prop-types';

const Wrapper = ({
  widthPerc = 90,
  maxWidth = 1000,
  fullHeight = false,
  atTop = false,
  light = false,
  children,
}) => {
  let className = 'wrapper', contentClassName = 'wrapper__content';

  if (fullHeight) {
    className += ' wrapper--full-height';
  }

  if (atTop) {
    className += ' wrapper--at-top';
  }

  if (light) {
    className += ' wrapper--light';
  }

  return (
    <div className={className}>
      <div
        className={contentClassName}
        style={{ width: `${widthPerc}%`, maxWidth: `${maxWidth}px` }}
      >
        {children}
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  widthPerc: PropTypes.number,
  maxWidth: PropTypes.number,
  fullHeight: PropTypes.bool,
  atTop: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
