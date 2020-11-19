import React, { Component } from 'react';
import './ParticipantList.css';
import Participant from '../participant/Participant';

export default class ParticipantList extends Component {
  render() {
    const participants = this.props.participants
      .sort((a, b) => b.inSession - a.inSession)
      .map((participant) => {
        return (
          <li key={participant.id}>
            <Participant
              avatar={participant.avatar}
              name={participant.name}
              inSession={participant.inSession}
              onStage={participant.onStage}
            />
          </li>
        );
      });
    return (
      <div className='participant-list'>
        <ul>{participants}</ul>
      </div>
    );
  }
}
