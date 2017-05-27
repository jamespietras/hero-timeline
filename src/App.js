import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';

import data from './data.json';
import Timeline from './components/Timeline';

import './App.css';

function parseEvents(events) {
  return _.map(events, entry => ({
    date: moment(entry[0], 'DD.MM.YYYY'),
    name: entry[1],
    icon: entry[2],
  }));
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: parseEvents(data),
    };
  }

  render() {
    return (
      <div className="app">
        <Timeline events={this.state.events} />
      </div>
    );
  }
}

export default App;
