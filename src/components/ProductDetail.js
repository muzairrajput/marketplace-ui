import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        const productId = queryParams.get('productId');
        const [productDetails, setProductDetails] = useState({});
        useEffect(() => {
            axios.get(`https://souq-marketplace-api.onrender.com/product/${productId}`)
            .then(response => {
                if (response.data.length > 0) {
                    setProductDetails(response.data[0]);
                }
            })
            .catch(err => console.error(err));
          }, []);

        return (
        <div>
        <div className="body-wrapper">
            {/* Navbar */}
        
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li onClick={() => navigate('\\MerchantHome')}>Home</li>
                            <li className="active">Product Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Li's Breadcrumb Area End Here --> */}
            {/* <!-- content-wraper start --> */}
            <div className="content-wraper">
                <div className="container">
                    {
                        productDetails != undefined && (
                            <div className="row single-product-area">
                                <div className="col-lg-5 col-md-6">
                                {/* <!-- Product Details Left --> */}
                                    <div className="product-details-left">
                                        <div className="product-details-images slider-navigation-1">
                                            <div className="lg-image">
                                                <a className="popup-img venobox vbox-item" href="assets/images/product/large-size/1.jpg" data-gall="myGallery">
                                                    <img style={{width:'350px', height: '330px'}} src={productDetails.Image} alt="product image"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--// Product Details Left --> */}
                                </div>

                                <div className="col-lg-7 col-md-6">
                                    <div className="product-details-view-content pt-60">
                                        <div className="product-info">
                                            <h2>{productDetails.Name}</h2>
                                            <div className="price-box pt-20">
                                                <span className="new-price new-price-2">${productDetails.Price}</span>
                                            </div>
                                            <div className="product-desc">
                                                <p>
                                                    <span>
                                                        {productDetails.Description}
                                                    </span>
                                                </p>
                                            </div>
                                            {/* <div className="single-add-to-cart">
                                                <form action="#" className="cart-quantity">
                                                    <div className="quantity">
                                                        <label>Quantity</label>
                                                        <div className="cart-plus-minus">
                                                            <input className="cart-plus-minus-box" value="1" type="text"/>
                                                            <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                            <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                        </div>
                                                    </div>
                                                    <button className="add-to-cart" type="submit">Add to cart</button>
                                                </form>
                                            </div> */}
                                            <div className="block-reassurance">
                                                <ul>
                                                    <li>
                                                        <div className="reassurance-item">
                                                            <div className="reassurance-icon">
                                                                <i className="fa fa-check-square-o"></i>
                                                            </div>
                                                            <p>Security policy (edit with Customer reassurance module)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="reassurance-item">
                                                            <div className="reassurance-icon">
                                                                <i className="fa fa-truck"></i>
                                                            </div>
                                                            <p>Delivery policy (edit with Customer reassurance module)</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="reassurance-item">
                                                            <div className="reassurance-icon">
                                                                <i className="fa fa-exchange"></i>
                                                            </div>
                                                            <p> Return policy (edit with Customer reassurance module)</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        )
                    }
                </div>
            </div>
            {/* <!-- content-wraper end --> */}
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
                                            <img src="assets/images/shipping-icon/1.png" alt="Shipping Icon"/>
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
                                            <img src="assets/images/shipping-icon/2.png" alt="Shipping Icon"/>
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
                                            <img src="assets/images/shipping-icon/3.png" alt="Shipping Icon"/>
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
                                            <img src="assets/images/shipping-icon/4.png" alt="Shipping Icon"/>
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
                                        <img src="assets/images/menu/logo/1.jpg" alt="Footer Logo"/>
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
                                            <a href="assets/#">(+123) 123 321 345</a>
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
                                            <li><a href="assets/#">Prices drop</a></li>
                                            <li><a href="assets/#">New products</a></li>
                                            <li><a href="assets/#">Best sales</a></li>
                                            <li><a href="assets/#">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Footer Block Area End Here --> */}
                                {/* <!-- Begin Footer Block Area --> */}
                                <div className="col-lg-2 col-md-3 col-sm-6">
                                    <div className="footer-block">
                                        <h3 className="footer-block-title">Our company</h3>
                                        <ul>
                                            <li><a href="assets/#">Delivery</a></li>
                                            <li><a href="assets/#">Legal Notice</a></li>
                                            <li><a href="assets/#">About us</a></li>
                                            <li><a href="assets/#">Contact us</a></li>
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
                                                <a href="assets/https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google +">
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
                                                <button  className="btn" id="mc-submit">Subscribe</button>
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
                                        <li><a href="assets/#">Online Shopping</a></li>
                                        <li><a href="assets/#">Promotions</a></li>
                                        <li><a href="assets/#">My Orders</a></li>
                                        <li><a href="assets/#">Help</a></li>
                                        <li><a href="assets/#">Customer Service</a></li>
                                        <li><a href="assets/#">Support</a></li>
                                        <li><a href="assets/#">Most Populars</a></li>
                                        <li><a href="assets/#">New Arrivals</a></li>
                                        <li><a href="assets/#">Special Products</a></li>
                                        <li><a href="assets/#">Manufacturers</a></li>
                                        <li><a href="assets/#">Our Stores</a></li>
                                        <li><a href="assets/#">Shipping</a></li>
                                        <li><a href="assets/#">Payments</a></li>
                                        <li><a href="assets/#">Warantee</a></li>
                                        <li><a href="assets/#">Refunds</a></li>
                                        <li><a href="assets/#">Checkout</a></li>
                                        <li><a href="assets/#">Discount</a></li>
                                        <li><a href="assets/#">Refunds</a></li>
                                        <li><a href="assets/#">Policy Shipping</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Footer Links Area End Here --> */}
                                {/* <!-- Begin Footer Payment Area --> */}
                                <div className="copyright text-center">
                                    <a href="assets/#">
                                        <img src="assets/images/payment/1.png" alt=""/>
                                    </a>
                                </div>
                                {/* <!-- Footer Payment Area End Here --> */}
                                {/* <!-- Begin Copyright Area --> */}
                                <div className="copyright text-center pt-25">
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
            {/* <!-- Begin Quick View | Modal Area --> */}
            <div className="modal fade modal-wrapper" id="exampleModalCenter" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="modal-inner-area row">
                                <div className="col-lg-5 col-md-6 col-sm-6">
                                   {/* <!-- Product Details Left --> */}
                                    <div className="product-details-left">
                                        <div className="product-details-images slider-navigation-1">
                                            <div className="lg-image">
                                                <img src="assets/images/product/large-size/1.jpg" alt="product image"/>
                                            </div>
                                        </div>
                                        <div className="product-details-thumbs slider-thumbs-1">
                                            <div className="sm-image"><img src="assets/images/product/small-size/1.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="assets/images/product/small-size/2.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="assets/images/product/small-size/3.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="assets/images/product/small-size/4.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="assets/images/product/small-size/5.jpg" alt="product image thumb"/></div>
                                            <div className="sm-image"><img src="assets/images/product/small-size/6.jpg" alt="product image thumb"/></div>
                                        </div>
                                    </div>
                                    {/* <!--// Product Details Left --> */}
                                </div>

                                <div className="col-lg-7 col-md-6 col-sm-6">
                                    <div className="product-details-view-content pt-60">
                                        <div className="product-info">
                                            <h2>Today is a good day Framed poster</h2>
                                            
                                            <div className="price-box pt-20">
                                                <span className="new-price new-price-2">$57.98</span>
                                            </div>
                                            <div className="product-desc">
                                                <p>
                                                    <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="product-variants">
                                                <div className="produt-variants-size">
                                                    <label>Dimension</label>
                                                    <select className="nice-select">
                                                        <option value="1" title="S" selected="selected">40x60cm</option>
                                                        <option value="2" title="M">60x90cm</option>
                                                        <option value="3" title="L">80x120cm</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="single-add-to-cart">
                                                <form action="#" className="cart-quantity">
                                                    <div className="quantity">
                                                        <label>Quantity</label>
                                                        <div className="cart-plus-minus">
                                                            <input className="cart-plus-minus-box" value="1" type="text"/>
                                                            <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                            <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                        </div>
                                                    </div>
                                                    <button className="add-to-cart" type="submit">Add to cart</button>
                                                </form>
                                            </div>
                                            <div className="product-additional-info pt-25">
                                                <a className="wishlist-btn" href="assets/wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a>
                                                <div className="product-social-sharing pt-25">
                                                    <ul>
                                                        <li className="facebook"><a href="assets/#"><i className="fa fa-facebook"></i>Facebook</a></li>
                                                        <li className="twitter"><a href="assets/#"><i className="fa fa-twitter"></i>Twitter</a></li>
                                                        <li className="google-plus"><a href="assets/#"><i className="fa fa-google-plus"></i>Google +</a></li>
                                                        <li className="instagram"><a href="assets/#"><i className="fa fa-instagram"></i>Instagram</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            {/* <!-- Quick View | Modal Area End Here --> */}
        </div>
        </div>
        )
}

export default ProductDetail;