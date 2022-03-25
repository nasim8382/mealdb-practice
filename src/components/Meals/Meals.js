import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../Orders/Order';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [])

    const handleOrder = order => {
        const newOrder = [...orders, order];
        setOrders(newOrder);
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
            <div className='cart'>
              <h1>Your Orders: {orders.length}</h1>
              <h2>Meal Names:</h2>
              {
                orders.map(order => 
                  <div>
                      <li>{order.strMeal}</li>
                  </div>)
              }
            </div>
            {/* {
              orders.map(order => <Order order={order}></Order>)
            } */}
          </div>
        </div>
    );
};

export default Meals;