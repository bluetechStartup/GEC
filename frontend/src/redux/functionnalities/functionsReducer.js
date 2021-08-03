import {
    GET_FUNCTION_REQUEST,
    GET_FUNCTION_REQUEST_SUCCESS,
    GET_FUNCTION_REQUEST_FAILED,

    UPDATE_RIGHTS_BY_PROFILE_REQUEST,
    UPDATE_RIGHTS_BY_PROFILE_REQUEST_SUCCESS,
    UPDATE_RIGHTS_BY_PROFILE_REQUEST_FAILED,
    UPDATE_RIGHTS_BY_PROFILE_FINISH,

    GET_ALL_FUNCTIONS_REQUEST,
    GET_ALL_FUNCTIONS_REQUEST_SUCCESS,
    GET_ALL_FUNCTIONS_REQUEST_FAILED,

    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST,
    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_SUCCESS,
    GET_ALL_FUNCTIONS_BY_PROFILE_REQUEST_FAILED,

    ADD_FUNCTION_REQUEST,
    ADD_FUNCTION_REQUEST_SUCCESS,
    ADD_FUNCTION_REQUEST_FAILED,
    ADD_FUNCTION_REQUEST_FINISH,

    DELETE_FUNCTION_REQUEST,
    DELETE_FUNCTION_REQUEST_SUCCESS,
    DELETE_FUNCTION_REQUEST_FAILED,

    UPDATE_FUNCTION_REQUEST,
    UPDATE_FUNCTION_REQUEST_SUCCESS,
    UPDATE_FUNCTION_REQUEST_FAILED


} from "./functionsTypes"



// reducer for single functionnality
export const functionnalityReducer = (state = {}, action)=>{
    switch (action.type) {
        case GET_FUNCTION_REQUEST:
            return { loading: true}
        
        case GET_FUNCTION_REQUEST_SUCCESS:
            return { loading: false, data: action.payload}
        
        case GET_FUNCTION_REQUEST_FAILED:
            return { loading: false, error: action.payload}
    
        case UPDATE_RIGHTS_BY_PROFILE_REQUEST:
            return { loading: true}
        
        case UPDATE_RIGHTS_BY_PROFILE_REQUEST_SUCCESS:
            return { loading: false, data: action.payload}
        
        case UPDATE_RIGHTS_BY_PROFILE_REQUEST_FAILED:
            return { loading: false, error: action.payload}

        case UPDATE_RIGHTS_BY_PROFILE_FINISH:
            return { loading: false }

        case ADD_FUNCTION_REQUEST:
            return { loading: true}
        
        case ADD_FUNCTION_REQUEST_SUCCESS:
            return { loading: false, functionAdded: action.payload}
        
        case ADD_FUNCTION_REQUEST_FAILED:
            return { loading: false, error: action.payload}

        case ADD_FUNCTION_REQUEST_FINISH:
            return { loading: false}

        case DELETE_FUNCTION_REQUEST:
            return { loading: true}
        
        case DELETE_FUNCTION_REQUEST_SUCCESS:
            return { loading: false, functionDeleted: action.payload}
        
        case DELETE_FUNCTION_REQUEST_FAILED:
            return { loading: false, error: action.payload}

        case UPDATE_FUNCTION_REQUEST:
            return { loading: true}
        
        case UPDATE_FUNCTION_REQUEST_SUCCESS:
            return { loading: false, functionUpdated: action.payload}
        
        case UPDATE_FUNCTION_REQUEST_FAILED:
            return { loading: false, error: action.payload}
            
        default: return { ...state }
    }
}


// reducer for all functionnalities
export const allFunctionnalityReducer = (state = {}, action)=>{
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
export const allFunctionnalityByProfileReducer = (state = {}, action)=>{
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