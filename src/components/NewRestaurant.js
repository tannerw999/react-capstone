import React, {useState} from 'react';
import axios from 'axios';
import './RestaurantList.css';

export default function NewRestaurant (props) {
    
    const [restaurant, setRestaurant] = useState('')

    const addRestaurant = () => {
      axios.post('http://localhost:4646/api/restaurant', {restaurant})
        .then(res => {
            setRestaurant('')
            props.getRestaurants()})
    }
     
    return (
      <div>
        <input value={restaurant} type="text" placeholder='New Restaurant' onChange={e => setRestaurant(e.target.value)}/>
        <button onClick={addRestaurant}>Add To List</button>
      </div>
    );
}