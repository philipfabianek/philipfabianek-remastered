// React
import PropTypes from 'prop-types';

const Moto = ({ light = false, children }) => {
  let className = 'moto';

  if (light) {
    className += ' moto--light';
  }

  return (
    <p className={className}>
      {children}
    </p>
  );
};

Moto.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Moto;
