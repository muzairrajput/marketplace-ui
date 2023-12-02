import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MerchantOrders = () => {    
    const [orderItems, setOrderItems] = useState([]);
    const [orderId, setOrderId] = useState(0);
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
    }
    useEffect(() => {
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
                                            <tr>
                                                {orderItems.length > 0 && (
                                                    <td colSpan={3}>
                                                    <button onClick={() => SubmitUpdate()}>
                                                        Submit
                                                    </button>                                                            
                                                    </td>
                                                )}
                                            </tr>
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