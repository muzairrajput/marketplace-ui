import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import MerchantLogin from './components/MerchantLogin';
import OrderDetails from './components/OrderDetail';
import MerchantHome from './components/MerchantHome';
import MerchantNavbar from './components/MerchantNavbar';
import MerchantChatRoom from './components/MerchantChatRoom';
import MerchantOrders from './components/MerchantOrders';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import EditProductList from './components/EditProductList';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  const handleLoggedInUser = (user) => {
    setLoggedInUser(user);
  }

  const addCartItem = (cartItem) => {
    const cloneCartItems = [...cartItems];
    let itemExist = false;
    cloneCartItems.forEach((item) => {
      if (item.ProductID == cartItem.ProductID){
        item.Quantity +=1;
        itemExist = true;
      }
    });
    if(!itemExist) cloneCartItems.push(cartItem);
    setCartItems(cloneCartItems);
    return true;
  };

  const deleteCart = () => {
    setCartItems([]);
  };

  const isMerchantHome = window.location.pathname === '/MerchantHome';


  return (
    <>
      <Router>
      {isMerchantHome ? (
          <MerchantNavbar loggedInUser={loggedInUser} cartItems={cartItems} />
        ) : (
          <Navbar loggedInUser={loggedInUser} cartItems={cartItems} />
        )}
        <div className="App">
          <Routes>
            <Route path="/" element={<Home cartItems={cartItems} addCartItem={addCartItem} />} />
            <Route path="/chatroom" element={<ChatRoom deleteCart={deleteCart} />} />
            <Route path="/shop" element={<Shop cartItems={cartItems} addCartItem={addCartItem} />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="/login" element={<Login handleLoggedInUser={handleLoggedInUser} />} />
            <Route path="/merchantlogin" element={<MerchantLogin handleLoggedInUser={handleLoggedInUser} />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout loggedInUser={loggedInUser} cartItems={cartItems} addCartItem={addCartItem} />} />
            <Route path="/orderDetails" element={<OrderDetails />} />
            <Route path="/MerchantHome" element={<MerchantHome loggedInUser={loggedInUser}/>} />
            <Route path="MerchantNavbar" element={<MerchantNavbar loggedInUser={loggedInUser}/>} />
            <Route path="/merchantChatroom" element={<MerchantChatRoom />} />
            <Route path="/merchantOrders" element={<MerchantOrders />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/editproduct" element={<EditProduct />} />
            <Route path="/editproductlist" element={<EditProductList loggedInUser={loggedInUser}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
