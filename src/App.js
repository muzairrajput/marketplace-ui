import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
