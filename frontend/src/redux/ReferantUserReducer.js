import axios from "axios"
import * as api from "./api"

// REFERANTS USERS types
const GET_REFERANTS_BY_SERVICE_REQUEST = "GET_REFERANTS_BY_SERVICE_REQUEST"
const GET_REFERANTS_BY_SERVICE_REQUEST_SUCCESS = "GET_REFERANTS_BY_SERVICE_REQUEST_SUCCESS"
const GET_REFERANTS_BY_SERVICE_REQUEST_FAILED = "GET_REFERANTS_BY_SERVICE_REQUEST_FAILED"


// REFERANTS USERS actions 
export const getReferantsUsers = id => async dispatch =>{
    dispatch({type:GET_REFERANTS_BY_SERVICE_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/users/userbyservice/${id}`)
        console.log("data:",data,"id:",id)
        data ? 
            dispatch({type:GET_REFERANTS_BY_SERVICE_REQUEST_SUCCESS, payload: data})
            : dispatch({type:GET_REFERANTS_BY_SERVICE_REQUEST_FAILED, payload: "No users !"})
    } catch (error) {
        dispatch({type:GET_REFERANTS_BY_SERVICE_REQUEST_FAILED,payload: error.message})
    }
}


// REFERANTS USERS reducer
export const referantsUsersReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_REFERANTS_BY_SERVICE_REQUEST:
            return { loading:true }
        
        case GET_REFERANTS_BY_SERVICE_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_REFERANTS_BY_SERVICE_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}