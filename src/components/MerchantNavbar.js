import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MerchantNavbar = ({loggedInUser, cartItems}) => {

    const navigate = useNavigate();
 
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
                                <a href="/MerchantHome">
                                    <img src="assets/images/menu/logo/1.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            {/* <!-- Begin Header Bottom Area --> */}
            <div className="header-bottom mb-0 header-sticky stick d-none d-lg-block d-xl-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- Begin Header Bottom Menu Area --> */}
                            <div className="hb-menu">
                                <nav>
                                    <ul>
                                        <li className="dropdown-holder" onClick={() => navigate("/")}>Products</li>
                                        <li className="catmenu-dropdown megamenu-holder"><a href="/Shop">ADD PRODUCTS</a>
                                        </li>
                                        <li className="catmenu-dropdown megamenu-holder" onClick={() => navigate("/merchantOrders")}>Orders</li>
                                        <li className="catmenu-dropdown megamenu-holder" onClick={() => navigate("/merchantChatroom")}>Chatroom</li>
                                      
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

export default MerchantNavbar;