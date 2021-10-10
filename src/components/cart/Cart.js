import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;
    let maintotal = 0;
    for(const product of cart){
        maintotal = maintotal + product.price;
    }

    /* const totalReducer = (previous, product) => previous + product.price;
    let mainTotal = cart.reduce(totalReducer, 0); */
    
    const total = maintotal;
    const shipping = 7;
    const tax = ((total + shipping) / 15);
    const grandTotal = total + shipping + tax;

    return (
        <div>
             <h2>Order Summary</h2>
             <h4>Items Ordereds: {cart.length}</h4>
             <p>Total: {total.toFixed(2)}</p>
             <p>Shipping: {shipping.toFixed(2)}</p>
             <p>Tax: {tax.toFixed(2)}</p>
             <p>Product Name: </p>
             <h3>Grand-Total: {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;