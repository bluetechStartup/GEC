// all about users state 

import axios from 'axios';
import * as api from '../api';
import {
    // for user only
    USER_REQUEST,
    USER_REQUEST_SUCCESS,
    USER_REQUEST_FAILED,
    USER_LOGOUT,

    // user with routes
    USER_WITH_ROUTES_REQUEST,
    USER_WITH_ROUTES_SUCCESS,
    USER_WITH_ROUTES_FAILED

} from './userTypes';


// actions for user that is logged in or out only

export const login =  (username, password) => async dispatch =>{
    dispatch({type:USER_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/auth`,{username, password})
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

// actions for user creation and update

export const createUser =  (userData) => async dispatch =>{
    dispatch({type:USER_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/auth`,{userData})
        data.success ? 
            dispatch({type:USER_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:USER_REQUEST_FAILED, payload: data.message})

        localStorage.setItem("user",JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_REQUEST_FAILED,payload: error})
    }
    
}

export const updateUser =  (userData) => async dispatch =>{
    dispatch({type:USER_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/auth`,{userData})
        data.success ? 
            dispatch({type:USER_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:USER_REQUEST_FAILED, payload: data.message})

        localStorage.setItem("user",JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_REQUEST_FAILED,payload: error})
    }
    
}

export const disableUser =  (id) => async dispatch =>{
    dispatch({type:USER_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/auth`,{id})
        data.success ? 
            dispatch({type:USER_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:USER_REQUEST_FAILED, payload: data.message})

        localStorage.setItem("user",JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_REQUEST_FAILED,payload: error})
    }
    
}

export const unableUser =  (id) => async dispatch =>{
    dispatch({type:USER_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/auth`,{id})
        data.success ? 
            dispatch({type:USER_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:USER_REQUEST_FAILED, payload: data.message})

        localStorage.setItem("user",JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_REQUEST_FAILED,payload: error})
    }
    
}



// actions for user that interracts with riths on routes

