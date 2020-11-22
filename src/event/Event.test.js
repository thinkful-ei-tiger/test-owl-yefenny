import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Event from './Event';

describe('Event Component', () => {
  const event = {
    participantId: 3,
    type: 'message',
    message: 'Hello world',
    time: 1548852646559,
    timestamp: 1548852484247
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Event event={event} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('UI renders without problem', () => {
    const tree = renderer.create(<Event event={event} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
