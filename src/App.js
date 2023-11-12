import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import Shop from './components/Shop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
