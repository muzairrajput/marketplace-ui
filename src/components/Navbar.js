import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({loggedInUser, cartItems}) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        // This code will run whenever the count prop changes
        console.log('Count has changed:', cartItems.length);
      }, [cartItems]);

    return (
    <div>
        <header>
            {/* <!-- Begin Header Middle Area --> */}
            <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                <div className="container">
                    <div className="row">
                        {/* <!-- Begin Header Logo Area --> */}
                        <div className="col-lg-3">
                            <div className="logo pb-sm-30 pb-xs-30">
                                <a href="/">
                                    <img src="assets/images/menu/logo/1.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                        {/* <!-- Header Logo Area End Here --> */}
                        {/* <!-- Begin Header Middle Right Area --> */}
                        {!location.pathname.includes('/chatroom') && !location.pathname.includes('/checkout') && !location.pathname.includes('/orderDetails') && (
                            <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                                {/* <!-- Begin Header Middle Searchbox Area --> */}
                                <form action="#" className="hm-searchbox">
                                    <input type="text" placeholder="Enter your search key ..."/>
                                    <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                                </form>
                                {/* <!-- Header Middle Searchbox Area End Here --> */}
                                {/* <!-- Begin Header Middle Right Area --> */}
                                <div className="header-middle-right">
                                    <ul className="hm-menu">
                                        {/* <!-- Begin Header Mini Cart Area --> */}
                                        <li className="hm-minicart">
                                            <div className="hm-minicart-trigger">
                                                <span className="item-icon"></span>
                                                <span className="item-text">
                                                    <span className="cart-item-count">{cartItems.length}</span>
                                                </span>
                                            </div>
                                            <span>{loggedInUser.Email}</span>
                                            <span></span>
                                            <div className="minicart">
                                                <ul className="minicart-product-list">
                                                    <li>
                                                        <a href="assets/single-product.html" className="minicart-product-image">
                                                            <img src="assets/images/product/small-size/5.jpg" alt="cart products"/>
                                                        </a>
                                                        <div className="minicart-product-details">
                                                            <h6><a href="assets/single-product.html">Aenean eu tristique</a></h6>
                                                            <span>£40 x 1</span>
                                                        </div>
                                                        <button className="close" title="Remove">
                                                            <i className="fa fa-close"></i>
                                                        </button>
                                                    </li>
                                                </ul>
                                                <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                                                <div className="minicart-button">
                                                    <a href="assets/checkout.html" className="li-button li-button-fullwidth">
                                                        <span>Checkout</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <!-- Header Mini Cart Area End Here --> */}
                                    </ul>
                                </div>
                                {/* <!-- Header Middle Right Area End Here --> */}
                            </div>
                        )}
                        
                        {/* <!-- Header Middle Right Area End Here --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Header Middle Area End Here --> */}
            {/* <!-- Begin Header Bottom Area --> */}
            <div className="header-bottom mb-0 header-sticky stick d-none d-lg-block d-xl-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- Begin Header Bottom Menu Area --> */}
                            <div className="hb-menu">
                                <nav>
                                    <ul>
                                        <li className="dropdown-holder" onClick={() => navigate("/")}>Home</li>
                                        <li className="catmenu-dropdown megamenu-holder"><a href="/Shop">Categories</a>
                                            <ul className="megamenu hb-megamenu">
                                                <li onClick={() => navigate("/shop?category=beauty")}>
                                                    Beauty & Cosmetics
                                                </li>
                                                <li onClick={() => navigate("/shop?category=hardware")}>
                                                    Hardware
                                                </li>
                                            </ul>
                                        </li>
                                        <li onClick={() => navigate("/checkout")}>Checkout</li>
                                        <li className="catmenu-dropdown megamenu-holder"><a href="#">Login</a>
                                            <ul className="megamenu hb-megamenu">
                                                <li onClick={() => navigate("/login")}>
                                                    Customer Login
                                                </li>
                                                <li onClick={() => navigate("/merchant/login")}>
                                                    Merchant Login
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- Header Bottom Menu Area End Here --> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    
    </div>
    )
}

export default Navbar;