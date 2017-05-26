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
      currentDate: moment('10.06.2015', 'DD.MM.YYYY'),
      endDate: moment('30.06.2015', 'DD.MM.YYYY'),
      startDate: moment('01.06.2015', 'DD.MM.YYYY'),
    };

    this.calculateDateOffset = this.calculateDateOffset.bind(this);
    this.checkIfPastCurrentDate = this.checkIfPastCurrentDate.bind(this);
  }

  calculateDateOffset(markerDate) {
    const difference = markerDate - this.state.startDate;
    const total = this.state.endDate - this.state.startDate;

    return difference / total;
  }

  checkIfPastCurrentDate(markerDate) {
    return markerDate <= this.state.currentDate;
  }

  render() {
    return (
      <div className="timeline">
        <div
          className="timeline__fill"
          style={{
            width: `${this.calculateDateOffset(this.state.currentDate) * 100}%`
          }}
        />

        {_.map(this.props.events, (event, index) => (
          <Marker
            key={index}
            event={event}
            isActive={this.checkIfPastCurrentDate(event.date)}
            offset={this.calculateDateOffset(event.date)}
          />
        ))}
      </div>
    );
  }
}

Timeline.propTypes = propTypes;

export default Timeline;
