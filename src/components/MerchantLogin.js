import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MerchantLogin = ({ handleLoggedInUser }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [User_Name, set_User_Name] = useState('');
    const [Pass, set_Pass] = useState('');

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://souq-marketplace-api.onrender.com/login', { username: User_Name, password: Pass })
            .then(Response => {
                if (Response.status == 200) {
                    axios.get(`https://souq-marketplace-api.onrender.com/merchant?email=${User_Name}`)
                        .then(resp => {
                            var userData = resp.data[0];
                            handleLoggedInUser(userData);
                        })
                        .catch(e => console.log(e));
                    navigate('/MerchantHome');
                } else {
                    console.log("error");
                    setErrorMessage('Invalid entry of username or password. Please try againto login.');
                }
            })
            .catch(err => console.log(err));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (e.target.elements[6].value != e.target.elements[7].value) {
            return alert('Password and confirm Password doesnot match');
        }
        var registerModel = {
            BusinessName: e.target.elements[0].value,
            BusinessDescription: e.target.elements[1].value,
            BusinessLicenseNumber: e.target.elements[2].value,
            Email: e.target.elements[4].value,
            Address: e.target.elements[3].value,
            Phone: e.target.elements[3].value,
            Password: e.target.elements[6].value,
            Username: e.target.elements[4].value
        };
        axios.post('https://souq-marketplace-api.onrender.com/merchant/signup', registerModel)
            .then(Response => {
                if (Response.status == 200) {
                    return alert("User Registered");
                } else {
                    console.log("error");
                    return alert('Error registering user')
                }
            })
            .catch(err => { console.log(err); return alert(err); });
    }


    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="assets/index.html">Home</a></li>
                            <li className="active">Login Register</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Li's Breadcrumb Area End Here --> */}
            {/* <!-- Begin Login Content Area --> */}
            <div className="page-section mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            {/* <!-- Login Form s--> */}
                            <form onSubmit={handleSubmit} >
                                <div className="login-form">
                                    <h4 className="login-title">Login</h4>
                                    <div className="row">
                                        <div className="col-md-12 col-12 mb-20">
                                            <label>BusinessUsername*</label>
                                            <input className="mb-0" type="text" placeholder="User Name" onChange={e => set_User_Name(e.target.value)} />
                                        </div>
                                        <div className="col-12 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" type="password" placeholder="Password" onChange={e => set_Pass(e.target.value)} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me" />
                                                <label for="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <a href="/"> Forgotten pasward?</a>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="register-button mt-0">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                            <form onSubmit={handleRegister}>
                                <div className="login-form">
                                    <h4 className="login-title">Business account Register</h4>
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>BusinessName</label>
                                            <input className="mb-0" type="text" name="firstName" placeholder=" Name" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>BusinessDescription</label>
                                            <input className="mb-0" type="text" name="lastName" placeholder="Description" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>BusinessLicenseNo</label>
                                            <input className="mb-0" type="text" name="lastName" placeholder="LicenseNo" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Address</label>
                                            <input className="mb-0" type="text" name="address" placeholder="Address" />
                                        </div>
                                        <div className="col-md-6 col-12 mb-20">
                                            <label>Phone</label>
                                            <input className="mb-0" type="text" name="phone" placeholder="Phone" />
                                        </div>
                                        <div className="col-md-12 mb-20">
                                            <label>Email*</label>
                                            <input className="mb-0" type="email" name="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Password</label>
                                            <input className="mb-0" type="password" name="password" placeholder="Password" />
                                        </div>
                                        <div className="col-md-6 mb-20">
                                            <label>Confirm Password</label>
                                            <input className="mb-0" type="password" name="confirmPassword" placeholder="Confirm Password" />
                                        </div>
                                        <div className="col-12">
                                            <button className="register-button mt-0">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Login Content Area End Here --> */}
            {/* <!-- Begin Footer Area --> */}

        </div>
    )
}
export default MerchantLogin;