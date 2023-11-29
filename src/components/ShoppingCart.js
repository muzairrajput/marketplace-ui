import React from 'react';

class ShoppingCart extends React.Component{
    render(){
        return (
        <div>
   
        <div className="body-wrapper">
           
            {/* <!-- Begin Li's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="assets/index.html">Home</a></li>
                            <li className="active">Shopping Cart</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Li's Breadcrumb Area End Here --> */}
            {/* <!--Shopping Cart Area Strat--> */}
            <div className="Shopping-cart-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="li-product-remove">remove</th>
                                                <th className="li-product-thumbnail">images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="li-product-price">Unit Price</th>
                                                <th className="li-product-quantity">Quantity</th>
                                                <th className="li-product-subtotal">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="li-product-remove"><a href="/"><i className="fa fa-times"></i></a></td>
                                                <td className="li-product-thumbnail"><a href="/"><img src="assets/images/product/small-size/5.jpg" alt="Li's Product Image"/></a></td>
                                                <td className="li-product-name"><a href="/">Accusantium dolorem1</a></td>
                                                <td className="li-product-price"><span className="amount">$46.80</span></td>
                                                <td className="quantity">
                                                    <label>Quantity</label>
                                                    <div className="cart-plus-minus">
                                                        <input className="cart-plus-minus-box" value="1" type="text"/>
                                                        <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                        <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$70.00</span></td>
                                            </tr>
                                            <tr>
                                                <td className="li-product-remove"><a href="/"><i className="fa fa-times"></i></a></td>
                                                <td className="li-product-thumbnail"><a href="/"><img src="assets/images/product/small-size/6.jpg" alt="Li's Product Image"/></a></td>
                                                <td className="li-product-name"><a href="/">Mug Today is a good day</a></td>
                                                <td className="li-product-price"><span className="amount">$71.80</span></td>
                                                <td className="quantity">
                                                    <label>Quantity</label>
                                                    <div className="cart-plus-minus">
                                                        <input className="cart-plus-minus-box" value="1" type="text"/>
                                                        <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                        <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                    </div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$60.50</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon">
                                                <input id="coupon_code" className="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text"/>
                                                <input className="button" name="apply_coupon" value="Apply coupon" type="submit"/>
                                            </div>
                                            <div className="coupon2">
                                                <input className="button" name="update_cart" value="Update cart" type="submit"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul>
                                                <li>Subtotal <span>$130.00</span></li>
                                                <li>Total <span>$130.00</span></li>
                                            </ul>
                                            <a href="/">Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Shopping Cart Area End--> */}
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
                                        <img src="assets/images/payment/1.png" alt=""/>
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
        </div>
      

        )
    }
}

export default ShoppingCart;