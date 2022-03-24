import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [])

    const handleOrder = meal => {
        const mealName = meal.strMeal;
        setOrder(mealName);
    } 

    return (
        <div className='meals-container'>
          <div className='meals-details'>
            {
                meals.map(meal => <Meal
                key={meal.idMeal}
                meal={meal}
                handleOrder={handleOrder}
            ></Meal>)
            }
          </div>
          <div className='order-cart'>
            <Cart order={order}></Cart>
          </div>
        </div>
    );
};

export default Meals;