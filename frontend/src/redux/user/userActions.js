// all about users state 

import axios from 'axios';
import * as api from '../api';
import {
    
     // for user login and logout only
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
    USER_CREATE_OR_UPDATE_FAILED,
    USER_CREATE_OR_UPDATE_SUCCESS,
    USER_CREATE_OR_UPDATE_FINISH,

    // for single user
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILED,

    // for all users
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILED,

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
            dispatch({type:USER_CREATE_OR_UPDATE_SUCCESS, payload: {success:data.success, id:data.data.insertId }})
            : dispatch({type:USER_CREATE_OR_UPDATE_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:USER_CREATE_OR_UPDATE_FAILED,payload: error.message});
    }
    
}

export const updateUser =  (userData, token) => async dispatch =>{

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      };
      console.log("config:",config)
    dispatch({type:USER_CREATE_OR_UPDATE_REQUEST})
    try {
        const {data} = await axios.put(`${api.URL}/api/users`, userData , config)
        
        data.success ? 
            dispatch({type:USER_CREATE_OR_UPDATE_SUCCESS, payload: data.data})
            : dispatch({type:USER_CREATE_OR_UPDATE_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:USER_CREATE_OR_UPDATE_FAILED,payload: error.message})
    }
    
}


export const finishRequest =  () =>{
    return {type:USER_CREATE_OR_UPDATE_FINISH}
}


// actions for a single user interraction

export const getSingleUser =  (userId) => async dispatch =>{
    dispatch({type:GET_USER_BY_ID_REQUEST})
    
    try {
        const {data} = await axios.get(`${api.URL}/api/users/${userId}`)
        data.success ? 
            dispatch({type:GET_USER_BY_ID_SUCCESS, payload: {success:data.success, ...data.data }})
            : dispatch({type:GET_USER_BY_ID_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_USER_BY_ID_FAILED,payload: error.message});
    }
    
}

// actions for all users 

export const getAllUsers =  () => async dispatch =>{
    dispatch({type:GET_ALL_USERS_REQUEST})
    
    try {
        const {data} = await axios.get(`${api.URL}/api/users`)
        console.log(data)
        data.success ? 
            dispatch({type:GET_ALL_USERS_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:GET_ALL_USERS_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_ALL_USERS_FAILED,payload: error.message});
    }
    
}