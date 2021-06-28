import {
    
    // for user login and logout only
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
    USER_CREATE_OR_UPDATE_FAILED,
    USER_CREATE_OR_UPDATE_SUCCESS,
    USER_CREATE_OR_UPDATE_FINISH,

    // for single user
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILED,

    // for all users
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILED,

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




// reducer for user creation or update
const UserCreatedOrUpdatedState = {loading:false, data:null, error:""}

export const UserCreatedOrUpdatedReducer = (state=UserCreatedOrUpdatedState,action) =>{
    switch (action.type) {
        case USER_CREATE_OR_UPDATE_REQUEST:
            return { loading:true }
        
        case USER_CREATE_OR_UPDATE_SUCCESS:
            return { loading:false, data: action.payload }
        
        case USER_CREATE_OR_UPDATE_FAILED :
            return { loading:false, data:null, error:action.payload}

        
        case USER_CREATE_OR_UPDATE_FINISH:
            return { loading:false, data:null, error:""}
    
        default:return { ...state }
    }
}

// reducer for retrieve a single user 
const SingleUserState = {loading:false, data:null, error:""}

export const SingleUserReducer = (state=SingleUserState,action) =>{
    switch (action.type) {
        case GET_USER_BY_ID_REQUEST:
            return { loading:true }
        
        case GET_USER_BY_ID_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_USER_BY_ID_FAILED:
            return { loading:false, error:action.payload}
    
        default:return { ...state }
    }
}



// reducer for retrieve all users 
const allUsersState = {loading:false, data:null, error:""}

export const allUsersReducer = (state=allUsersState,action) =>{
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return { loading:true }
        
        case GET_ALL_USERS_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_ALL_USERS_FAILED:
            return { loading:false, error:action.payload}
    
        default:return { ...state }
    }
}
