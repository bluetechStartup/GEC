import axios from "axios"
import * as api from "./api"

// courrier types
const GET_ALL_COURRIERS_REQUEST = "GET_ALL_COURRIERS_REQUEST"
const GET_ALL_COURRIERS_REQUEST_SUCCESS = "GET_ALL_COURRIERS_REQUEST_SUCCESS"
const GET_ALL_COURRIERS_REQUEST_FAILED = "GET_ALL_COURRIERS_REQUEST_FAILED"

const FILTER_COURRIERS_REQUEST = "FILTER_COURRIERS_REQUEST"
const FILTER_COURRIERS_REQUEST_SUCCESS = "FILTER_COURRIERS_REQUEST_SUCCESS"
const FILTER_COURRIERS_REQUEST_FAILED = "FILTER_COURRIERS_REQUEST_FAILED"


// all mails actions
export const getAllMailsByUser = id => async dispatch =>{
    dispatch({type:GET_ALL_COURRIERS_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courrier/courrierbyservice/${id}`)
        data.success ? 
            dispatch({type:GET_ALL_COURRIERS_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_ALL_COURRIERS_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_ALL_COURRIERS_REQUEST_FAILED,payload: error.message})
    }
}

export const filterMailsByCategory = (id,category) => async dispatch =>{
    dispatch({type:FILTER_COURRIERS_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courrier/courrierbyservice/${id}`,{category})
        data.success ? 
            dispatch({type:FILTER_COURRIERS_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:FILTER_COURRIERS_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:FILTER_COURRIERS_REQUEST_FAILED,payload: error.message})
    }
}


// all mails reducer
export const allMailsReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_ALL_COURRIERS_REQUEST:
            return { loading:true }
        
        case GET_ALL_COURRIERS_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_ALL_COURRIERS_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        case FILTER_COURRIERS_REQUEST:
            return { loading:true }
        
        case FILTER_COURRIERS_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }

        case FILTER_COURRIERS_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}
