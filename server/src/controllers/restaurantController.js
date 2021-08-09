//Code all the business logic in here

const Restaurant = require('../models/restaurant')

const getRestaurants = ()=>{
    //TODO: To be implemented
    return Restaurant
}

const getRestaurantById = (id)=>{
    //TODO: To be implemented
    const restaurant = Restaurant.filter((x)=>x._id === id)[0]
    return restaurant
}

const createRestaurant = (restaurant)=>{
    //TODO: To be implemented
    console.log(restaurant)
    return restaurant
}

const updateRestaurant = (id, restaurant)=>{
    //TODO: To be implemented
    console.log(id)
    console.log(restaurant)
}

const deleteRestaurant = (id)=>{
    //TODO: To be implemented
    console.log(id)
}

module.exports = {
    getRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
}