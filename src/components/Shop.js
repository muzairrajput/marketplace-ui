import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Shop = ({addCartItem}) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');

    const [products, setProducts] = useState([]);
    const addToCart = (cartItem) => {
        addCartItem(cartItem);
    };


    useEffect(() => {
        // GET request using axios inside useEffect React hook
        const url = `https://souq-marketplace-api.onrender.com/product?category=${category}`;
        axios.get(url)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
              console.error('There was an error!', error);
            });
      }, [category]);

    return (
        <div>
            <div className="body-wrapper">
        
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Shop</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-wraper pt-60 pb-60 pt-sm-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-1 order-lg-2">
                            <div className="shop-top-bar mt-30">
                                <div className="shop-bar-inner">
                                    <div className="product-view-mode">
                                        <ul className="nav shop-item-filter-list" role="tablist">
                                            <li className="active" role="presentation"><a aria-selected="true" className="active show" data-toggle="tab" role="tab" aria-controls="grid-view" href="#grid-view"><i className="fa fa-th"></i></a></li>
                                            <li role="presentation"><a data-toggle="tab" role="tab" aria-controls="list-view" href="#list-view"><i className="fa fa-th-list"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                       
                                <div className="product-select-box">
                                    <div className="product-short">
                                        <p>Sort By:</p>
                                        <select className="nice-select">
                                            <option value="sales">Name (A - Z)</option>
                                            <option value="sales">Name (Z - A)</option>
                                            <option value="rating">Price (Low &gt; High)</option>
                                            <option value="date">Rating (Lowest)</option>
                                        </select>
                                    </div>
                                </div>
                         
                            </div>
                    
                            <div className="shop-products-wrapper">
                                <div className="tab-content">
                                    <div id="grid-view" className="tab-pane fade active show" role="tabpanel">
                                        <div className="product-area shop-product-area">
                                            <div className="row">
                                                {products.map((p) =>(
                                                    <div className="col-lg-4 col-md-4 col-sm-6 mt-40"> 
                                                        <div className="single-product-wrap">
                                                            <div className="product-image">
                                                                <a href="single-product.html">
                                                                    <img src="assets/images/product/large-size/1.jpg" alt="Li's Product Image"/>
                                                                </a>
                                                                <span className="sticker"></span>
                                                            </div>
                                                            <div className="product_desc">
                                                                <div className="product_desc_info">
                                                                    <div className="product-review">
                                                                        <h5 className="manufacturer">
                                                                            <a href="product-details.html">Merchant {p.Name}</a>
                                                                        </h5>
                                                                    </div>
                                                                    <h4><a className="product_name" href="single-product.html">{p.Name}</a></h4>
                                                                    <div className="price-box">
                                                                        <span className="new-price">${p.Price}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="add-actions">
                                                                    <ul className="add-actions-link">
                                                                        <li className="add-cart active" onClick={() => {
                                                                                var cartItem = {};
                                                                                cartItem["ProductID"] = p.Product_ID;
                                                                                cartItem["CustomerID"] = p.CustomerID;
                                                                                cartItem["Quantity"] = 1;
                                                                                cartItem["UnitPrice"] = p.Price;
                                                                                addToCart(cartItem);
                                                                            }}>
                                                                            Add to Cart
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                ))};
                                            </div>
                                        </div>
                                    </div>
                                    <div className="paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 pt-xs-15">
                                                <p>Showing 1-12 of 13 item(s)</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul className="pagination-box pt-xs-20 pb-xs-15">
                                                    <li><a href="/" className="Previous"><i className="fa fa-chevron-left"></i> Previous</a>
                                                    </li>
                                                    <li className="active"><a href="/">1</a></li>
                                                    <li><a href="/">2</a></li>
                                                    <li><a href="/">3</a></li>
                                                    <li>
                                                      <a href="/" className="Next"> Next <i className="fa fa-chevron-right"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- shop-products-wrapper end --> */}
                        </div>
                        <div className="col-lg-3 order-2 order-lg-1">
                            {/* <!--sidebar-categores-box end  -->
                            <!--sidebar-categores-box start  --> */}
                            <div className="sidebar-categores-box">
                                <div className="sidebar-title">
                                    <h2>Filter By</h2>
                                </div>
                                {/* <!-- btn-clear-all start --> */}
                                <button className="btn-clear-all mb-sm-30 mb-xs-30">Clear all</button>
                                {/* <!-- btn-clear-all end --> */}
                                {/* <!-- filter-sub-area start --> */}
                                <div className="filter-sub-area">
                                    <h5 className="filter-sub-titel">Brand</h5>
                                    <div className="categori-checkbox">
                                        <form action="#">
                                            <ul>
                                                <li><input type="checkbox" name="product-categori"/><a href="/">Prime Video (13)</a></li>
                                                <li><input type="checkbox" name="product-categori"/><a href="/">Computers (12)</a></li>
                                                <li><input type="checkbox" name="product-categori"/><a href="/">Electronics (11)</a></li>
                                            </ul>
                                        </form>
                                    </div>
                                 </div>
                                {/* <!-- filter-sub-area end --> */}
                                {/* <!-- filter-sub-area start --> */}
                                <div className="filter-sub-area pt-sm-10 pt-xs-10">
                                    <h5 className="filter-sub-titel">Color</h5>
                                    <div className="color-categoriy">
                                        <form action="#">
                                            <ul>
                                                <li><span className="white"></span><a href="/">White (1)</a></li>
                                                <li><span className="black"></span><a href="/">Black (1)</a></li>
                                                <li><span className="Orange"></span><a href="/">Orange (3) </a></li>
                                                <li><span className="Blue"></span><a href="/">Blue  (2) </a></li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- filter-sub-area end --> */}
                            </div>
                            {/* <!--sidebar-categores-box end  --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Content Wraper Area End Here --> */}
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
                                            <a href="mailto://info@yourdomain.com">info@yourdomain.com</a>
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
                                                <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="rss">
                                                <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="RSS">
                                                    <i className="fa fa-rss"></i>
                                                </a>
                                            </li>
                                            <li className="google-plus">
                                                <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google +">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li className="facebook">
                                                <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="youtube">
                                                <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i className="fa fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="instagram">
                                                <a href="https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
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
                                            <div className="lg-image">
                                                <img src="assets/images/product/large-size/2.jpg" alt="product image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="assets/images/product/large-size/3.jpg" alt="product image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="assets/images/product/large-size/4.jpg" alt="product image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="assets/images/product/large-size/5.jpg" alt="product image"/>
                                            </div>
                                            <div className="lg-image">
                                                <img src="assets/images/product/large-size/6.jpg" alt="product image"/>
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
                                            <span className="product-details-ref">Reference: demo_15</span>
                                            <div className="rating-box pt-20">
                                                <ul className="rating rating-with-review-item">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                    <li className="review-item"><a href="/">Read Review</a></li>
                                                    <li className="review-item"><a href="/">Write Review</a></li>
                                                </ul>
                                            </div>
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
                                                </div>s/
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
                                                <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a>
                                                <div className="product-social-sharing pt-25">
                                                    <ul>
                                                        <li className="facebook"><a href="/"><i className="fa fa-facebook"></i>Facebook</a></li>
                                                        <li className="twitter"><a href="/"><i className="fa fa-twitter"></i>Twitter</a></li>
                                                        <li className="google-plus"><a href="/"><i className="fa fa-google-plus"></i>Google +</a></li>
                                                        <li className="instagram"><a href="/"><i className="fa fa-instagram"></i>Instagram</a></li>
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
    );
};

export default Shop;