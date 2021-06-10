import {
    USER_REQUEST,
    USER_REQUEST_SUCCESS,
    USER_REQUEST_FAILED,
    USER_LOGOUT} from './userTypes';
import axios from 'axios'

export const login =  (username, password) => async dispatch =>{
    dispatch({type:USER_REQUEST})
    try {
        const {data} = await axios.post("http://localhost:3005/api/users/auth",{username, password})
        data.success ? 
            dispatch({type:USER_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:USER_REQUEST_FAILED, payload: data.message})

        localStorage.setItem("user",JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_REQUEST_FAILED,payload: error})
    }
    
}

export const logout = ()=>{
    localStorage.removeItem("user")
    return{ type:USER_LOGOUT }
}