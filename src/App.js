import './App.css';
import ParticipantList from './participantList/ParticipantList';
import PARTICIPANTS from './dummy';
import Stage from './stage/Stage';

function App() {
  return (
    <div className='App'>
      <ParticipantList participants={PARTICIPANTS} />
      <Stage />
    </div>
  );
}

export default App;
