import React, { Component } from 'react';
import chatEvents from '../chatEvents';
import Event from '../event/Event';
import './Chat.css';

export default class Chat extends Component {
  render() {
    const events = chatEvents
      .sort((a, b) => b.timestamp < a.timestamp)
      .map((event, i) => {
        return <Event key={i} event={event} />;
      });
    return <div>{events}</div>;
  }
}
