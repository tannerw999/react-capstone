import React from "react";
import './RestaurantList.css'

export default function RestaurantList(props) {

    function random() {
        const maxRestaurant = props.restaurants.length -1;
        const randomRestaurant = Math.floor((Math.random() * maxRestaurant) + 1);
        alert(props.restaurants[randomRestaurant].restaurant) 
      }

  return (
    <div>
          <button className='random' onClick={() => random()}>Random</button>
      <div className='scrollable-div'>
        {props.restaurants.map((restaurant) => {
          return (
            <div className='list'>
              <h1>{restaurant.restaurant}</h1>
            </div>
          );
        })}
      </div>
        <button onClick={() => props.deleteRestaurant()}>
          Remove Restaurant
        </button>
    </div>
  );
}
