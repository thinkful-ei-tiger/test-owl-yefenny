import React, { Component } from 'react';
import PARTICIPANTS from '../dummy';
import Partner from '../partner/Partner';
import './Stage.css';

export default class Stage extends Component {
  render() {
    const id = 1;
    const participants = PARTICIPANTS.filter(
      (participant) => participant.id !== id
    );
    const personal = PARTICIPANTS.find((participant) => participant.id === id);
    const partners = participants
      .filter((participant) => participant.onStage !== false)
      .map((participant) => {
        return (
          <Partner
            key={participant.id}
            name={participant.name}
            avatar={participant.avatar}
          />
        );
      });
    return (
      <div className='stage'>
        <div className='partners'>{partners}</div>
        <div className='personal-stage'>
          <div className='personal-img'>
            <img src={personal.avatar} alt='personal' />
          </div>
        </div>
      </div>
    );
  }
}
