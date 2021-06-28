import {
    GET_FUNCTION_REQUEST,
    GET_FUNCTION_REQUEST_SUCCESS,
    GET_FUNCTION_REQUEST_FAILED,

    GET_ALL_FUNCTIONS_REQUEST,
    GET_ALL_FUNCTIONS_REQUEST_SUCCESS,
    GET_ALL_FUNCTIONS_REQUEST_FAILED,

    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST,
    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_SUCCESS,
    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_FAILED
} from "./functionsTypes"


// functionnality state
const funcState = { loading: false, data:null, error:""}


// reducer for single functionnality
export const functionnalityReducer = (state = funcState, action)=>{
    switch (action.type) {
        case GET_FUNCTION_REQUEST:
            return { loading: true}
        
        case GET_FUNCTION_REQUEST_SUCCESS:
            return { loading: false, data: action.payload}
        
        case GET_FUNCTION_REQUEST_FAILED:
            return { loading: false, error: action.payload}
    
        default: return { ...state }
    }
}


// reducer for all functionnalities
export const allFunctionnalityReducer = (state = funcState, action)=>{
    switch (action.type) {
        case GET_ALL_FUNCTIONS_REQUEST:
            return { loading: true}
        
        case GET_ALL_FUNCTIONS_REQUEST_SUCCESS:
            return { loading: false, data: action.payload}
        
        case GET_ALL_FUNCTIONS_REQUEST_FAILED:
            return { loading: false, error: action.payload}
    
        default: return { ...state }
    }
}

// reducer for all functionnalities by profile
export const allFunctionnalityByProfileReducer = (state = funcState, action)=>{
    switch (action.type) {
        case GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST:
            return { loading: true}
        
        case GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_SUCCESS:
            return { loading: false, data: action.payload}
        
        case GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_FAILED:
            return { loading: false, error: action.payload}
    
        default: return { ...state }
    }
}