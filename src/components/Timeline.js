import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Marker from './Marker';

import './Timeline.css';

const propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(moment).isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // currentDate: moment('10.06.2015', 'DD.MM.YYYY'),
      endDate: moment('30.06.2015', 'DD.MM.YYYY'),
      startDate: moment('01.06.2015', 'DD.MM.YYYY'),
    };

    this.calculateMarkerOffset = this.calculateMarkerOffset.bind(this);
  }

  calculateMarkerOffset(markerDate) {
    const difference = markerDate - this.state.startDate;
    const total = this.state.endDate - this.state.startDate;

    return difference / total;
  }

  render() {
    return (
      <div className="timeline">
        {_.map(this.props.events, (event, index) => (
          <Marker key={index} event={event} offset={this.calculateMarkerOffset(event.date)} />
        ))}
      </div>
    );
  }
}

Timeline.propTypes = propTypes;

export default Timeline;
