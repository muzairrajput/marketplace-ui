// import React from 'react';
//import validation from './Validationsignup'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditProduct = ({handleLoggedInUser}) => {
    // const [errorMessage, setErrorMessage] = useState('');
    // const [User_Name, set_User_Name] = useState('');
    // const [Pass, set_Pass] = useState('');

        const navigate = useNavigate()        

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

        
        // const handleUpdateProduct = (e) => {
        //     e.preventDefault();
            
        //     var registerModel = {
        //         name: e.target.elements[0].value, 
        //         description: e.target.elements[3].value, 
        //         category: e.target.elements[1].value, 
        //         price: e.target.elements[4].value, 
        //         stock: e.target.elements[5].value,
        //         vendorId: e.target.elements[6].value
        //     };
        //     axios.put('https://souq-marketplace-api.onrender.com/product/${productId}', registerModel)
        //     .then(Response => {
        //         if(Response.status == 200) {
        //             return alert("Product has been Updated"+registerModel);
        //         } else {
        //             console.log("error");
        //             return alert('Error updating product')
        //         }
        //     })
        //     .catch(err => {console.log(err); return alert(err); });
        // }



        // New
        
    
            // const [formData, setFormData] = useState({
            //     name: e.target.elements[0].value, 
            //     description: e.target.elements[3].value, 
            //     category: e.target.elements[1].value, 
            //     price: e.target.elements[4].value, 
            //     stock: e.target.elements[5].value,
            //     vendorId: e.target.elements[6].value
            // });
          
            // const handleInputChange = (e) => {
            //   const { name, value } = e.target;
            //   setFormData({
            //     ...formData,
            //     [name]: value,
            //   });
            // };
          
                 

            const handleFormSubmit = async (e) => {
                var formData = {
                    name: e.target.elements[0].value, 
                    description: e.target.elements[3].value, 
                    category: e.target.elements[1].value, 
                    price: e.target.elements[4].value, 
                    stock: e.target.elements[5].value,
                    vendorId: e.target.elements[6].value
                };  
                       
              e.preventDefault();
          
              try {
                const response = await fetch('https://souq-marketplace-api.onrender.com/product/5', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });
          
                if (!response.ok) {
                  throw new Error('Failed to update product');
                }
                console.log('Product updated successfully');
                return alert('Product updated successfully!')
              } catch (error) {
                console.error('Error updating product:', error.message);
              }
            };

        return (
        <div>
            <br/>
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
        <div className="container">
                    <div className="row">
                    <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                            <div className="contact-form-content pt-sm-55 pt-xs-55">
                                <h3 className="contact-page-title">Update Product {productDetails.Name}</h3>
                                <div className="contact-form">
                                    <form onSubmit={handleFormSubmit} id="contact-form" method="post" enctype="multipart/form-data">
                                        <div className="form-group">
                                            <label>Product Name <span className="required">*</span></label>
                                            <input type="text" name="productName" id="productName" required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Select an Image <span className="required">*</span></label>
                                            <input type="file" id="imageUpload" name="imageUpload" accept="image/*"></input>                                            
                                        </div>
                                        <div className="form-group">
                                            <label>Category <span className="required">*</span></label>
                                            <input type="text" name="productCategory" id="productCategory" required/>
                                        </div>
                                        

                                        <div className="form-group mb-30">
                                            <label>Product Description <span className="required">*</span></label>
                                            <textarea name="productDescription" id="productDescription" ></textarea>
                                        </div>                                        
                                        <div className="form-group">
                                            <label>Product Price <span className="required">*</span></label>
                                            <input type="text" name="productPrice" id="productPrice"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Product Quality <span className="required">*</span></label>
                                            <input type="text" name="productQuality" id="productQuality" />
                                            <input type="hidden" name="vendorId" id="vendorId" />
                                        </div>  
                                        <div className="form-group">
                                            <button type="submit" value="submit" id="submit" className="li-btn-3" name="submit">Update Product</button>
                                        </div>
                                    </form>
                                </div>
                                <p className="form-messege"></p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="contact-page-side-content">
                                <h3 className="contact-page-title">Image</h3>
                                {/* <p className="contact-page-message mb-25">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                                <div className="single-contact-block">
                                    <h4><i className="fa fa-fax"></i> Address</h4>
                                    <p>123 Main Street, Anytown, CA 12345 – USA</p>
                                </div>
                                <div className="single-contact-block">
                                    <h4><i className="fa fa-phone"></i> Phone</h4>
                                    <p>Mobile: (08) 123 456 789</p>
                                    <p>Hotline: 1009 678 456</p>
                                </div>
                                <div className="single-contact-block last-child">
                                    <h4><i className="fa fa-envelope-o"></i> Email</h4>
                                    <p>yourmail@domain.com</p>
                                    <p>support@hastech.company</p>
                                </div> */}
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
        </div>
        )
}

export default EditProduct;