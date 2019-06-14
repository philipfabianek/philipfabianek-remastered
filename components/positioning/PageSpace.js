// React
import PropTypes from 'prop-types';

// atX prop doesn't mean the total number of spaces atX,
// but the number of spaces added at atX
const PageSpace = ({ base = 1, atSmall = 0, atMedium = 0, atLarge = 0 }) => {
  const spaces = [];
  for (let i = 0; i < base; i++) {
    spaces.push(<div key={`base${i}`} className="page-space" />)
  }

  for (let i = 0; i < atSmall; i++) {
    spaces.push(<div key={`small${i}`} className="page-space page-space--at-small" />)
  }

  for (let i = 0; i < atMedium; i++) {
    spaces.push(<div key={`medium${i}`} className="page-space page-space--at-medium" />)
  }

  for (let i = 0; i < atLarge; i++) {
    spaces.push(<div key={`large${i}`} className="page-space page-space--at-large" />)
  }

  return (
    <div>
      {spaces}
    </div>
  );
};

PageSpace.propTypes = {
  base: PropTypes.number,
  atSmall: PropTypes.number,
  atMedium: PropTypes.number,
  atLarge: PropTypes.number,
};

export default PageSpace;
