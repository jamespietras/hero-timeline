import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  event: PropTypes.shape({
    date: PropTypes.instanceOf(moment).isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function Marker(props) {
  return (
    <div>
      <FontAwesome name={props.event.icon} />
    </div>
  );
}

Marker.propTypes = propTypes;

export default Marker;
