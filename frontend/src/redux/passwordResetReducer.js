import axios from "axios"
import * as api from "./api"

// PASSWORD RESET types
const PASSWORD_RESET_REQUEST = "PASSWORD_RESET_REQUEST"
const PASSWORD_RESET_REQUEST_SUCCESS = "PASSWORD_RESET_REQUEST_SUCCESS"
const PASSWORD_RESET_REQUEST_FAILED = "PASSWORD_RESET_REQUEST_FAILED"

const SUBMIT_TOKEN_REQUEST = "SUBMIT_TOKEN_REQUEST"
const SUBMIT_TOKEN_SUCCESS = "SUBMIT_TOKEN_SUCCESS"
const SUBMIT_TOKEN_FAILED = "SUBMIT_TOKEN_FAILED"


// PASSWORD RESET actions 
export const passwordReset = (EMAIL) => async dispatch =>{
    dispatch({type:PASSWORD_RESET_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/forgetPassword`,{EMAIL})
        data.success ? 
            dispatch({type:PASSWORD_RESET_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:PASSWORD_RESET_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:PASSWORD_RESET_REQUEST_FAILED,payload: error.message})
    }
}

export const submitToken = (token,PASSWORD) => async dispatch =>{
    console.log("token:",token,"password:",PASSWORD)
    dispatch({type:SUBMIT_TOKEN_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/users/resetpassword/${token}`,{newPassword:PASSWORD})
        console.log("data reset:",data)
        data ? 
            dispatch({type:SUBMIT_TOKEN_SUCCESS, payload: data.data})
            : dispatch({type:SUBMIT_TOKEN_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:SUBMIT_TOKEN_FAILED,payload: error.message})
    }
}


// PASSWORD RESET reducer
export const passwordResetReducer = (state={}, action) =>{
    switch (action.type) {
        case PASSWORD_RESET_REQUEST:
            return { loading:true }
        
        case PASSWORD_RESET_REQUEST_SUCCESS:
            return { loading:false, successEmail: true }
        
        case PASSWORD_RESET_REQUEST_FAILED:
            return { loading:false, successEmail: false}

        case SUBMIT_TOKEN_REQUEST:
            return { loading:true }

        case SUBMIT_TOKEN_SUCCESS:
            return { loading:false, success:true}
        
        case SUBMIT_TOKEN_FAILED:
            return { loading:false, success:false, errorToken:"Token is not valid"}

        default:return { ...state }
    }
}