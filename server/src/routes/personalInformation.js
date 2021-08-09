const express = require("express");
const router = express.Router()
const PersonalInformation = require('../models/personalInformation')

router.get("/", async(req, res)=>{
    //TODO: Get all
    res.status(200).send(PersonalInformation)
})

router.get("/:id", async(req, res)=>{
    //TODO: Get one by id
    const personalInformation = PersonalInformation.filter((x)=>x._id === req.params.id)[0]
    res.status(200).send(personalInformation)
})

router.post("/", async(req, res)=>{
    //TODO: Create
    res.status(200).send(req.body)
})

router.put("/:id", async(req, res)=>{
    //TODO: Update
    const personalInfo = req.body
    console.log(personalInfo)

    res.status(204)
})

router.delete("/:id", async(req, res)=>{
    //TODO: Delete
    const id = res.params.id
    console.log(id)

    res.status(204)
})

module.exports = router