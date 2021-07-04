import axios from "axios"
import * as api from "./api"

// annexe types
const ADD_ANNEXE_REQUEST = "ADD_ANNEXE_REQUEST"
const ADD_ANNEXE_REQUEST_SUCCESS = "ADD_ANNEXE_REQUEST_SUCCESS"
const ADD_ANNEXE_REQUEST_FAILED = "ADD_ANNEXE_REQUEST_FAILED"

// delete annexe types
const REMOVE_ANNEXE_REQUEST = "REMOVE_ANNEXE_REQUEST"
const REMOVE_ANNEXE_REQUEST_SUCCESS = "REMOVE_ANNEXE_REQUEST_SUCCESS"
const REMOVE_ANNEXE_REQUEST_FAILED = "REMOVE_ANNEXE_REQUEST_FAILED"

// all annex types
const GET_ANNEX_REQUEST = "GET_ANNEX_REQUEST"
const GET_ANNEX_REQUEST_SUCCESS = "GET_ANNEX_REQUEST_SUCCESS"
const GET_ANNEX_REQUEST_FAILED = "GET_ANNEX_REQUEST_FAILED"

// annexe actions
export const addAnnexe = (id,courrier) => async dispatch =>{
    dispatch({type:ADD_ANNEXE_REQUEST})
    console.log(id,courrier)
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    try {
        const {data} = await axios.post(`${api.URL}/api/courrier/courrierAnnexe/${id}`,courrier,config)
        data.success ? 
            dispatch({type:ADD_ANNEXE_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:ADD_ANNEXE_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:ADD_ANNEXE_REQUEST_FAILED,payload: error.message})
    }
}

// annexe actions
export const removeAnnexe = (id) => async dispatch =>{
    dispatch({type:REMOVE_ANNEXE_REQUEST})
    try {
        const {data} = await axios.delete(`${api.URL}/api/courrier/courrierAnnexe/${id}`)
        data.success ? 
            dispatch({type:REMOVE_ANNEXE_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:REMOVE_ANNEXE_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:REMOVE_ANNEXE_REQUEST_FAILED,payload: error.message})
    }
}


// all annex actions
export const getAnnex = (id) => async dispatch =>{
    dispatch({type:GET_ANNEX_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courrier/courrierAnnexe/${id}`)
        data.success ? 
            dispatch({type:GET_ANNEX_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_ANNEX_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_ANNEX_REQUEST_FAILED,payload: error.message})
    }
}


// annexe reducer
export const annexeReducer = (state={}, action) =>{
    switch (action.type) {
        case ADD_ANNEXE_REQUEST:
            return { loading:true }
        
        case ADD_ANNEXE_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case ADD_ANNEXE_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}

// removed annexe reducer
export const annexeRemovedReducer = (state={}, action) =>{
    switch (action.type) {
        case REMOVE_ANNEXE_REQUEST:
            return { loading:true }
        
        case REMOVE_ANNEXE_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case REMOVE_ANNEXE_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}

// all annex reducer
export const allAnnexReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_ANNEX_REQUEST:
            return { loading:true }
        
        case GET_ANNEX_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_ANNEX_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}