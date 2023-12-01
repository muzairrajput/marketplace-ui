import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const MerchantHome = ({cartItems, addCartItem}) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const addToCart = (cartItem) => {
      addCartItem(cartItem);
  };

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    const url = `https://souq-marketplace-api.onrender.com/product?vendorId=1`;
    axios.get(url)
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
  }, []);
  return (
    <div>
            <div className="body-wrapper">
        
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li className="active">Home</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-wraper pt-60 pb-60 pt-sm-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-1 order-lg-2">
                            <div className="shop-top-bar mt-30">                      
                                <div className="product-select-box">
                                    <div className="product-short">
                                        <p>Sort By:</p>
                                        <select className="nice-select">
                                            <option value="sales">Name (A - Z)</option>
                                            <option value="sales">Name (Z - A)</option>
                                            <option value="rating">Price (Low &gt; High)</option>
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
                                                                <a href={`/productDetail?productId=${p.ProductID}`}>
                                                                    <img src="assets/images/product/large-size/1.jpg" alt="Li's Product Image"/>
                                                                </a>
                                                                <span className="sticker"></span>
                                                            </div>
                                                            <div className="product_desc">
                                                                <div className="product_desc_info">
                                                                    <div className="product-review">
                                                                        <h5 className="manufacturer">
                                                                            <a href={`/productDetail?productId=${p.ProductID}`}>Merchant {p.Name}</a>
                                                                        </h5>
                                                                    </div>
                                                                    <h4><a className="product_name" href={`/productDetail?productId=${p.ProductID}`}>{p.Name}</a></h4>
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
                                                                                cartItem["ProductName"] = p.Name;
                                                                                cartItem["VendorID"] = p.Vendor_ID;
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
                                </div>
                            </div>
                            {/* <!-- shop-products-wrapper end --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Content Wraper Area End Here --> */}
      </div>
      </div>
                             
             
  );
};

export default MerchantHome;