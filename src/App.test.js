import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

describe('App component', () => {
  it('renders wihout crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<App />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it('Render UI without problem', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
