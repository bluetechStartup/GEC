import axios from "axios"
import * as api from "./api"

// SERVICES types
const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST"
const GET_SERVICES_REQUEST_SUCCESS = "GET_SERVICES_REQUEST_SUCCESS"
const GET_SERVICES_REQUEST_FAILED = "GET_SERVICES_REQUEST_FAILED"


// SERVICES actions 
export const getServices = () => async dispatch =>{
    dispatch({type:GET_SERVICES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/service`)
        data.success ? 
            dispatch({type:GET_SERVICES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_SERVICES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_SERVICES_REQUEST_FAILED,payload: error.message})
    }
}


// SERVICES reducer
export const servicesReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_SERVICES_REQUEST:
            return { loading:true }
        
        case GET_SERVICES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_SERVICES_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}