const express = require("express");
const router = express.Router()
const authenticationController = require('../controllers/authentication')

router.post("/login", async(req, res)=>{
    //TODO: Login - To be implemented 
    const {username, password} = req.body
    console.log(username)
    console.log(password)
    console.log(req.body)
    const loginSuccess = authenticationController.login(username, password)

    if (loginSuccess){
        res.status(200).send({status: "Successful"})
    }else{
        res.status(401).send({status: "Fail"})
    }
    
})

router.post("/logout", async(req, res)=>{
    //TODO: To be implemented    
    res.sendStatus(200)
})



module.exports = router