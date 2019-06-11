// React
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CONTAINER_DEFAULT_CN = 'reveal__container';
const CONTAINER_TRANSFORMED_CN = 'reveal__container--transformed';
const CONTAINER_SLOW_CN = 'reveal__container--slow';
const CONTAINER_REVEALED_CN = 'reveal__container--revealed';
// making use of this because setting the transform when not needed
// can ruin some of the functionality of the page
const CONTAINER_TRANSFORM_REVEALED_CN = 'reveal__container--transform-revealed';

const Reveal = ({ delay = 1500, type = 'default', children }) => {
  const [containerTransitionCN, setContainerTransitionCN] = useState('');

  useEffect(() => {
    if (containerTransitionCN.indexOf(CONTAINER_REVEALED_CN) === -1) {
      setTimeout(() => {
        let CNToSet = CONTAINER_REVEALED_CN;
        if (type === 'slide') {
          CNToSet += (" " + CONTAINER_TRANSFORM_REVEALED_CN);
        }

        setContainerTransitionCN(CNToSet);
      }, delay);
    }
  });

  let containerClassName = CONTAINER_DEFAULT_CN;

  if (type === 'slide') {
    containerClassName += ` ${CONTAINER_TRANSFORMED_CN}`;
  } else if (type === 'slow') {
    containerClassName += ` ${CONTAINER_SLOW_CN}`;
  }

  containerClassName += ` ${containerTransitionCN}`;

  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
};

Reveal.propTypes = {
  delay: PropTypes.number,
  type: PropTypes.oneOf(['default', 'slide', 'slow']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Reveal;
