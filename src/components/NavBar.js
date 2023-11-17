import React from 'react';

function Navbar(){
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
                        <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                            {/* <!-- Begin Header Middle Searchbox Area --> */}
                            <form action="#" className="hm-searchbox">
                                <select className="nice-select select-search-category">
                                    <option value="0">All</option>                         
                                    <option value="10">Laptops</option>                     
                                    <option value="17">- -  Prime Video</option>                    
                                    <option value="20">- - - -  All Videos</option>                     
                                    <option value="21">- - - -  Blouses</option>                        
                                    <option value="22">- - - -  Evening Dresses</option>                
                                    <option value="23">- - - -  Summer Dresses</option>                     
                                    <option value="24">- - - -  T-shirts</option>                       
                                    <option value="25">- - - -  Rent or Buy</option>                        
                                    <option value="26">- - - -  Your Watchlist</option>                     
                                    <option value="27">- - - -  Watch Anywhere</option>                     
                                    <option value="28">- - - -  Getting Started</option>         
                                    <option value="18">- - - -  Computers</option>         
                                    <option value="13">Cameras</option>                              
                                    <option value="16">Accessories</option>
                                </select>
                                <input type="text" placeholder="Enter your search key ..."/>
                                <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                            {/* <!-- Header Middle Searchbox Area End Here --> */}
                            {/* <!-- Begin Header Middle Right Area --> */}
                            <div className="header-middle-right">
                                <ul className="hm-menu">
                                    {/* <!-- Begin Header Middle Wishlist Area --> */}
                                    <li className="hm-wishlist">
                                        <a href="/ShoppingChart">
                                            <span className="cart-item-count wishlist-item-count">0</span>
                                            <i className="fa fa-heart-o"></i>
                                        </a>
                                    </li>
                                    {/* <!-- Header Middle Wishlist Area End Here --> */}
                                    {/* <!-- Begin Header Mini Cart Area --> */}
                                    <li className="hm-minicart">
                                        <div className="hm-minicart-trigger">
                                            <span className="item-icon"></span>
                                            <span className="item-text">£80.00
                                                <span className="cart-item-count">2</span>
                                            </span>
                                        </div>
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
                                                <li>
                                                    <a href="assets/single-product.html" className="minicart-product-image">
                                                        <img src="assets/images/product/small-size/6.jpg" alt="cart products"/>
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
                                                <a href="assets/shopping-cart.html" className="li-button li-button-fullwidth li-button-dark">
                                                    <span>View Full Cart</span>
                                                </a>
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
                                        <li className="dropdown-holder"><a href="/">Home</a>
                                        </li>
                                        <li className="catmenu-dropdown megamenu-holder"><a href="/Shop">Shop</a>
                                            <ul className="megamenu hb-megamenu">
                                                <li><a href="assets/shop-left-sidebar.html">Shop Page Layout</a>
                                                    <ul>
                                                        <li><a href="assets/shop-3-column.html">Shop 3 Column</a></li>
                                                        <li><a href="assets/shop-4-column.html">Shop 4 Column</a></li>
                                                        <li><a href="assets/shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                                        <li><a href="assets/shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                        <li><a href="assets/shop-list.html">Shop List</a></li>
                                                        <li><a href="assets/shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                                        <li><a href="assets/shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="assets/single-product-gallery-left.html">Single Product Style</a>
                                                    <ul>
                                                        <li><a href="assets/single-product-carousel.html">Single Product Carousel</a></li>
                                                        <li><a href="assets/single-product-gallery-left.html">Single Product Gallery Left</a></li>
                                                        <li><a href="assets/single-product-gallery-right.html">Single Product Gallery Right</a></li>
                                                        <li><a href="assets/single-product-tab-style-top.html">Single Product Tab Style Top</a></li>
                                                        <li><a href="assets/single-product-tab-style-left.html">Single Product Tab Style Left</a></li>
                                                        <li><a href="assets/single-product-tab-style-right.html">Single Product Tab Style Right</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="assets/single-product.html">Single Products</a>
                                                    <ul>
                                                        <li className="active"><a href="assets/single-product.html">Single Product</a></li>
                                                        <li><a href="assets/single-product-sale.html">Single Product Sale</a></li>
                                                        <li><a href="assets/single-product-group.html">Single Product Group</a></li>
                                                        <li><a href="assets/single-product-normal.html">Single Product Normal</a></li>
                                                        <li><a href="assets/single-product-affiliate.html">Single Product Affiliate</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* <li><a href="/Shop">Shop</a></li> */}
                                        <li><a href="/ChatRoom">Chat Room</a></li>
                                        <li><a href="/ProductDetail">Product Detail</a></li>
                                        <li><a href="/ShoppingChart">Shopping Chart</a></li>
                                        <li><a href="/Checkout">Checkout</a></li>
                                        <li><a href="/Login">Login</a></li>
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