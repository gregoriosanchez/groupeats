const express = require("express");
const router = express.Router()
const userController = require('../controllers/user')

router.get("/", async(req, res)=>{
    //TODO: Get all
    const users = userController.getUsers()
    res.status(200).send(users)
})

router.get("/:id", async(req, res)=>{
    //TODO: Get one by id
    const user = userController.getUserById(req.params.id)
    res.status(200).send(user)
})

router.post("/", async(req, res)=>{
    //TODO: Create
    const user = userController.createUser(req.body)
    res.status(200).send(user)
})

router.put("/:id", async(req, res)=>{
    //TODO: Update
    const id = req.params.id
    const body = req.body

    userController.updateUser(id, body)
    res.status(204)
})

router.delete("/:id", async(req, res)=>{
    //TODO: Delete
    const id = req.params.id

    userController.deleteUser(id)
    res.status(204)
})

module.exports = router