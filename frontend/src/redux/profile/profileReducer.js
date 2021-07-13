import {
    // for single profile 
    GET_PROFILE_REQUEST,
    GET_PROFILE_REQUEST_SUCCESS,
    GET_PROFILE_REQUEST_FAILED,

    // for profile creation or update
    CREATE_OR_UPDATE_PROFILE_REQUEST,
    CREATE_OR_UPDATE_PROFILE_REQUEST_SUCCESS,
    CREATE_OR_UPDATE_PROFILE_REQUEST_FAILED,

    // for all profiles
    GET_ALL_PROFILES_REQUEST,
    GET_ALL_PROFILES_REQUEST_SUCCESS,
    GET_ALL_PROFILES_REQUEST_FAILED,
    CREATE_OR_UPDATE_PROFILE_FINISH
} from "./profileTypes"




// reducer for single profile  

const singleProfileState = { loading: false, data:null, error:""}

export const singleProfileReducer = (state = singleProfileState, action)=>{
    switch (action.type) {
        case GET_PROFILE_REQUEST:
            return { loading: true}
        
        case GET_PROFILE_REQUEST_SUCCESS:
            return { loading: false, data: action.payload}
        
        case GET_PROFILE_REQUEST_FAILED:
            return { loading: false, error: action.payload}

    
        default: return { ...state }
    }
}


// reducer for a profile created or updated  

const createdOrUpdateProfileState = { loading: false, data:null, error:""}

export const createdOrUpdateProfileReducer = (state = createdOrUpdateProfileState, action)=>{
    switch (action.type) {
        case CREATE_OR_UPDATE_PROFILE_REQUEST:
            return { loading: true}
        
        case CREATE_OR_UPDATE_PROFILE_REQUEST_SUCCESS:
            return { loading: false, data: action.payload}
        
        case CREATE_OR_UPDATE_PROFILE_REQUEST_FAILED:
            return { loading: false, error: action.payload}
        
        case CREATE_OR_UPDATE_PROFILE_FINISH:
            return { loading: false }

        default: return { ...state }
    }
}



// reducer for all profiles
const allProfileState = { loading: false, data:null, error:""}

export const allProfilesReducer = (state = allProfileState, action)=>{
    switch (action.type) {
        case GET_ALL_PROFILES_REQUEST:
            return { loading: true}
        
        case GET_ALL_PROFILES_REQUEST_SUCCESS:
            return { loading: false, data: action.payload}
        
        case GET_ALL_PROFILES_REQUEST_FAILED:
            return { loading: false, error: action.payload}
    
        default: return { ...state }
    }
}