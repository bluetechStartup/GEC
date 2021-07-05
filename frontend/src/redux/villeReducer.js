import axios from "axios"
import * as api from "./api"

// VILLES types
const GET_VILLES_REQUEST = "GET_VILLES_REQUEST"
const GET_VILLES_REQUEST_SUCCESS = "GET_VILLES_REQUEST_SUCCESS"
const GET_VILLES_REQUEST_FAILED = "GET_VILLES_REQUEST_FAILED"


// VILLES actions 
export const getVilles= () => async dispatch =>{
    dispatch({type:GET_VILLES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/ville`)
        data.success ? 
            dispatch({type:GET_VILLES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_VILLES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_VILLES_REQUEST_FAILED,payload: error.message})
    }
}


// VILLES reducer
export const villesReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_VILLES_REQUEST:
            return { loading:true }
        
        case GET_VILLES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_VILLES_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}