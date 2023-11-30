import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';
import axios from 'axios';
import MerchantLogin from './components/Merchants/Login';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  
  const handleLoggedInUser = (user) => {
    setLoggedInUser(user);
  }

  const addCartItem = (cartItem) => {
    const cloneCartItems = [...cartItems];
    cloneCartItems.push(cartItem);
    console.log(cartItem);
    setCartItems(cloneCartItems);
    return true;
  };

  const deleteCartItem = (cartItem) => {
    var item = cartItems.filter(ci => ci.id == cartItem.id);
    const cloneCartItems = [...cartItems];
  };

  return (
    <>
    <Router>
      <Navbar loggedInUser={loggedInUser} cartItems={cartItems} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} addCartItem={addCartItem} />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/shop" element={<Shop cartItems={cartItems} addCartItem={addCartItem} />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/login" element={<Login handleLoggedInUser={handleLoggedInUser} />} />
          <Route path="/merchant/login" element={<MerchantLogin handleLoggedInUser={handleLoggedInUser} />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout loggedInUser={loggedInUser} cartItems={cartItems} addCartItem={addCartItem} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
