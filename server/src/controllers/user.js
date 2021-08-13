//Code all the business logic in here

const User = require('../models/user')

const getUsers = ()=>{
    //TODO: To be implemented
    return User
}

const getUserById = (id)=>{
    //TODO: To be implemented
    const user = User.filter((x)=>x._id === id)[0]
    return user
}

const createUser = (user)=>{
    //TODO: To be implemented
    console.log(user)
    return user
}

const updateUser = (id, user)=>{
    //TODO: To be implemented
    console.log(id)
    console.log(user)
}

const deleteUser = (id)=>{
    //TODO: To be implemented
    console.log(id)
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}