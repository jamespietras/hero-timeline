import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import Marker from './Marker';

const propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(moment).isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

function Timeline(props) {
  return (
    <div>
      {_.map(props.events, event => (
        <Marker event={event} />
      ))}
    </div>
  );
}

Timeline.propTypes = propTypes;

export default Timeline;
