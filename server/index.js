require("dotenv").config();
const { SERVER_PORT } = process.env;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const {getRestaurants, addRestaurant, deleteRestaurant} = require('./controller')

// app.get("/api/restaurant", (req, res) => {
//   console.log("endpoint hit");
//   res.status(200).send("future info of restaurants and stuff");
// });

app.get('/api/restaurant', getRestaurants)
app.post('/api/restaurant', addRestaurant)
app.delete('api/delete/restaurant/:id', deleteRestaurant)


app.listen(SERVER_PORT, () =>
  console.log(`Server is live on port ${SERVER_PORT}.`)
);
