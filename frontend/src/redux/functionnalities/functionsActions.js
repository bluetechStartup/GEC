import * as api from '../api';
import axios from "axios";
import {
    GET_FUNCTION_REQUEST,
    GET_FUNCTION_REQUEST_SUCCESS,
    GET_FUNCTION_REQUEST_FAILED,

    UPDATE_RIGHTS_BY_PROFILE_REQUEST,
    UPDATE_RIGHTS_BY_PROFILE_REQUEST_SUCCESS,
    UPDATE_RIGHTS_BY_PROFILE_REQUEST_FAILED,
    UPDATE_RIGHTS_BY_PROFILE_FINISH,

    GET_ALL_FUNCTIONS_REQUEST,
    GET_ALL_FUNCTIONS_REQUEST_SUCCESS,
    GET_ALL_FUNCTIONS_REQUEST_FAILED,

    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST,
    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_SUCCESS,
    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_FAILED
} from "./functionsTypes"


// actions for single functionnality 

export const getFunc = (id) => async (dispatch) =>{
    dispatch({type:GET_FUNCTION_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/profile/${id}`)
        console.log(data)
        data.success ? 
            dispatch({type:GET_FUNCTION_REQUEST_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:GET_FUNCTION_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_FUNCTION_REQUEST_FAILED,payload: error.message});
    }
}

export const updateFuncByProfile = (dataInfo) => async (dispatch) =>{
    dispatch({type:UPDATE_RIGHTS_BY_PROFILE_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/fonctionnaliteprofile`,dataInfo)
        console.log(data)
        data.success ? 
            dispatch({type:UPDATE_RIGHTS_BY_PROFILE_REQUEST_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:UPDATE_RIGHTS_BY_PROFILE_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:UPDATE_RIGHTS_BY_PROFILE_REQUEST_FAILED,payload: error.message});
    }
}

export const updateFuncFinished = ()=> {return ({ type: UPDATE_RIGHTS_BY_PROFILE_FINISH })}

// actions for all functionnalities 

export const getAllFuncs = () => async (dispatch) =>{
    dispatch({type:GET_ALL_FUNCTIONS_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/fonctionnalite`)
        data.success ? 
            dispatch({type:GET_ALL_FUNCTIONS_REQUEST_SUCCESS, payload: {success:data.success, funcs:data.data }})
            : dispatch({type:GET_ALL_FUNCTIONS_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_ALL_FUNCTIONS_REQUEST_FAILED,payload: error.message});
    }
}


// actions for all functionnalities 

export const getAllFuncsByProfile = (id) => async (dispatch) =>{
    dispatch({type:GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/fonctionnaliteprofile/profile/${id}`)
        data.success ? 
            dispatch({type:GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_SUCCESS, payload: {success:data.success, profileFuncs:data.data }})
            : dispatch({type:GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_FAILED,payload: error.message});
    }
}