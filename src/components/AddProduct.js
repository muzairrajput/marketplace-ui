import React from 'react';
import { useState } from 'react'
//import validation from './Validationsignup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  
const AddProduct = ({loggedInUser}) => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const navigate = useNavigate()
    
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

    const handleAddProduct = (e) => {
        e.preventDefault();
        
        var registerModel = {
            name: e.target.elements[0].value, 
            description: e.target.elements[3].value, 
            category: e.target.elements[2].value, 
            price: e.target.elements[4].value, 
            stock: e.target.elements[5].value,
            vendorId: loggedInUser.Merchant_ID,
            imageUrl: imageUrl
        };
        axios.post('https://souq-marketplace-api.onrender.com/product', registerModel)
        .then(Response => {
            if(Response.status == 200) {
                return alert("Product has been added");
            } else {
                console.log("error");
                return alert('Error adding product')
            }
        })
        .catch(err => {console.log(err); return alert(err); });
    }

    return (
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                        <div className="contact-form-content pt-sm-55 pt-xs-55">
                            <h3 className="contact-page-title">Add New Product</h3>
                            <div className="contact-form">
                                <form onSubmit={handleAddProduct} id="contact-form" method="post" enctype="multipart/form-data">
                                    <div className="form-group">
                                        <label>Product Name <span className="required">*</span></label>
                                        <input type="text" name="productName" id="productName" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Select an Image <span className="required">*</span></label>
                                        <input type="file" id="imageUpload" name="imageUpload" onChange={(e) => handleImageUpload(e.target.files[0])}></input>                                            
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
                                        <input type="text" name="productQuality" id="productQuality"/>
                                    </div>  
                                    <div className="form-group">
                                        <button type="submit" value="submit" id="submit" className="li-btn-3" name="submit">Add New Product</button>
                                    </div>
                                </form>
                            </div>
                            <p className="form-messege"></p>
                        </div>
                    </div>

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
    );
}

export default AddProduct;