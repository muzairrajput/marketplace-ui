// import React from 'react';
//import validation from './Validationsignup'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditProduct = ({loggedInUser}) => {

        const navigate = useNavigate()        

        const location = useLocation();
        const queryParams = new URLSearchParams(location.search);
        const productId = queryParams.get('productId');
        const [productDetails, setProductDetails] = useState([]);
        const [image, setImage] = useState(null);
        const [imageUrl, setImageUrl] = useState(null);
        useEffect(() => {
            axios.get(`https://souq-marketplace-api.onrender.com/product/${productId}`)
            .then(response => {
                if (response.data.length > 0) {
                    setProductDetails(response.data);
                    setImageUrl(response.data[0].Image);
                }
            })
            .catch(err => console.error(err));
          }, []);
               
        const handleImageUpload = async (image) => {
            console.log(image);
            setImage(image);
            //setImageUrl(response);
            var formData = new FormData();
            formData.append('file',image);
            axios.post('https://souq-marketplace-api.onrender.com/imageUpload', formData)
            .then(Response => {
                if(Response.status == 200) {
                    console.log(Response.data);
                    setImageUrl(Response.data.response_data.Location)
                } else {
                    console.log("error");
                    return alert('Error adding product')
                }
            })
            .catch(err => {console.log(err); return alert(err); });
        }

          const handleEditProduct = (e) => {
            console.log('Inside');
            const prodDetails = [...productDetails];
            var registerModel = {
                name: prodDetails[0].Name, 
                description: prodDetails[0].Description, 
                category: prodDetails[0].Category, 
                price: prodDetails[0].Price, 
                stock: prodDetails[0].StockQuantity,
                imageUrl: imageUrl
            };
            axios.put('https://souq-marketplace-api.onrender.com/product/'+productId, registerModel)
            .then(Response => {
                if(Response.status == 200) {
                    return alert("Product has been edited");
                } else {
                    console.log("error");
                    return alert('Error editing product')
                }
            })
            .catch(err => {console.log(err); return alert(err); });
        }
        const handleValueChange = (e, obj) => {
            var val = e.target.value;
            console.log(val)
            const prodDetails = [...productDetails];
            prodDetails.forEach((pd) => {
                if (obj === 'Name') {
                    pd.Name = val;
                }
                else if (obj === 'Desc') {
                    pd.Description = val;
                }
                else if (obj === 'Cat') {
                    pd.Category = val;
                }
                else if (obj === 'Price') {
                    pd.Price = val;
                }
                else if (obj === 'Qty') {
                    pd.StockQuantity = val;
                }
            });
            setProductDetails(prodDetails);
        }

        return (
        <div>
            <br/>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li onClick={() => navigate('/MerchantHome')}>Home</li>
                            <li className="active">Product Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Li's Breadcrumb Area End Here --> */}
        <div className="container">
            <div className="row">
                {productDetails.map((p) => (
                    <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                        <div className="contact-form-content pt-sm-55 pt-xs-55">
                            <h3 className="contact-page-title">Update Product</h3>
                            <div className="contact-form">
                                    <div className="form-group">
                                        <label>Product Name:</label>
                                        <input type="text" name="productName" id="productName" value={p.Name} onChange={(e) => handleValueChange(e, 'Name')}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Select an Image</label>
                                        <input type="file" id="imageUpload" name="imageUpload" onChange={(e) => handleImageUpload(e.target.files[0])}></input>                                            
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        
                                        <input type="text" name="productCategory" id="productCategory" value={p.Category} onChange={(e) => handleValueChange(e, 'Cat')}/>
                                    </div>
                                    <div className="form-group mb-30">
                                        <label>Product Description</label>
                                        <textarea name="productDescription" id="productDescription" value={p.Description} onChange={(e) => handleValueChange(e, 'Desc')}></textarea>
                                    </div>                                        
                                    <div className="form-group">
                                        <label>Product Price</label>
                                        <input type="text" name="productPrice" id="productPrice" value={p.Price} onChange={(e) => handleValueChange(e, 'Price')}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Product Quantity</label>
                                        <input type="text" name="productQuality" id="productQuality" value={p.StockQuantity} onChange={(e) => handleValueChange(e, 'Qty')}/>
                                    </div>  
                                    <div className="form-group">
                                        <button type="submit" value="submit" id="submit" className="li-btn-3" 
                                        name="submit" onClick={() => handleEditProduct()}>Update Product</button>
                                    </div>
                            </div>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                ))}
                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                        <div className="contact-page-side-content">
                            <h3 className="contact-page-title">Image</h3>
                            <div>
                                {image && <img style={{width:'300px', height: '300px'}} src={URL.createObjectURL(image)} alt="Uploaded" />}
                            </div>;
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default EditProduct;