import axios from "axios"
import * as api from "./api"

// mouvement types
const GET_CIVILITIES_REQUEST = "GET_CIVILITIES_REQUEST"
const GET_CIVILITIES_REQUEST_SUCCESS = "GET_CIVILITIES_REQUEST_SUCCESS"
const GET_CIVILITIES_REQUEST_FAILED = "GET_CIVILITIES_REQUEST_FAILED"


// mouvement actions 
export const getCivilities= () => async dispatch =>{
    dispatch({type:GET_CIVILITIES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courrierCivilite`)
        data.success ? 
            dispatch({type:GET_CIVILITIES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_CIVILITIES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_CIVILITIES_REQUEST_FAILED,payload: error.message})
    }
}


// CIVILITIES reducer
export const civilitiesReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_CIVILITIES_REQUEST:
            return { loading:true }
        
        case GET_CIVILITIES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_CIVILITIES_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}