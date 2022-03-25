import React from 'react';
import './Order.css';

const Order = ({order}) => {
    return (
        <div>
            <h2>Meal Name:</h2>
            <h3>{order.strMeal}</h3>
        </div>
    );
};

export default Order;