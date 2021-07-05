import axios from "axios"
import * as api from "./api"

// ACTIONS types
const GET_ACTIONS_REQUEST = "GET_ACTIONS_REQUEST"
const GET_ACTIONS_REQUEST_SUCCESS = "GET_ACTIONS_REQUEST_SUCCESS"
const GET_ACTIONS_REQUEST_FAILED = "GET_ACTIONS_REQUEST_FAILED"


// ACTIONS actions 
export const getActions = () => async dispatch =>{
    dispatch({type:GET_ACTIONS_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courierAction`)
        data.success ? 
            dispatch({type:GET_ACTIONS_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_ACTIONS_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_ACTIONS_REQUEST_FAILED,payload: error.message})
    }
}


// ACTIONS reducer
export const actionsReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_ACTIONS_REQUEST:
            return { loading:true }
        
        case GET_ACTIONS_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_ACTIONS_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}