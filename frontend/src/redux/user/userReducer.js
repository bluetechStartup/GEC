import {
    USER_REQUEST,
    USER_REQUEST_SUCCESS,
    USER_REQUEST_FAILED,
    USER_LOGOUT} from './userTypes';

const userState = localStorage.getItem("user") ?
    JSON.parse(localStorage.getItem("user")) : 
    {loading:false, data:null, error:""}

const userReducer = (state=userState,action) =>{
    switch (action.type) {
        case USER_REQUEST:
            return { loading:true }
        
        case USER_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case USER_REQUEST_FAILED:
            return { loading:false, data:null, error:action.payload}
        
        case USER_LOGOUT:
            return {}
        
        default:return { ...state }
    }
}

export default userReducer