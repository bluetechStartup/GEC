import axios from "axios"
import * as api from "./api"

// change password types
const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST"
const CHANGE_PASSWORD_REQUEST_SUCCESS = "CHANGE_PASSWORD_REQUEST_SUCCESS"
const CHANGE_PASSWORD_REQUEST_FAILED = "CHANGE_PASSWORD_REQUEST_FAILED"


// change password actions 
export const changePassword = (PASSWORD,OLDPASSWORD,id) => async dispatch =>{
    dispatch({type:CHANGE_PASSWORD_REQUEST})
    try {
        const {data} = await axios.put(`${api.URL}/api/users/${id}/updatePassword`,{NEW_PASSWORD:PASSWORD,OLD_PASSWORD:OLDPASSWORD})
        console.log("change password data:",data)
        data.success ? 
            dispatch({type:CHANGE_PASSWORD_REQUEST_SUCCESS, payload: data})
            : dispatch({type:CHANGE_PASSWORD_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:CHANGE_PASSWORD_REQUEST_FAILED,payload: error.message})
    }
}


// change password reducer
export const changePasswordReducer = (state={}, action) =>{
    switch (action.type) {
        case CHANGE_PASSWORD_REQUEST:
            return { loading:true }
        
        case CHANGE_PASSWORD_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case CHANGE_PASSWORD_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}