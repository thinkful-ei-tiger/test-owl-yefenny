import React, { Component } from 'react';
import './Participant.css';

export default class Participant extends Component {
  render() {
    return (
      <div className='participant'>
        <div className='participant-img'>
          <img src={this.props.avatar} alt='avatar' />
        </div>
        <div className='participant-details'>
          <h2>{this.props.name}</h2>
          <div className='participant-status'>
            <span
              className={`circle ${
                this.props.inSession ? 'bg-green' : 'bg-grey'
              }`}
            ></span>
            <span className='status'>
              {this.props.inSession
                ? this.props.onStage
                  ? 'on stage'
                  : 'in session'
                : 'left session'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
