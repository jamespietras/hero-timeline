import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import './Marker.css';

const propTypes = {
  event: PropTypes.shape({
    date: PropTypes.instanceOf(moment).isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  offset: PropTypes.number.isRequired,
};

function Marker(props) {
  return (
    <div className="marker" style={{ left: `${props.offset * 100}%` }}>
      <FontAwesome className="marker__icon" name={props.event.icon} />
    </div>
  );
}

Marker.propTypes = propTypes;

export default Marker;
