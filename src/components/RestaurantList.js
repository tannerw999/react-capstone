import React from "react";

export default function RestaurantList(props) {

    function random() {
        const maxRestaurant = props.restaurants.length -1;
        const randomRestaurant = Math.floor((Math.random() * maxRestaurant) + 1);
        alert(props.restaurants[randomRestaurant].restaurant) 
      }

  return (
    <div>
      <div>
        {props.restaurants.map((restaurant) => {
          return (
            <div>
              <h1>{restaurant.restaurant}</h1>
            </div>
          );
        })}
        <button onClick={() => props.deleteRestaurant()}>
          Remove Restaurant
        </button>
      </div>
        <button onClick={() => random()}>Random</button>
    </div>
  );
}
