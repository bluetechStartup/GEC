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
    USER_WITH_ROUTES_FAILED,

    // create user or update
    USER_CREATE_OR_UPDATE_REQUEST,
    USER_CREATE_FAILED,
    USER_CREATE_SUCCESS,
    USER_UPDATE_FAILED,
    USER_UPDATE_SUCCESS,
    USER_CREATE_OR_UPDATE_FINISH

} from './userTypes';


// actions for user that is logged in or out only

export const login =  (email, password) => async dispatch =>{
    dispatch({type:USER_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/auth`,{email, password})
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
    dispatch({type:USER_CREATE_OR_UPDATE_REQUEST})
    console.log(userData)
    try {
        const {data} = await axios.post(`${api.URL}/api/users/register`,{...userData})
        console.log(data)
        data.success ? 
            dispatch({type:USER_CREATE_SUCCESS, payload: {success:data.success, id:data.data.insertId }})
            : dispatch({type:USER_CREATE_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:USER_CREATE_FAILED,payload: error.message});
    }
    
}

export const updateUser =  (userData,id) => async dispatch =>{
    dispatch({type:USER_CREATE_OR_UPDATE_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/${id}`,{userData})
        data.success ? 
            dispatch({type:USER_UPDATE_SUCCESS, payload: data.data})
            : dispatch({type:USER_UPDATE_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:USER_UPDATE_FAILED,payload: error})
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

export const finishRequest =  () =>{
    return {type:USER_CREATE_OR_UPDATE_FINISH}
}


// actions for user that interracts with riths on routes

