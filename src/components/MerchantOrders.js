import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './MerchantOrder.css';

const MerchantOrders = () => {    
    const navigate = useNavigate();
    const [orderItems, setOrderItems] = useState([]);
    const [orderDetails, setOrderId] = useState(0);
    const handleQtyUpdate = (val, productId) => {
        if (val < 0) return;
        const cartItemsDup = [...orderItems];
        console.log(cartItemsDup);
        cartItemsDup.forEach((cartItem) => {
            if (cartItem.ProductId == productId) {
                cartItem.Quantity = val;
            }
        });
        setOrderItems(cartItemsDup);
    }

    const handlePriceUpdate = (val, productId) => {
        if (val < 0) return;
        const cartItemsDup = [...orderItems];
        cartItemsDup.forEach((cartItem) => {
            if (cartItem.ProductId == productId) {
                cartItem.UnitPrice = val;
                cartItem.Price = val;
            }
        });
        setOrderItems(cartItemsDup);
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements[0].name);
        var id = e.target.elements[0].value;
        axios.get(`https://souq-marketplace-api.onrender.com/order/${id}`)
        .then(response => {
            console.log(response);
            axios.get(`https://souq-marketplace-api.onrender.com/orderitem/${id}`)
            .then(response => {
                console.log(response);
                setOrderItems(response.data);
                calcOrderTotal();
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
    }

    const SubmitUpdate = () => {
        console.log(orderItems);
        for(var i=0; i<orderItems.length; i++) {
            let oi = orderItems[i];
            console.log(oi);
            let orderItemReq = {Quantity: oi.Quantity, UnitPrice: oi.UnitPrice};
            axios.put(`https://souq-marketplace-api.onrender.com/orderitem/${oi.OrderItemId}`, orderItemReq)
            .then(response => {
                console.log(response);
            })
            .catch(err => console.error(err));   
        }
        var total = calcOrderTotal();
        const orderUpdReq = {TotalPrice: total, Status: 'Approved'};
        axios.put(`https://souq-marketplace-api.onrender.com/order/${orderItems[0].OrderId}`, orderUpdReq)
        .then(response => {
            console.log(response);
            navigate('/MerchantHome');
        })
        .catch(err => console.error(err));
    }
    
    const SubmitStatus = (status) => {
        let s = 'Approved';
        if (status == 2)
            s = 'Failed';
        var statusUpdateBody = {Status : s};
        axios.put(`https://souq-marketplace-api.onrender.com/order/updateStatus/${orderItems[0].OrderId}`,statusUpdateBody)
        .then(response => {
            console.log(response);
            alert('Status Successfully updated: '+s);
            navigate('/MerchantHome');
        })
        .catch(err => console.error(err));
    }

    const calcOrderTotal = () => {
    var total = 0;
    orderItems.forEach((ci) => {
        total += parseFloat(ci.Quantity * ci.UnitPrice);
    });
    return total;
    }
    const orderTotal = calcOrderTotal();
    
    return (
        <div class="body-wrapper">
            <div class="checkout-area pt-60 pb-30">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <form className="hm-searchbox" onSubmit={onSearchSubmit}>
                                <input type="text" name="orderId" placeholder="Enter your order id ..." />
                                <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-lg-12 col-12">
                            <div class="your-order">
                                <h3>Your order</h3>
                                <div class="your-order-table table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="cart-product-name">Product</th>
                                                <th class="cart-product-name">Unit Price</th>
                                                <th class="cart-product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderItems.map((ci) => (
                                                <tr class="cart_item" key={ci.ProductId}>
                                                    <td class="cart-product-name">{ci.Name} x <input style={{width: '50px', background: 'white'}} type='number' name='itemQty' value={ci.Quantity} onChange={(e) => handleQtyUpdate(e.target.value, ci.ProductId)}/> </td>
                                                    <td class="cart-product-total"><span class="amount">$<input style={{width: '50px', background: 'white'}} type='number' name='itemQty' value={ci.UnitPrice} onChange={(e) => handlePriceUpdate(e.target.value, ci.ProductId)}/></span></td>  
                                                    <td class="cart-product-total"><span class="amount">${ci.UnitPrice * ci.Quantity}</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr class="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span class="amount"></span></strong></td>
                                                <td><strong><span class="amount">${orderTotal}</span></strong></td>
                                            </tr>
                                                {orderItems.length > 0 && (
                                                    <tr>    
                                                        <td></td>
                                                        <td></td>
                                                        {
                                                            orderItems[0].Status == "Pending" && (
                                                                <td>
                                                                    <button className="register-button mt-0 btn-approve" onClick={() => SubmitUpdate()}>
                                                                        Approve
                                                                    </button>
                                                                    <button className="register-button mt-0 btn-reject" onClick={() => SubmitStatus(2)}>
                                                                        Reject
                                                                    </button>                                                            
                                                                </td>
                                                            )
                                                        }
                                                        {
                                                            ((orderItems[0].Status == "Approved") || (orderItems[0].Status == "Failed")) && (
                                                                <td>
                                                                    <h2>{orderItems[0].Status}</h2>                                      
                                                                </td>
                                                            )
                                                        }
                                                    </tr>
                                                )}
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MerchantOrders;