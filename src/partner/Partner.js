import React, { Component } from 'react';
import volume from '../images/volume.svg';
import search from '../images/search.svg';
import './Partner.css';

export default class Partner extends Component {
  render() {
    return (
      <div className='partner'>
        <div className='header'>
          <h2>{this.props.name}</h2>
          <div className='icons'>
            <span>
              <img src={volume} alt='mute' />
              <img src={search} alt='search' />
            </span>
          </div>
        </div>
        <div className='avatar'>
          <img src={this.props.avatar} alt='profile' />
        </div>
      </div>
    );
  }
}
