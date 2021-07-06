import axios from "axios"
import * as api from "./api"

// PASSWORD RESET types
const PASSWORD_RESET_REQUEST = "PASSWORD_RESET_REQUEST"
const PASSWORD_RESET_REQUEST_SUCCESS = "PASSWORD_RESET_REQUEST_SUCCESS"
const PASSWORD_RESET_REQUEST_FAILED = "PASSWORD_RESET_REQUEST_FAILED"


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


// PASSWORD RESET reducer
export const passwordResetReducer = (state={}, action) =>{
    switch (action.type) {
        case PASSWORD_RESET_REQUEST:
            return { loading:true }
        
        case PASSWORD_RESET_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case PASSWORD_RESET_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}