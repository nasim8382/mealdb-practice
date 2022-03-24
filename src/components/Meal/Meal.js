import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Meal.css'

const Meal = ({meal, handleOrder}) => {
    const {strMealThumb, strCategory, strArea, strInstructions} = meal;
    return (
        <div className='meals'>
            <div className='meal'>
                <img src={strMealThumb} alt="" />
                <h2>Food type: {strCategory}</h2>
                <h3>Food locate in: {strArea}</h3>
                <p>{strInstructions.slice(0, 200)}</p>
                <button onClick={ () => handleOrder (meal)} className='order-btn'>
                    <p>Order Now</p>
                    <FontAwesomeIcon className='order-icon' icon={faCartShopping}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Meal;