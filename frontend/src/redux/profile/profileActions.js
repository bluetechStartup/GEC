import * as api from '../api';
import axios from "axios";
import {
    // for single profile 
    GET_PROFILE_REQUEST,
    GET_PROFILE_REQUEST_SUCCESS,
    GET_PROFILE_REQUEST_FAILED,

    // for profile creation or update
    CREATE_OR_UPDATE_PROFILE_REQUEST,
    CREATE_OR_UPDATE_PROFILE_REQUEST_SUCCESS,
    CREATE_OR_UPDATE_PROFILE_REQUEST_FAILED,

    DELETE_PROFILE_REQUEST,
    DELETE_PROFILE_REQUEST_SUCCESS,
    DELETE_PROFILE_REQUEST_FAILED,

    // for all profiles
    GET_ALL_PROFILES_REQUEST,
    GET_ALL_PROFILES_REQUEST_SUCCESS,
    GET_ALL_PROFILES_REQUEST_FAILED,
    CREATE_OR_UPDATE_PROFILE_FINISH
} from "./profileTypes";



// actions for single profile

export const getProfile = (id) => async (dispatch) =>{
    dispatch({type:GET_PROFILE_REQUEST})
// console.log(userData)
    try {
        const {data} = await axios.get(`${api.URL}/api/profile/${id}`)
        console.log(data)
        data.success ? 
            dispatch({type:GET_PROFILE_REQUEST_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:GET_PROFILE_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_PROFILE_REQUEST_FAILED,payload: error.message});
    }
}




// actions for profile creation and update

export const createProfile = (prof,profilDescr) => async (dispatch) =>{
    dispatch({type:CREATE_OR_UPDATE_PROFILE_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/profile`,{PROFIL_CODE:prof,PROFIL_DESCR:profilDescr})
        console.log(data)
        data.success ? 
            dispatch({type:CREATE_OR_UPDATE_PROFILE_REQUEST_SUCCESS, payload: data.profile})
            : dispatch({type:CREATE_OR_UPDATE_PROFILE_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:CREATE_OR_UPDATE_PROFILE_REQUEST_FAILED,payload: error.message});
    }
}

export const updateProfile = (id,prof,profilDescr) => async (dispatch) =>{
    dispatch({type:CREATE_OR_UPDATE_PROFILE_REQUEST})
    try {
        const {data} = await axios.put(`${api.URL}/api/profile/${id}`,{PROFIL_CODE:prof,PROFIL_DESCR:profilDescr})
        data.success ? 
            dispatch({type:CREATE_OR_UPDATE_PROFILE_REQUEST_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:CREATE_OR_UPDATE_PROFILE_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:CREATE_OR_UPDATE_PROFILE_REQUEST_FAILED,payload: error.message});
    }
}

export const deleteProfile = (id) => async (dispatch) =>{
    dispatch({type:DELETE_PROFILE_REQUEST})
    try {
        const {data} = await axios.delete(`${api.URL}/api/profile/${id}`)
        console.log(data)
        data.success ? 
            dispatch({type:DELETE_PROFILE_REQUEST_SUCCESS, payload: {success:data.success }})
            : dispatch({type:DELETE_PROFILE_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:DELETE_PROFILE_REQUEST_FAILED,payload: error.message});
    }
}

export const addProfileFinish = ()=> {return ({ type: CREATE_OR_UPDATE_PROFILE_FINISH })}

// actions for all profiles

export const getAllProfiles = () => async (dispatch) =>{
    dispatch({type:GET_ALL_PROFILES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/profile`)
        data.success ? 
            dispatch({type:GET_ALL_PROFILES_REQUEST_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:GET_ALL_PROFILES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_ALL_PROFILES_REQUEST_FAILED,payload: error.message});
    }
}