import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
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

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  
  const addCartItem = (cartItem) => {
    cartItems.push(cartItem);
    setCartItems(cartItems);
    const url = `https://souq-marketplace-api.onrender.com/shoppingcart`;
    cartItem.CustomerID = 1;
    axios.post(url, cartItem)
    .then(response => {
        console.log('Succesfully added to cart');
    })
    .catch(error => {
        console.error('There was an error adding to shopping cart', error);
    });
    console.log(cartItems.length);
  };

  const deleteCartItem = (cartItem) => {
    var item = cartItems.filter(ci => ci.id == cartItem.id);
  };

  return (
    <>
    <Navbar cartItems={cartItems} />
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/shop" element={<Shop cartItems={cartItems} addCartItem={addCartItem} />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout customerId={loggedInUser.User_Id} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
