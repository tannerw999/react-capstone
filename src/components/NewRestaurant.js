// import React, {useState} from 'react';
// import axios from 'axios';

// export default function NewRestaurant () {
    
//     const [restaurant, setRestaurant] = useState('')

//     const addRestaurant = () => {
//       axios.post('http://localhost:4646/api/restaurant', {restaurant})
//         .then(res => console.log(res.data))
//     }
    
//     return (
//       <div className="App">
//         <input placeholder='new restaurant' onChange={e => setRestaurant(e.target.value)}/>
//         <button onClick={() => addRestaurant()}>Add To List</button>
//       </div>
//     );
// }