import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import './App.css';
import NavBar from './components/NavBar';
import AddProduct from './components/Merchants/AddProduct';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/merchant/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
