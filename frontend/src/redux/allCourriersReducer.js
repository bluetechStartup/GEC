import axios from "axios"
import * as api from "./api"

// courrier types
const GET_ALL_COURRIERS_REQUEST = "GET_ALL_COURRIERS_REQUEST"
const GET_ALL_COURRIERS_REQUEST_SUCCESS = "GET_ALL_COURRIERS_REQUEST_SUCCESS"
const GET_ALL_COURRIERS_REQUEST_FAILED = "GET_ALL_COURRIERS_REQUEST_FAILED"


// courrier actions
export const addCourrier = courrier => async dispatch =>{
    dispatch({type:GET_ALL_COURRIERS_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/courrier`,courrier)
        data.success ? 
            dispatch({type:GET_ALL_COURRIERS_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_ALL_COURRIERS_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_ALL_COURRIERS_REQUEST_FAILED,payload: error.message})
    }
}


// courrier reducer
export const courrierReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_ALL_COURRIERS_REQUEST:
            return { loading:true }
        
        case GET_ALL_COURRIERS_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_ALL_COURRIERS_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}
