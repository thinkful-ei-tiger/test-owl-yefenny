import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chat from './Chat';

describe('Chat component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('UI renders without problem', () => {
    const tree = renderer.create(<Chat />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
