import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';

describe('Stage', () => {
  it('renders without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('UI renders without problem', () => {
    const tree = renderer.create(<Stage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
