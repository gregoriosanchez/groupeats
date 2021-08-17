import axios from "axios";
import config from "../config/index.json";
const PATH = '/auth'

export const login = async (username, password)=>{
    const url = `${config.BASE_URL}${PATH}/login`
    const data = {
        username,
        password
    }
    const response = await axios.post(url, data)
    return response.data
}
