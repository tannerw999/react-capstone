const restaurants = require('./database.json')
let id = 6

module.exports = {

    getRestaurants: (req, res) => {
        console.log("hit  get restaurants", restaurants)
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
        restaurants.splice(restaurants.length - 1, 1)
        console.log('restaurant deleted', restaurants)
        res.status(200).send(restaurants)
    }
}