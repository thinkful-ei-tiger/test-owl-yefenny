import './App.css';
import ParticipantList from './participantList/ParticipantList';
import PARTICIPANTS from './dummy';

function App() {
  return (
    <div className='App'>
      <ParticipantList participants={PARTICIPANTS} />
    </div>
  );
}

export default App;
