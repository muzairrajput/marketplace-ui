import React from 'react'
import { useState } from 'react'
//import validation from './Validationsignup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLoggedInUser }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [User_Name, set_User_Name] = useState('');
    const [Pass, set_Pass] = useState('');

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://souq-marketplace-api.onrender.com/login', { username: User_Name, password: Pass })
            .then(Response => {
                if (Response.status == 200) {
                    axios.get(`https://souq-marketplace-api.onrender.com/customer?email=${User_Name}`)
                        .then(resp => {
                            var userData = resp.data[0];
                            handleLoggedInUser(userData);
                        })
                        .catch(e => console.log(e));
                    navigate('/');
                } else {
                    console.log("error");
                    setErrorMessage('Invalid username or password. Please try again.');
                }
            })
            .catch(err => console.log(err));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (e.target.elements[5].value != e.target.elements[6].value) {
            return alert('Password and Confirm Password dont match');
        }
        var registerModel = {
            Username: e.target.elements[4].value,
            Password: e.target.elements[5].value,
            Email: e.target.elements[4].value,
            Address: e.target.elements[2].value,
            Phone: e.target.elements[3].value
        };
        axios.post('https://souq-marketplace-api.onrender.com/signup', registerModel)
            .then(Response => {
                if (Response.status == 200) {
                    return alert("User Registered");
                } else {
                    console.log("error");
                    return alert('Error registering user')
                }
            })
            .catch(err => { console.log(err); return alert(err); });
    }


    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="assets/index.html">Home</a></li>
                            <li className="active">Login Register</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Li's Breadcrumb Area End Here --> */}
            {/* <!-- Begin Login Content Area --> */}
            <div className="page-section mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            {/* <!-- Login Form s--> */}
                            <form onSubmit={handleSubmit} >
                                <div className="login-form">
                                    <h4 className="login-title">Login</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12 mb-20">
                                            <label>Username*</label>
                                            <input className="mb-0" type="text" placeholder="User Name" onChange={e => set_User_Name(e.target.value)} />
                                        </div>
                                        <div className="col-12 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" type="password" placeholder="Password" onChange={e => set_Pass(e.target.value)} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me" />
                                                <label for="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <a href="/"> Forgotten pasward?</a>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="register-button mt-0">Customer Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                            <form onSubmit={handleRegister}>
                                <div className="login-form">
                                    <h4 className="login-title"> Customer Account Register</h4>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>First Name</label>
                                            <input className="mb-0" type="text" name="firstName" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Last Name</label>
                                            <input className="mb-0" type="text" name="lastName" placeholder="Last Name" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Address</label>
                                            <input className="mb-0" type="text" name="address" placeholder="Address" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Phone</label>
                                            <input className="mb-0" type="text" name="phone" placeholder="Phone" />
                                        </div>
                                        <div className="col-md-12 mb-20">
                                            <label>Email Address*</label>
                                            <input className="mb-0" type="email" name="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" type="password" name="password" placeholder="Password" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Confirm Password</label>
                                            <input className="mb-0" type="password" name="confirmPassword" placeholder="Confirm Password" />
                                        </div>
                                        <div className="col-12">
                                            <button className="register-button mt-0">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Login Content Area End Here --> */}
            {/* <!-- Begin Footer Area --> */}
            <div className="footer">
                {/* <!-- Begin Footer Static Top Area --> */}
                <div className="footer-static-top">
                    <div className="container">
                        {/* <!-- Begin Footer Shipping Area --> */}
                        <div className="footer-shipping pt-60 pb-55 pb-xs-25">
                            <div className="row">
                                {/* <!-- Begin Li's Shipping Inner Box Area --> */}
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                    <div className="li-shipping-inner-box">
                                        <div className="shipping-icon">
                                            <img src="assets/images/shipping-icon/1.png" alt="Shipping Icon" />
                                        </div>
                                        <div className="shipping-text">
                                            <h2>Free Delivery</h2>
                                            <p>And free returns. See checkout for delivery dates.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Li's Shipping Inner Box Area End Here --> */}
                                {/* <!-- Begin Li's Shipping Inner Box Area --> */}
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                    <div className="li-shipping-inner-box">
                                        <div className="shipping-icon">
                                            <img src="assets/images/shipping-icon/2.png" alt="Shipping Icon" />
                                        </div>
                                        <div className="shipping-text">
                                            <h2>Safe Payment</h2>
                                            <p>Pay with the world's most popular and secure payment methods.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Li's Shipping Inner Box Area End Here --> */}
                                {/* <!-- Begin Li's Shipping Inner Box Area --> */}
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                    <div className="li-shipping-inner-box">
                                        <div className="shipping-icon">
                                            <img src="assets/images/shipping-icon/3.png" alt="Shipping Icon" />
                                        </div>
                                        <div className="shipping-text">
                                            <h2>Shop with Confidence</h2>
                                            <p>Our Buyer Protection covers your purchasefrom click to delivery.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Li's Shipping Inner Box Area End Here --> */}
                                {/* <!-- Begin Li's Shipping Inner Box Area --> */}
                                <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                    <div className="li-shipping-inner-box">
                                        <div className="shipping-icon">
                                            <img src="assets/images/shipping-icon/4.png" alt="Shipping Icon" />
                                        </div>
                                        <div className="shipping-text">
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
                <div className="footer-static-middle">
                    <div className="container">
                        <div className="footer-logo-wrap pt-50 pb-35">
                            <div className="row">
                                {/* <!-- Begin Footer Logo Area --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="footer-logo">
                                        <img src="assets/images/menu/logo/1.jpg" alt="Footer Logo" />
                                        <p className="info">
                                            We are a team of designers and developers that create high quality HTML Template & Woocommerce, Shopify Theme.
                                        </p>
                                    </div>
                                    <ul className="des">
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
                                            <a href="assets/mailto://info@yourdomain.com">info@yourdomain.com</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- Footer Logo Area End Here --> */}
                                {/* <!-- Begin Footer Block Area --> */}
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="footer-block">
                                        <h3 className="footer-block-title">Product</h3>
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
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="footer-block">
                                        <h3 className="footer-block-title">Our company</h3>
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
                                <div className="col-lg-4">
                                    <div className="footer-block">
                                        <h3 className="footer-block-title">Follow Us</h3>
                                        <ul className="social-link">
                                            <li className="twitter">
                                                <a href="assets/https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="rss">
                                                <a href="assets/https://rss.com/" data-toggle="tooltip" target="_blank" title="RSS">
                                                    <i className="fa fa-rss"></i>
                                                </a>
                                            </li>
                                            <li className="google-plus">
                                                <a href="assets/https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li className="facebook">
                                                <a href="assets/https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="youtube">
                                                <a href="assets/https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i className="fa fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="instagram">
                                                <a href="assets/https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- Begin Footer Newsletter Area --> */}
                                    <div className="footer-newsletter">
                                        <h4>Sign up to newsletter</h4>
                                        <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footer-subscribe-form validate" target="_blank" novalidate>
                                            <div id="mc_embed_signup_scroll">
                                                <div id="mc-form" className="mc-form subscribe-form form-group" >
                                                    <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email" />
                                                    <button className="btn" id="mc-submit">Subscribe</button>
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
                <div className="footer-static-bottom pt-55 pb-55">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* <!-- Begin Footer Links Area --> */}
                                <div className="footer-links">
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
                                <div className="copyright text-center">
                                    <a href="/">
                                        <img src="assets/images/payment/1.png" alt="" />
                                    </a>
                                </div>
                                {/* <!-- Footer Payment Area End Here --> */}
                                {/* <!-- Begin Copyright Area --> */}
                                <div className="copyright text-center pt-25">
                                    <span><a target="_blank" href="assets/https://www.templateshub.net">Templates Hub</a></span>
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
    )
}
export default Login;