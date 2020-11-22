import React, { Component } from 'react';
import PARTICIPANTS from '../dummy';
import { format } from 'date-fns';
import './Event.css';

export default class Event extends Component {
  getParticipant(id) {
    const participant = PARTICIPANTS.find(
      (participant) => participant.id === id
    );
    return participant;
  }
  handleType(event) {
    const participant = this.getParticipant(event.participantId);

    switch (event.type) {
      case 'message':
        return (
          <div className='message-type'>
            <div className='message-avatar'>
              <img src={participant.avatar} alt='profile' />
            </div>
            <div className='message-information'>
              <div className='message-header'>
                <h2>{participant.name}</h2>
                <span>{format(new Date(event.time), 'KK:m aaaa')}</span>
              </div>
              <div className='message'>
                <p>{event.message}</p>
              </div>
            </div>
          </div>
        );
        break;

      case 'thumbs-up':
        return (
          <div>
            <span>
              <strong>{participant.name}</strong> gave a thumbs up 👍
            </span>
          </div>
        );
        break;
      case 'thumbs-down':
        return (
          <div>
            <span>
              <strong>{participant.name}</strong> gave a thumbs down 👎
            </span>
          </div>
        );
        break;
      case 'raise-hand':
        return (
          <div>
            <span>
              <strong>{participant.name}</strong> raise their hand ✋
            </span>
          </div>
        );
        break;
      case 'clap':
        return (
          <div>
            <span>
              <strong>{participant.name}</strong> clapped 👏
            </span>
          </div>
        );
        break;
      case 'join':
        return (
          <div>
            <span>
              <strong>{participant.name}</strong> joined
            </span>
          </div>
        );
        break;
      case 'leave':
        return (
          <div>
            <span>
              <strong>{participant.name}</strong> left
            </span>
          </div>
        );
        break;
      case 'join-stage':
        return (
          <div>
            <span>
              <strong>{participant.name}</strong> joined the stage
            </span>
          </div>
        );
        break;
      case 'leave-stage':
        return (
          <div>
            <span>
              <strong>{participant.name}</strong> left the stage
            </span>
          </div>
        );
        break;
    }
  }
  render() {
    const { event } = this.props;
    const content = this.handleType(event);
    return <div className='event'>{content}</div>;
  }
}
