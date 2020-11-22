import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Partner from './Partner';

describe('Partner component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Partner />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('UI renders without problem', () => {
    const tree = renderer
      .create(
        <Partner
          name='Koren Templeton'
          avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1'
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
