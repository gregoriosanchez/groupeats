const express = require("express");
const router = express.Router()
const restaurantController = require('../controllers/restaurantController')

router.get("/", async(req, res)=>{
    //TODO: Get all
    const restaurant = restaurantController.getRestaurants()
    res.status(200).send(restaurant)
})

router.get("/:id", async(req, res)=>{
    //TODO: Get one by id
    const restaurant = restaurantController.getRestaurantById(req.params.id)
    res.status(200).send(restaurant)
})

router.post("/", async(req, res)=>{
    //TODO: Create
    const restaurant = restaurantController.createRestaurant(req.body)
    res.status(200).send(restaurant)
})

router.put("/:id", async(req, res)=>{
    //TODO: Update
    const id = req.params.id
    const body = req.body

    restaurantController.updateRestaurant(id, body)
    res.status(204)
})

router.delete("/:id", async(req, res)=>{ 
    //TODO: Delete
    const id = req.params.id

    restaurantController.deleteRestaurant(id)
    res.status(204)
})

module.exports = router