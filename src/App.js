import {useState} from 'react';
// import database from "./server/database";
// import RestaurantList from "./components/RestaurantList";
import axios from 'axios'
import "./App.css";

export default function App() {
  
  const [restaurant, setRestaurant] = useState('')
  
  const addRestaurant = () => {
    axios.post('http://localhost:4646/api/restaurant', {restaurant})
    .then(res => console.log(res.data))
  }
  
  // const deleteRestaurant = () => {
  //   axios.delete(`http://localhost:4646/api/delete/restaurant/${indexSelectDelete.value}`)
  //   .then((res) => {
  //     alert(res.data);
  //     });
  // }

  return (
    <div className="App">
      <input placeholder='restaurant' onChange={e => setRestaurant(e.target.value)}/>
      <button onClick={() => addRestaurant()}>Add To List</button>
    </div>
  );
}
// const restaurants = database.map((item) => {
//   return (
//     <RestaurantList title={item.restaurant} />
//   )
// });

// return (
//   <div>
//     {restaurants}
//   </div>
// ); 