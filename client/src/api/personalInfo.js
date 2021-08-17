import axios from "axios";
import config from "../config/index.json";
const PATH = '/personal-info'

export const getPersonalInfoList = async ()=>{
    const url = `${config.BASE_URL}${PATH}`
    const response = await axios.get(url)
    return response.data
}

export const getPersonalInfoById = async (id)=>{
    const url = `${config.BASE_URL}${PATH}/${id}`
    const response = await axios.get(url)
    return response.data
}

export const createPersonalInfo = async (data)=>{
    const url = `${config.BASE_URL}${PATH}`
    const response = await axios.post(url, data)
    return response
}

export const updatePersonalInfo = async (id, data)=>{
    const url = `${config.BASE_URL}${PATH}/${id}`
    const response = await axios.put(url, data)
    return response
}

export const deletePersonalInfo = async (id)=>{
    const url = `${config.BASE_URL}${PATH}/${id}`
    const response = await axios.delete(url)
    return response
}