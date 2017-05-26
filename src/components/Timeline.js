import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(moment).isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

function Timeline(props) {
  console.log(props);

  return (
    <div>Hello!</div>
  );
}

Timeline.propTypes = propTypes;

export default Timeline;
