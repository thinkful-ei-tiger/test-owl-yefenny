import React from 'react';
import renderer from 'react-test-renderer';
import Participant from './Participant';
import ReactDOM from 'react-dom';

describe('Participant component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Render UI without problem', () => {
    const tree = renderer.create(
      <Participant
        avatar='https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
        name='Koren Templeton'
        inSession={true}
        onStage={true}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
