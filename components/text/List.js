// React
import PropTypes from 'prop-types';

const List = ({ light = false, children }) => {
  let className = 'list';

  if (light) {
    className += ' list--light';
  }

  return (
    <ul className={className}>
      {children}
    </ul>
  );
};

List.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired
};

export default List;
