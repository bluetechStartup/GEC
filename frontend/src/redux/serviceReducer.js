import axios from "axios"
import * as api from "./api"

// SERVICES types
const GET_SERVICES_REQUEST = "GET_SERVICES_REQUEST"
const GET_SERVICES_REQUEST_SUCCESS = "GET_SERVICES_REQUEST_SUCCESS"
const GET_SERVICES_REQUEST_FAILED = "GET_SERVICES_REQUEST_FAILED"

// single service
const ADD_SERVICE_REQUEST = "ADD_SERVICE_REQUEST"
const ADD_SERVICE_REQUEST_SUCCESS = "ADD_SERVICE_REQUEST_SUCCESS"
const ADD_SERVICE_REQUEST_FAILED = "ADD_SERVICE_REQUEST_FAILED"
const ADD_SERVICE_REQUEST_FINISH = "ADD_SERVICE_REQUEST_FINISH"



// SERVICES actions 
export const getServices = () => async dispatch =>{
    dispatch({type:GET_SERVICES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/service`)
        data.success ? 
            dispatch({type:GET_SERVICES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_SERVICES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_SERVICES_REQUEST_FAILED,payload: error.message})
    }
}

export const addService = (ser,serDep,hierachie) => async dispatch =>{
    dispatch({type:ADD_SERVICE_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/service`,{SERVICE_DESCR:ser, SERVICE_DEPEND:serDep, HIERARCHIE_ID:hierachie})
        data.success ? 
            dispatch({type:ADD_SERVICE_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:ADD_SERVICE_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:ADD_SERVICE_REQUEST_FAILED,payload: error.message})
    }
}

export const addServiceFinish = () =>{ return { type:ADD_SERVICE_REQUEST_FINISH }}


// SERVICES reducer
export const servicesReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_SERVICES_REQUEST:
            return { loading:true }
        
        case GET_SERVICES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_SERVICES_REQUEST_FAILED:
            return { loading:false, error:action.payload}
        
        case ADD_SERVICE_REQUEST:
            return { loading:true }
        
        case ADD_SERVICE_REQUEST_SUCCESS:
            return { ...state, loading:false, serviceAdded: action.payload }
        
        case ADD_SERVICE_REQUEST_FAILED:
            return { ...state, loading:false, error:action.payload}
        
        case ADD_SERVICE_REQUEST_FINISH:
            return {  loading:false }

        default:return { ...state }
    }
}