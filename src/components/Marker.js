import cx from 'classnames';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Marker.css';

const propTypes = {
  event: PropTypes.shape({
    date: PropTypes.instanceOf(moment).isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  offset: PropTypes.number.isRequired,
};

class Marker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverVisible: false,
    };

    this.changePopoverVisibility = this.changePopoverVisibility.bind(this);
  }

  changePopoverVisibility(newValue) {
    this.setState({ popoverVisible: newValue });
  }

  render() {
    return (
      <div
        className="marker"
        onMouseEnter={() => this.changePopoverVisibility(true)}
        onMouseLeave={() => this.changePopoverVisibility(false)}
        style={{ left: `${this.props.offset * 100}%` }}
      >
        <FontAwesome className="marker__icon" name={this.props.event.icon} />

        <div
          className={cx({
            marker__popover: true,
            'marker__popover--open': this.state.popoverVisible,
          })}
        >
          <strong className="marker__popover-date">
            {this.props.event.date.format('DD.MM.YYYY')}
          </strong>

          <p className="marker__popover-name">
            {this.props.event.name}
          </p>
        </div>
      </div>
    );
  }
}

Marker.propTypes = propTypes;

export default Marker;
