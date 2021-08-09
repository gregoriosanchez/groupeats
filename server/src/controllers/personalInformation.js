//Code all the business logic in here

const PersonalInformation = require('../models/personalInformation')

const getPersonalInformations = ()=>{
    //TODO: To be implemented
    return PersonalInformation
}

const getPersonalInformationById = (id)=>{
    //TODO: To be implemented
    const personalInformation = PersonalInformation.filter((x)=>x._id === id)[0]
    return personalInformation
}

const createPersonalInformation = (personalInformation)=>{
    //TODO: To be implemented
    console.log(personalInformation)
    return personalInformation
}

const updatePersonalInformation = (id, personalInformation)=>{
    //TODO: To be implemented
    console.log(id)
    console.log(personalInformation)
}

const deletePersonalInformation = (id)=>{
    //TODO: To be implemented
    console.log(id)
}

module.exports = {
    getPersonalInformations,
    getPersonalInformationById,
    createPersonalInformation,
    updatePersonalInformation,
    deletePersonalInformation
}