import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
const OrderDetails = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get('orderId');
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        var url = `https://souq-marketplace-api.onrender.com/orderitem/${orderId}`;
        axios.get(url)
              .then(response => {
                setOrderItems(response.data);
              })
              .catch(error => {
                console.error('There was an error getting messages', error);
              });
      }, []);

      const calcOrderTotal = () => {
        var total = 0;
        orderItems.forEach((ci) => {
            total += parseFloat(ci.Quantity * ci.UnitPrice);
        });
        return total;
      }
      const orderTotal = calcOrderTotal();
    return (
        <div>
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
                                {orderItems.map((oi) => (
                                    <tr class="cart_item">
                                        <td class="cart-product-name"> {oi.Name}<strong class="product-quantity"> × {oi.Quantity}</strong></td>
                                        <td class="cart-product-total"><span class="amount">${oi.UnitPrice}</span></td>  
                                        <td class="cart-product-total"><span class="amount">${oi.Quantity * oi.UnitPrice}</span></td>  
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr class="order-total">
                                    <th>Order Total</th>
                                    <td><strong><span class="amount"></span></strong></td>
                                    <td><strong><span class="amount">${orderTotal}</span></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div class="payment-method">
                        <div class="payment-accordion">
                            <div id="accordion">
                                <div class="card">
                                <div class="card-header" id="#payment-1">
                                    <h5 class="panel-title">
                                    <a class="" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Direct Bank Transfer.
                                    </a>
                                    </h5>
                                </div>
                                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                    <div class="card-body">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                    </div>
                                </div>
                                </div>
                                <div class="card">
                                <div class="card-header" id="#payment-2">
                                    <h5 class="panel-title">
                                    <a class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Cheque Payment
                                    </a>
                                    </h5>
                                </div>
                                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                    </div>
                                </div>
                                </div>
                                <div class="card">
                                <div class="card-header" id="#payment-3">
                                    <h5 class="panel-title">
                                    <a class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        PayPal
                                    </a>
                                    </h5>
                                </div>
                                <div id="collapseThree" class="collapse" data-parent="#accordion">
                                    <div class="card-body">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;