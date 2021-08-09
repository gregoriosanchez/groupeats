const express = require("express");
const router = express.Router()
const Restaurant = require('../models/restaurant')

router.get("/", async(req, res)=>{
    //TODO: Get all
    res.status(200).send(Restaurant)
})

router.get("/:id", async(req, res)=>{
    //TODO: Get one by id
    const restaurant = Restaurant.filter((x)=>x._id === req.params.id)[0]
    res.status(200).send(restaurant)
})

router.post("/", async(req, res)=>{
    //TODO: Create
    res.status(200).send(req.body)
})

router.put("/:id", async(req, res)=>{
    //TODO: Update
    const restaurant = req.body
    console.log(restaurant)

    res.status(204)
})

router.delete("/:id", async(req, res)=>{
    //TODO: Delete
    const id = res.params.id
    console.log(id)

    res.status(204)
})

module.exports = router