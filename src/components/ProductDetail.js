import React from 'react';

class Shop extends React.Component{
    render(){
        return (
        <div>
        <div class="body-wrapper">
            {/* Navbar */}
        
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li><a href="assets/index.html">Home</a></li>
                            <li class="active">Single Product</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Li's Breadcrumb Area End Here --> */}
            {/* <!-- content-wraper start --> */}
            <div class="content-wraper">
                <div class="container">
                    <div class="row single-product-area">
                        <div class="col-lg-5 col-md-6">
                           {/* <!-- Product Details Left --> */}
                            <div class="product-details-left">
                                <div class="product-details-images slider-navigation-1">
                                    <div class="lg-image">
                                        <a class="popup-img venobox vbox-item" href="assets/images/product/large-size/1.jpg" data-gall="myGallery">
                                            <img src="assets/images/product/large-size/1.jpg" alt="product image"/>
                                        </a>
                                    </div>
                                    <div class="lg-image">
                                        <a class="popup-img venobox vbox-item" href="assets/images/product/large-size/2.jpg" data-gall="myGallery">
                                            <img src="assets/images/product/large-size/2.jpg" alt="product image"/>
                                        </a>
                                    </div>
                                    <div class="lg-image">
                                        <a class="popup-img venobox vbox-item" href="assets/images/product/large-size/3.jpg" data-gall="myGallery">
                                            <img src="assets/images/product/large-size/3.jpg" alt="product image"/>
                                        </a>
                                    </div>
                                    <div class="lg-image">
                                        <a class="popup-img venobox vbox-item" href="assets/images/product/large-size/4.jpg" data-gall="myGallery">
                                            <img src="assets/images/product/large-size/4.jpg" alt="product image"/>
                                        </a>
                                    </div>
                                    <div class="lg-image">
                                        <a class="popup-img venobox vbox-item" href="assets/images/product/large-size/5.jpg" data-gall="myGallery">
                                            <img src="assets/images/product/large-size/5.jpg" alt="product image"/>
                                        </a>
                                    </div>
                                    <div class="lg-image">
                                        <a class="popup-img venobox vbox-item" href="assets/images/product/large-size/6.jpg" data-gall="myGallery">
                                            <img src="assets/images/product/large-size/6.jpg" alt="product image"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="product-details-thumbs slider-thumbs-1">                                        
                                    <div class="sm-image"><img src="assets/images/product/small-size/1.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="assets/images/product/small-size/2.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="assets/images/product/small-size/3.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="assets/images/product/small-size/4.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="assets/images/product/small-size/5.jpg" alt="product image thumb"/></div>
                                    <div class="sm-image"><img src="assets/images/product/small-size/6.jpg" alt="product image thumb"/></div>
                                </div>
                            </div>
                            {/* <!--// Product Details Left --> */}
                        </div>

                        <div class="col-lg-7 col-md-6">
                            <div class="product-details-view-content pt-60">
                                <div class="product-info">
                                    <h2>Today is a good day Framed poster</h2>
                                    <span class="product-details-ref">Reference: demo_15</span>
                                    <div class="rating-box pt-20">
                                        <ul class="rating rating-with-review-item">
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li class="no-star"><i class="fa fa-star-o"></i></li>
                                            <li class="no-star"><i class="fa fa-star-o"></i></li>
                                            <li class="review-item"><a href="#">Read Review</a></li>
                                            <li class="review-item"><a href="#">Write Review</a></li>
                                        </ul>
                                    </div>
                                    <div class="price-box pt-20">
                                        <span class="new-price new-price-2">$57.98</span>
                                    </div>
                                    <div class="product-desc">
                                        <p>
                                            <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                                            </span>
                                        </p>
                                    </div>
                                    <div class="product-variants">
                                        <div class="produt-variants-size">
                                            <label>Dimension</label>
                                            <select class="nice-select">
                                                <option value="1" title="S" selected="selected">40x60cm</option>
                                                <option value="2" title="M">60x90cm</option>
                                                <option value="3" title="L">80x120cm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="single-add-to-cart">
                                        <form action="#" class="cart-quantity">
                                            <div class="quantity">
                                                <label>Quantity</label>
                                                <div class="cart-plus-minus">
                                                    <input class="cart-plus-minus-box" value="1" type="text"/>
                                                    <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
                                                    <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <button class="add-to-cart" type="submit">Add to cart</button>
                                        </form>
                                    </div>
                                    <div class="product-additional-info pt-25">
                                        <a class="wishlist-btn" href="assets/wishlist.html"><i class="fa fa-heart-o"></i>Add to wishlist</a>
                                        <div class="product-social-sharing pt-25">
                                            <ul>
                                                <li class="facebook"><a href="assets/#"><i class="fa fa-facebook"></i>Facebook</a></li>
                                                <li class="twitter"><a href="assets/#"><i class="fa fa-twitter"></i>Twitter</a></li>
                                                <li class="google-plus"><a href="assets/#"><i class="fa fa-google-plus"></i>Google +</a></li>
                                                <li class="instagram"><a href="assets/#"><i class="fa fa-instagram"></i>Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="block-reassurance">
                                        <ul>
                                            <li>
                                                <div class="reassurance-item">
                                                    <div class="reassurance-icon">
                                                        <i class="fa fa-check-square-o"></i>
                                                    </div>
                                                    <p>Security policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="reassurance-item">
                                                    <div class="reassurance-icon">
                                                        <i class="fa fa-truck"></i>
                                                    </div>
                                                    <p>Delivery policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="reassurance-item">
                                                    <div class="reassurance-icon">
                                                        <i class="fa fa-exchange"></i>
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
                </div>
            </div>
            {/* <!-- content-wraper end --> */}
            {/* <!-- Begin Product Area --> */}
            <div class="product-area pt-35">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="li-product-tab">
                                <ul class="nav li-product-menu">
                                   <li><a class="active" data-toggle="tab" href="assets/#description"><span>Description</span></a></li>
                                   <li><a data-toggle="tab" href="assets/#product-details"><span>Product Details</span></a></li>
                                   <li><a data-toggle="tab" href="assets/#reviews"><span>Reviews</span></a></li>
                                </ul>               
                            </div>
                            {/* <!-- Begin Li's Tab Menu Content Area --> */}
                        </div>
                    </div>
                    <div class="tab-content">
                        <div id="description" class="tab-pane active show" role="tabpanel">
                            <div class="product-description">
                                <span>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</span>
                            </div>
                        </div>
                        <div id="product-details" class="tab-pane" role="tabpanel">
                            <div class="product-details-manufacturer">
                                <a href="assets/#">
                                    <img src="assets/images/product-details/1.jpg" alt="Product Manufacturer Image"/>
                                </a>
                                <p><span>Reference</span> demo_7</p>
                                <p><span>Reference</span> demo_7</p>
                            </div>
                        </div>
                        <div id="reviews" class="tab-pane" role="tabpanel">
                            <div class="product-reviews">
                                <div class="product-details-comment-block">
                                    <div class="comment-review">
                                        <span>Grade</span>
                                        <ul class="rating">
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li><i class="fa fa-star-o"></i></li>
                                            <li class="no-star"><i class="fa fa-star-o"></i></li>
                                            <li class="no-star"><i class="fa fa-star-o"></i></li>
                                        </ul>
                                    </div>
                                    <div class="comment-author-infos pt-25">
                                        <span>HTML 5</span>
                                        <em>01-12-18</em>
                                    </div>
                                    <div class="comment-details">
                                        <h4 class="title-block">Demo</h4>
                                        <p>Plaza</p>
                                    </div>
                                    <div class="review-btn">
                                        <a class="review-links" href="assets/#" data-toggle="modal" data-target="#mymodal">Write Your Review!</a>
                                    </div>
                                    {/* <!-- Begin Quick View | Modal Area --> */}
                                    <div class="modal fade modal-wrapper" id="mymodal" >
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <h3 class="review-page-title">Write Your Review</h3>
                                                    <div class="modal-inner-area row">
                                                        <div class="col-lg-6">
                                                           <div class="li-review-product">
                                                               <img src="assets/images/product/large-size/3.jpg" alt="Li's Product"/>
                                                               <div class="li-review-product-desc">
                                                                   <p class="li-product-name">Today is a good day Framed poster</p>
                                                                   <p>
                                                                       <span>Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Design </span>
                                                                   </p>
                                                               </div>
                                                           </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="li-review-content">
                                                                {/* <!-- Begin Feedback Area --> */}
                                                                <div class="feedback-area">
                                                                    <div class="feedback">
                                                                        <h3 class="feedback-title">Our Feedback</h3>
                                                                        <form action="#">
                                                                            <p class="your-opinion">
                                                                                <label>Your Rating</label>
                                                                                <span>
                                                                                    <select class="star-rating">
                                                                                      <option value="1">1</option>
                                                                                      <option value="2">2</option>
                                                                                      <option value="3">3</option>
                                                                                      <option value="4">4</option>
                                                                                      <option value="5">5</option>
                                                                                    </select>
                                                                                </span>
                                                                            </p>
                                                                            <p class="feedback-form">
                                                                                <label for="feedback">Your Review</label>
                                                                                <textarea id="feedback" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                                                            </p>
                                                                            <div class="feedback-input">
                                                                                <p class="feedback-form-author">
                                                                                    <label for="author">Name<span class="required">*</span>
                                                                                    </label>
                                                                                    <input id="author" name="author" value="" size="30" aria-required="true" type="text"/>
                                                                                </p>
                                                                                <p class="feedback-form-author feedback-form-email">
                                                                                    <label for="email">Email<span class="required">*</span>
                                                                                    </label>
                                                                                    <input id="email" name="email" value="" size="30" aria-required="true" type="text"/>
                                                                                    <span class="required"><sub>*</sub> Required fields</span>
                                                                                </p>
                                                                                <div class="feedback-btn pb-15">
                                                                                    <a href="assets/#" class="close" data-dismiss="modal" aria-label="Close">Close</a>
                                                                                    <a href="assets/#">Submit</a>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- Feedback Area End Here --> */}
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
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Product Area End Here --> */}
            {/* <!-- Begin Li's Laptop Product Area --> */}
            <section class="product-area li-laptop-product pt-30 pb-50">
                <div class="container">
                    <div class="row">
                        {/* <!-- Begin Li's Section Area --> */}
                        <div class="col-lg-12">
                            <div class="li-section-title">
                                <h2>
                                    <span>15 other products in the same category:</span>
                                </h2>
                            </div>
                            <div class="row">
                                <div class="product-active owl-carousel">
                                    <div class="col-lg-12">
                                        {/* <!-- single-product-wrap start --> */}
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href="assets/single-product.html">
                                                    <img src="assets/images/product/large-size/1.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="assets/product-details.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="assets/single-product.html">Accusantium dolorem1</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="assets/#">Add to cart</a></li>
                                                        <li><a href="assets/#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                        <li><a class="links-details" href="assets/wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single-product-wrap end --> */}
                                    </div>
                                    <div class="col-lg-12">
                                        {/* <!-- single-product-wrap start --> */}
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href="assets/single-product.html">
                                                    <img src="assets/images/product/large-size/2.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="assets/product-details.html">Studio Design</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="assets/single-product.html">Mug Today is a good day</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price new-price-2">$71.80</span>
                                                        <span class="old-price">$77.22</span>
                                                        <span class="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="assets/#">Add to cart</a></li>
                                                        <li><a href="assets/#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                        <li><a class="links-details" href="assets/wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single-product-wrap end --> */}
                                    </div>
                                    <div class="col-lg-12">
                                        {/* <!-- single-product-wrap start --> */}
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href="assets/single-product.html">
                                                    <img src="assets/images/product/large-size/3.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="assets/product-details.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="assets/single-product.html">Accusantium dolorem1</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="assets/#">Add to cart</a></li>
                                                        <li><a href="assets/#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                        <li><a class="links-details" href="assets/wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single-product-wrap end --> */}
                                    </div>
                                    <div class="col-lg-12">
                                        {/* <!-- single-product-wrap start --> */}
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href="assets/single-product.html">
                                                    <img src="assets/images/product/large-size/4.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="assets/product-details.html">Studio Design</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="assets/single-product.html">Mug Today is a good day</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price new-price-2">$71.80</span>
                                                        <span class="old-price">$77.22</span>
                                                        <span class="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="assets/#">Add to cart</a></li>
                                                        <li><a href="assets/#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                        <li><a class="links-details" href="assets/wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single-product-wrap end --> */}
                                    </div>
                                    <div class="col-lg-12">
                                        {/* <!-- single-product-wrap start --> */}
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href="assets/single-product.html">
                                                    <img src="assets/images/product/large-size/5.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="assets/product-details.html">Graphic Corner</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="assets/single-product.html">Accusantium dolorem1</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price">$46.80</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="assets/#">Add to cart</a></li>
                                                        <li><a href="assets/#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                        <li><a class="links-details" href="assets/wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single-product-wrap end --> */}
                                    </div>
                                    <div class="col-lg-12">
                                        {/* <!-- single-product-wrap start --> */}
                                        <div class="single-product-wrap">
                                            <div class="product-image">
                                                <a href="assets/single-product.html">
                                                    <img src="assets/images/product/large-size/6.jpg" alt="Li's Product Image"/>
                                                </a>
                                                <span class="sticker">New</span>
                                            </div>
                                            <div class="product_desc">
                                                <div class="product_desc_info">
                                                    <div class="product-review">
                                                        <h5 class="manufacturer">
                                                            <a href="assets/product-details.html">Studio Design</a>
                                                        </h5>
                                                        <div class="rating-box">
                                                            <ul class="rating">
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                                <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h4><a class="product_name" href="assets/single-product.html">Mug Today is a good day</a></h4>
                                                    <div class="price-box">
                                                        <span class="new-price new-price-2">$71.80</span>
                                                        <span class="old-price">$77.22</span>
                                                        <span class="discount-percentage">-7%</span>
                                                    </div>
                                                </div>
                                                <div class="add-actions">
                                                    <ul class="add-actions-link">
                                                        <li class="add-cart active"><a href="assets/#">Add to cart</a></li>
                                                        <li><a href="assets/#" title="quick view" class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye"></i></a></li>
                                                        <li><a class="links-details" href="assets/wishlist.html"><i class="fa fa-heart-o"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single-product-wrap end --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Li's Section Area End Here --> */}
                    </div>
                </div>
            </section>
            {/* <!-- Li's Laptop Product Area End Here --> */}
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
                                <div class="col-lg-2 col-md-3 col-sm-6">
                                    <div class="footer-block">
                                        <h3 class="footer-block-title">Product</h3>
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
                                <div class="col-lg-2 col-md-3 col-sm-6">
                                    <div class="footer-block">
                                        <h3 class="footer-block-title">Our company</h3>
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
                                                <a href="assets/https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google +">
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
                                <div class="copyright text-center">
                                    <a href="assets/#">
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
            {/* <!-- Begin Quick View | Modal Area --> */}
            <div class="modal fade modal-wrapper" id="exampleModalCenter" >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="modal-inner-area row">
                                <div class="col-lg-5 col-md-6 col-sm-6">
                                   {/* <!-- Product Details Left --> */}
                                    <div class="product-details-left">
                                        <div class="product-details-images slider-navigation-1">
                                            <div class="lg-image">
                                                <img src="assets/images/product/large-size/1.jpg" alt="product image"/>
                                            </div>
                                            <div class="lg-image">
                                                <img src="assets/images/product/large-size/2.jpg" alt="product image"/>
                                            </div>
                                            <div class="lg-image">
                                                <img src="assets/images/product/large-size/3.jpg" alt="product image"/>
                                            </div>
                                            <div class="lg-image">
                                                <img src="assets/images/product/large-size/4.jpg" alt="product image"/>
                                            </div>
                                            <div class="lg-image">
                                                <img src="assets/images/product/large-size/5.jpg" alt="product image"/>
                                            </div>
                                            <div class="lg-image">
                                                <img src="assets/images/product/large-size/6.jpg" alt="product image"/>
                                            </div>
                                        </div>
                                        <div class="product-details-thumbs slider-thumbs-1">
                                            <div class="sm-image"><img src="assets/images/product/small-size/1.jpg" alt="product image thumb"/></div>
                                            <div class="sm-image"><img src="assets/images/product/small-size/2.jpg" alt="product image thumb"/></div>
                                            <div class="sm-image"><img src="assets/images/product/small-size/3.jpg" alt="product image thumb"/></div>
                                            <div class="sm-image"><img src="assets/images/product/small-size/4.jpg" alt="product image thumb"/></div>
                                            <div class="sm-image"><img src="assets/images/product/small-size/5.jpg" alt="product image thumb"/></div>
                                            <div class="sm-image"><img src="assets/images/product/small-size/6.jpg" alt="product image thumb"/></div>
                                        </div>
                                    </div>
                                    {/* <!--// Product Details Left --> */}
                                </div>

                                <div class="col-lg-7 col-md-6 col-sm-6">
                                    <div class="product-details-view-content pt-60">
                                        <div class="product-info">
                                            <h2>Today is a good day Framed poster</h2>
                                            <span class="product-details-ref">Reference: demo_15</span>
                                            <div class="rating-box pt-20">
                                                <ul class="rating rating-with-review-item">
                                                    <li><i class="fa fa-star-o"></i></li>
                                                    <li><i class="fa fa-star-o"></i></li>
                                                    <li><i class="fa fa-star-o"></i></li>
                                                    <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                    <li class="no-star"><i class="fa fa-star-o"></i></li>
                                                    <li class="review-item"><a href="assets/#">Read Review</a></li>
                                                    <li class="review-item"><a href="assets/#">Write Review</a></li>
                                                </ul>
                                            </div>
                                            <div class="price-box pt-20">
                                                <span class="new-price new-price-2">$57.98</span>
                                            </div>
                                            <div class="product-desc">
                                                <p>
                                                    <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="product-variants">
                                                <div class="produt-variants-size">
                                                    <label>Dimension</label>
                                                    <select class="nice-select">
                                                        <option value="1" title="S" selected="selected">40x60cm</option>
                                                        <option value="2" title="M">60x90cm</option>
                                                        <option value="3" title="L">80x120cm</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="single-add-to-cart">
                                                <form action="#" class="cart-quantity">
                                                    <div class="quantity">
                                                        <label>Quantity</label>
                                                        <div class="cart-plus-minus">
                                                            <input class="cart-plus-minus-box" value="1" type="text"/>
                                                            <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div>
                                                            <div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>
                                                        </div>
                                                    </div>
                                                    <button class="add-to-cart" type="submit">Add to cart</button>
                                                </form>
                                            </div>
                                            <div class="product-additional-info pt-25">
                                                <a class="wishlist-btn" href="assets/wishlist.html"><i class="fa fa-heart-o"></i>Add to wishlist</a>
                                                <div class="product-social-sharing pt-25">
                                                    <ul>
                                                        <li class="facebook"><a href="assets/#"><i class="fa fa-facebook"></i>Facebook</a></li>
                                                        <li class="twitter"><a href="assets/#"><i class="fa fa-twitter"></i>Twitter</a></li>
                                                        <li class="google-plus"><a href="assets/#"><i class="fa fa-google-plus"></i>Google +</a></li>
                                                        <li class="instagram"><a href="assets/#"><i class="fa fa-instagram"></i>Instagram</a></li>
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
}

export default Shop;