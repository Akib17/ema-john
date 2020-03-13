import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    return (
        <div>
            <h5> Total: {cart.length} </h5>
        </div>
    );
};

export default Cart;