import axios from "axios"
import * as api from "./api"

// STATUS types
const GET_STATUS_REQUEST = "GET_STATUS_REQUEST"
const GET_STATUS_REQUEST_SUCCESS = "GET_STATUS_REQUEST_SUCCESS"
const GET_STATUS_REQUEST_FAILED = "GET_STATUS_REQUEST_FAILED"


// STATUS actions 
export const getStatus= () => async dispatch =>{
    dispatch({type:GET_STATUS_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courrierStatus`)
        data.success ? 
            dispatch({type:GET_STATUS_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_STATUS_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_STATUS_REQUEST_FAILED,payload: error.message})
    }
}


// STATUS reducer
export const statusReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_STATUS_REQUEST:
            return { loading:true }
        
        case GET_STATUS_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_STATUS_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}