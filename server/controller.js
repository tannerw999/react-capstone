const restaurants = require('./database.json')
let id = 6

module.exports = {

    getRestaurants: (req, res) => {
        res.status(200).send(restaurants)
    },

    addRestaurant: (req, res) => {
        const {restaurant} = req.body

        const newRestaurant = {
            id,
            restaurant
        }
        id++

        restaurants.push(newRestaurant)
        console.log('you added a restaurant!', newRestaurant)
        
        res.status(200).send(restaurants)
    },

    deleteRestaurant: (req, res) => {
        console.log("ENDPOINT HIT HIT HIT");
        console.log(req.params);

        const indexToDelete = +req.params.id;

        restaurants.splice(indexToDelete, 1);

        res.status(200).send(restaurants);
    }
}