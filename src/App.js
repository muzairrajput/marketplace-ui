import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ShoppingChart from './components/ShoppingChart';
import './App.css';

function App() {
  return (
    <>
    <Navbar></Navbar>
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ShoppingChart" element={<ShoppingChart />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
