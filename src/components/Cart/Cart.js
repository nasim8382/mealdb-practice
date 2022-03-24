import React from 'react';
import './Cart.css'

const Cart = ({order}) => {
    return (
        <div className='cart'>
            <div className='cart-text'>
                <h2>Meal Name:</h2>
                <h3>{order}</h3>
            </div>
        </div>
    );
};

export default Cart;