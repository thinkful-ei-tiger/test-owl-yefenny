import './App.css';
import ParticipantList from './participantList/ParticipantList';
import PARTICIPANTS from './dummy';
import Stage from './stage/Stage';
import Chat from './chat/Chat';

function App() {
  return (
    <div className='App'>
      <ParticipantList participants={PARTICIPANTS} />
      <Stage />
      <Chat />
    </div>
  );
}

export default App;
