import {
    
    // for user only
    USER_REQUEST,
    USER_REQUEST_SUCCESS,
    USER_REQUEST_FAILED,
    USER_LOGOUT,

    // user with routes
    USER_WITH_ROUTES_REQUEST,
    USER_WITH_ROUTES_SUCCESS,
    USER_WITH_ROUTES_FAILED,

    // create user or update
    USER_CREATE_OR_UPDATE_REQUEST,
    USER_CREATE_FAILED,
    USER_CREATE_SUCCESS,
    USER_UPDATE_FAILED,
    USER_UPDATE_SUCCESS

} from './userTypes';


// reducer for a user that logged in or out only
const userState = localStorage.getItem("user") ?
    JSON.parse(localStorage.getItem("user")) : 
    {loading:false, data:null, error:""}

export const userReducer = (state=userState,action) =>{
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




// reducer for user retrieve,creation or update
const singleUserState = {loading:false, data:null, error:""}

export const singleUserReducer = (state=singleUserState,action) =>{
    switch (action.type) {
        case USER_CREATE_OR_UPDATE_REQUEST:
            return { loading:true }
        
        case USER_CREATE_SUCCESS:
            return { loading:false, data: action.payload }
        
        case USER_CREATE_FAILED:
            return { loading:false, data:null, error:action.payload}

        case USER_UPDATE_SUCCESS:
            return { loading:false, data: action.payload }
        
        case USER_UPDATE_FAILED:
            return { loading:false, data:null, error:action.payload}
        
        default:return { ...state }
    }
}