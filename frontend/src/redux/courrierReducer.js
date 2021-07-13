import axios from "axios"
import * as api from "./api"

// courrier types
const ADD_COURRIER_REQUEST = "ADD_COURRIER_REQUEST"
const ADD_COURRIER_REQUEST_SUCCESS = "ADD_COURRIER_REQUEST_SUCCESS"
const ADD_COURRIER_REQUEST_FAILED = "ADD_COURRIER_REQUEST_FAILED"

const GET_COURRIER_REQUEST = "GET_COURRIER_REQUEST"
const GET_COURRIER_REQUEST_SUCCESS = "GET_COURRIER_REQUEST_SUCCESS"
const GET_COURRIER_REQUEST_FAILED = "GET_COURRIER_REQUEST_FAILED"


// courrier actions
export const addCourrier = courrier => async dispatch =>{
    dispatch({type:ADD_COURRIER_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/courrier`,courrier)
        data.success ? 
            dispatch({type:ADD_COURRIER_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:ADD_COURRIER_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:ADD_COURRIER_REQUEST_FAILED,payload: error.message})
    }
}

export const getCourrier = id => async dispatch =>{
    dispatch({type:GET_COURRIER_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courrier/${id}`)
        data.success ? 
            dispatch({type:GET_COURRIER_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_COURRIER_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_COURRIER_REQUEST_FAILED,payload: error.message})
    }
}


// courrier reducer
export const courrierReducer = (state={}, action) =>{
    switch (action.type) {
        case ADD_COURRIER_REQUEST:
            return { loading:true }
        
        case ADD_COURRIER_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case ADD_COURRIER_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        case GET_COURRIER_REQUEST:
            return { loading:true }
        
        case GET_COURRIER_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_COURRIER_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}
