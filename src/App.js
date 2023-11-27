import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import ShoppingChart from './components/ShoppingChart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import './App.css';
import AddProduct from './components/Merchants/AddProduct';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ShoppingChart" element={<ShoppingChart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
