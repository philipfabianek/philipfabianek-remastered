// React
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';

const CONTAINER_DEFAULT_CN = 'reveal__container';
const CONTAINER_TRANSFORMED_CN = 'reveal__container--transformed';
const CONTAINER_SLOW_CN = 'reveal__container--slow';
const CONTAINER_REVEALED_CN = 'reveal__container--revealed';
// making use of this because setting the transform when not needed
// can ruin some of the functionality of the page
const CONTAINER_TRANSFORM_REVEALED_CN = 'reveal__container--transform-revealed';

const RevealOnScroll = ({ offset = 0, type = 'default', children }) => {
  const [containerTransitionCN, setContainerTransitionCN] = useState('');

  const onEnter = () => {
    if (containerTransitionCN.indexOf(CONTAINER_REVEALED_CN) === -1) {
      let CNToSet = CONTAINER_REVEALED_CN;
      if (type === 'slide') {
        CNToSet += (" " + CONTAINER_TRANSFORM_REVEALED_CN);
      }

      setContainerTransitionCN(CNToSet);
    }
  };

  let containerClassName = CONTAINER_DEFAULT_CN;

  if (type === 'slide') {
    containerClassName += ` ${CONTAINER_TRANSFORMED_CN}`;
  } else if (type === 'slow') {
    containerClassName += ` ${CONTAINER_SLOW_CN}`;
  }

  containerClassName += ` ${containerTransitionCN}`;

  return (
    <Waypoint
      onEnter={onEnter}
      bottomOffset={offset}
    >
      <div className={containerClassName}>
        {children}
      </div>
    </Waypoint>
  );
};

RevealOnScroll.propTypes = {
  type: PropTypes.oneOf(['default', 'slide', 'slow']),
  offset: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RevealOnScroll;
