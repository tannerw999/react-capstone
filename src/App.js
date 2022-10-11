import {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import NewRestaurant from './components/NewRestaurant';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';


export default function App() {
  
  const [restaurant, setRestaurant] = useState({})
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = () => {
    console.log('getRestaurants')
    axios.get('http://localhost:4646/api/restaurants')
    .then((res) => setRestaurants(res.data))
  }
  
  const addRestaurant = () => {
    axios.post('http://localhost:4646/api/restaurant', {restaurant})
    .then(res => console.log(res.data))
  }
  
  const deleteRestaurant = () => {
    axios.delete(`http://localhost:4646/api/restaurant`)
    .then((res) => {
      setRestaurants(res.data);
      });
  }
    useEffect(() => {
      console.log('hit useEffect')
      getRestaurants()
    }, [])

  return (
    <div className="App">
      <Header />
      <NewRestaurant
        addRestaurant = {addRestaurant}
        getRestaurants = {getRestaurants} />
      <RestaurantList 
        restaurants = {restaurants}
        deleteRestaurant ={deleteRestaurant} />
      <Footer />
    </div>
  );
}
