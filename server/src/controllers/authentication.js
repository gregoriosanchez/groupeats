//Code all the business logic in here
const User = require('../models/user')

const login = (username, password)=>{
    //TODO: To be implemented
    const user = User.filter(x => x.username == username && x.password == password)[0] 
    const loginSuccess = user ? true : false
    return loginSuccess
}

const logout = ()=>{
    //TODO: To be implemented
}

module.exports = {
    login,
    logout
}