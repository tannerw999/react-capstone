import React from "react";

export default function RestaurantList(props) {
  console.log(props);
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
    </div>
  );
}
