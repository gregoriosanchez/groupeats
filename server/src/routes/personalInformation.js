const express = require("express");
const router = express.Router()
const personalInformationController = require('../controllers/personalInformation')

router.get("/", async(req, res)=>{
    //TODO: Get all
    const personalInformations = personalInformationController.getPersonalInformations()
    res.status(200).send(personalInformations)
})

router.get("/:id", async(req, res)=>{
    //TODO: Get one by id
    const personalInformation = personalInformationController.getPersonalInformationById(req.params.id)
    res.status(200).send(personalInformation)
})

router.post("/", async(req, res)=>{
    //TODO: Create
    const personalInformation = personalInformationController.createPersonalInformation(req.body)
    res.status(200).send(personalInformation)
})

router.put("/:id", async(req, res)=>{
    //TODO: Update
    const id = req.params.id
    const body = req.body

    personalInformationController.updatePersonalInformation(id, body)
    res.status(204)
})

router.delete("/:id", async(req, res)=>{
    //TODO: Delete
    const id = req.params.id

    personalInformationController.deletePersonalInformation(id)
    res.status(204)
})

module.exports = router