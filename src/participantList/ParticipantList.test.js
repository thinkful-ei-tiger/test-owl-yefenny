import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import PARTICIPANTS from '../dummy';
describe('ParticipantList component', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList participants={PARTICIPANTS} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Renders UI without problem ', () => {
    const tree = renderer
      .create(<ParticipantList participants={PARTICIPANTS} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
