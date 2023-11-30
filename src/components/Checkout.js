import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = ({loggedInUser, cartItems, addCartItem}) => {
    const navigate = useNavigate();
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [merchantId, setMerchantId] = useState(0);
    useEffect(() => {
        const isEmptyObject = Object.keys(loggedInUser).length === 0;
        if (isEmptyObject) {
            navigate('/login');
        }
        setCheckoutItems(cartItems);
        const cartItemsDup = [...cartItems];
        // GET request using axios inside useEffect React hook
        const url = `https://souq-marketplace-api.onrender.com/shoppingcart`;
        cartItemsDup.forEach((cartItem) => {
            cartItem.CustomerID = loggedInUser.Customer_ID;
            axios.post(url, cartItem)
            .then(response => {
                console.log('Succesfully added to cart');
            })
            .catch(error => {
                console.error('There was an error adding to shopping cart', error);
            });
        });
       
      }, []);
      const calcOrderTotal = () => {
        var total = 0;
        checkoutItems.forEach((ci) => {
            total += parseFloat(ci.Quantity * ci.UnitPrice);
        });
        return total;
      }
      const orderTotal = calcOrderTotal();
      
    return (
        <div>
           
        <div class="body-wrapper">
           
            {/* <!-- Begin Li's Breadcrumb Area --> */}
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li><a href="assets/index.html">Home</a></li>
                            <li class="active">Checkout</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Li's Breadcrumb Area End Here --> */}
            {/* <!--Checkout Area Strat--> */}
            <div class="checkout-area pt-60 pb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="coupon-accordion">
                                {/* <!--Accordion Start--> */}
                                <h3>Returning customer? <span id="showlogin">Click here to login</span></h3>
                                <div id="checkout-login" class="coupon-content">
                                    <div class="coupon-info">
                                        <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                                        <form action="#">
                                            <p class="form-row-first">
                                                <label>Username or email <span class="required">*</span></label>
                                                <input type="text"/>
                                            </p>
                                            <p class="form-row-last">
                                                <label>Password  <span class="required">*</span></label>
                                                <input type="text"/>
                                            </p>
                                            <p class="form-row">
                                                <input value="Login" type="submit"/>
                                                <label>
                                                    <input type="checkbox"/>
                                                     Remember me 
                                                </label>
                                            </p>
                                            <p class="lost-password"><a href="/">Lost your password?</a></p>
                                        </form>
                                    </div>
                                </div>
                                {/* <!--Accordion End--> */}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-12">
                            <div class="your-order">
                                <h3>Your order</h3>
                                <div class="your-order-table table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="cart-product-name">Product</th>
                                                <th class="cart-product-name">Unit Price</th>
                                                <th class="cart-product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {checkoutItems.map((ci) => (
                                                <tr class="cart_item">
                                                    <td class="cart-product-name">Test Product <strong class="product-quantity"> × {ci.Quantity}</strong></td>
                                                    <td class="cart-product-total"><span class="amount">${ci.UnitPrice}</span></td>  
                                                    <td class="cart-product-total"><span class="amount">${ci.UnitPrice * ci.Quantity}</span></td>  
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr class="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span class="amount"></span></strong></td>
                                                <td><strong><span class="amount">${orderTotal}</span></strong></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}>
                                                    <button onClick={() => {
                                                            const queryParams = new URLSearchParams();
                                                            console.log('navigate');
                                                            console.log(cartItems[0])
                                                            queryParams.append('customerId', loggedInUser.CustomerID);
                                                            queryParams.append('merchantId', cartItems[0].Vendor_ID);
                                                            navigate(`/chatroom?${queryParams.toString()}`);
                                                        }}>
                                                        Chat With Merchant
                                                    </button>                                                            
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Checkout Area End--> */}
            {/* <!-- Begin Footer Area --> */}
            <div class="footer">
                {/* <!-- Begin Footer Static Top Area --> */}
                <div class="footer-static-top">
                    <div class="container">
                        {/* <!-- Begin Footer Shipping Area --> */}
                        <div class="footer-shipping pt-60 pb-55 pb-xs-25">
                            <div class="row">
                                {/* <!-- Begin Li's Shipping Inner Box Area --> */}
                                <div class="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                    <div class="li-shipping-inner-box">
                                        <div class="shipping-icon">
                                            <img src="assets/images/shipping-icon/1.png" alt="Shipping Icon"/>
                                        </div>
                                        <div class="shipping-text">
                                            <h2>Free Delivery</h2>
                                            <p>And free returns. See checkout for delivery dates.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Li's Shipping Inner Box Area End Here --> */}
                                {/* <!-- Begin Li's Shipping Inner Box Area --> */}
                                <div class="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                    <div class="li-shipping-inner-box">
                                        <div class="shipping-icon">
                                            <img src="assets/images/shipping-icon/2.png" alt="Shipping Icon"/>
                                        </div>
                                        <div class="shipping-text">
                                            <h2>Safe Payment</h2>
                                            <p>Pay with the world's most popular and secure payment methods.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Li's Shipping Inner Box Area End Here --> */}
                                {/* <!-- Begin Li's Shipping Inner Box Area --> */}
                                <div class="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                    <div class="li-shipping-inner-box">
                                        <div class="shipping-icon">
                                            <img src="assets/images/shipping-icon/3.png" alt="Shipping Icon"/>
                                        </div>
                                        <div class="shipping-text">
                                            <h2>Shop with Confidence</h2>
                                            <p>Our Buyer Protection covers your purchasefrom click to delivery.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Li's Shipping Inner Box Area End Here --> */}
                                {/* <!-- Begin Li's Shipping Inner Box Area --> */}
                                <div class="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                    <div class="li-shipping-inner-box">
                                        <div class="shipping-icon">
                                            <img src="assets/images/shipping-icon/4.png" alt="Shipping Icon"/>
                                        </div>
                                        <div class="shipping-text">
                                            <h2>24/7 Help Center</h2>
                                            <p>Have a question? Call a Specialist or chat online.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Li's Shipping Inner Box Area End Here --> */}
                            </div>
                        </div>
                        {/* <!-- Footer Shipping Area End Here --> */}
                    </div>
                </div>
                {/* <!-- Footer Static Top Area End Here --> */}
                {/* <!-- Begin Footer Static Middle Area --> */}
                <div class="footer-static-middle">
                    <div class="container">
                        <div class="footer-logo-wrap pt-50 pb-35">
                            <div class="row">
                                {/* <!-- Begin Footer Logo Area --> */}
                                <div class="col-lg-4 col-md-6">
                                    <div class="footer-logo">
                                        <img src="assets/images/menu/logo/1.jpg" alt="Footer Logo"/>
                                        <p class="info">
                                            We are a team of designers and developers that create high quality HTML Template & Woocommerce, Shopify Theme.
                                        </p>
                                    </div>
                                    <ul class="des">
                                        <li>
                                            <span>Address: </span>
                                            6688Princess Road, London, Greater London BAS 23JK, UK
                                        </li>
                                        <li>
                                            <span>Phone: </span>
                                            <a href="/">(+123) 123 321 345</a>
                                        </li>
                                        <li>
                                            <span>Email: </span>
                                            <a href="mailto://info@yourdomain.com">info@yourdomain.com</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Footer Logo Area End Here --> */}
                                {/* <!-- Begin Footer Block Area --> */}
                                <div class="col-lg-2 col-md-3 col-sm-6">
                                    <div class="footer-block">
                                        <h3 class="footer-block-title">Product</h3>
                                        <ul>
                                            <li><a href="/">Prices drop</a></li>
                                            <li><a href="/">New products</a></li>
                                            <li><a href="/">Best sales</a></li>
                                            <li><a href="/">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Footer Block Area End Here --> */}
                                {/* <!-- Begin Footer Block Area --> */}
                                <div class="col-lg-2 col-md-3 col-sm-6">
                                    <div class="footer-block">
                                        <h3 class="footer-block-title">Our company</h3>
                                        <ul>
                                            <li><a href="/">Delivery</a></li>
                                            <li><a href="/">Legal Notice</a></li>
                                            <li><a href="/">About us</a></li>
                                            <li><a href="/">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Footer Block Area End Here --> */}
                                {/* <!-- Begin Footer Block Area --> */}
                                <div class="col-lg-4">
                                    <div class="footer-block">
                                        <h3 class="footer-block-title">Follow Us</h3>
                                        <ul class="social-link">
                                            <li class="twitter">
                                                <a href="assets/https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i class="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="rss">
                                                <a href="assets/https://rss.com/" data-toggle="tooltip" target="_blank" title="RSS">
                                                    <i class="fa fa-rss"></i>
                                                </a>
                                            </li>
                                            <li class="google-plus">
                                                <a href="assets/https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                    <i class="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li class="facebook">
                                                <a href="assets/https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="youtube">
                                                <a href="assets/https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i class="fa fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li class="instagram">
                                                <a href="assets/https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                                    <i class="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Begin Footer Newsletter Area --> */}
                                    <div class="footer-newsletter">
                                        <h4>Sign up to newsletter</h4>
                                        <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="footer-subscribe-form validate" target="_blank" novalidate>
                                           <div id="mc_embed_signup_scroll">
                                              <div id="mc-form" class="mc-form subscribe-form form-group" >
                                                <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email" />
                                                <button  class="btn" id="mc-submit">Subscribe</button>
                                              </div>
                                           </div>
                                        </form>
                                    </div>
                                    {/* <!-- Footer Newsletter Area End Here --> */}
                                </div>
                                {/* <!-- Footer Block Area End Here --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer Static Middle Area End Here --> */}
                {/* <!-- Begin Footer Static Bottom Area --> */}
                <div class="footer-static-bottom pt-55 pb-55">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                {/* <!-- Begin Footer Links Area --> */}
                                <div class="footer-links">
                                    <ul>
                                        <li><a href="/">Online Shopping</a></li>
                                        <li><a href="/">Promotions</a></li>
                                        <li><a href="/">My Orders</a></li>
                                        <li><a href="/">Help</a></li>
                                        <li><a href="/">Customer Service</a></li>
                                        <li><a href="/">Support</a></li>
                                        <li><a href="/">Most Populars</a></li>
                                        <li><a href="/">New Arrivals</a></li>
                                        <li><a href="/">Special Products</a></li>
                                        <li><a href="/">Manufacturers</a></li>
                                        <li><a href="/">Our Stores</a></li>
                                        <li><a href="/">Shipping</a></li>
                                        <li><a href="/">Payments</a></li>
                                        <li><a href="/">Warantee</a></li>
                                        <li><a href="/">Refunds</a></li>
                                        <li><a href="/">Checkout</a></li>
                                        <li><a href="/">Discount</a></li>
                                        <li><a href="/">Refunds</a></li>
                                        <li><a href="/">Policy Shipping</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Footer Links Area End Here --> */}
                                {/* <!-- Begin Footer Payment Area --> */}
                                <div class="copyright text-center">
                                    <a href="/">
                                        <img src="assets/images/payment/1.png" alt=""/>
                                    </a>
                                </div>
                                {/* <!-- Footer Payment Area End Here --> */}
                                {/* <!-- Begin Copyright Area --> */}
                                <div class="copyright text-center pt-25">
                                    <span><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                                </div>
                                {/* <!-- Copyright Area End Here --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer Static Bottom Area End Here --> */}
            </div>
            {/* <!-- Footer Area End Here --> */}
        </div>
        </div>
    );
}

export default Checkout;