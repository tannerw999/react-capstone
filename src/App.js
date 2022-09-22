import "./App.css";
import database from "./database";
import RestaurantCard from "./components/RestaurantCard";

function App() {
  const restaurants = database.map((item) => {
    return (
      <RestaurantCard title={item.restaurant} />
    )
  });
  return (
    <div>
      {restaurants}
    </div>
  )
 
}

export default App;
