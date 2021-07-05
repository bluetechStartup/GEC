import axios from "axios"
import * as api from "./api"

// TYPES_ANNEXES types
const GET_TYPES_ANNEXES_REQUEST = "GET_TYPES_ANNEXES_REQUEST"
const GET_TYPES_ANNEXES_REQUEST_SUCCESS = "GET_TYPES_ANNEXES_REQUEST_SUCCESS"
const GET_TYPES_ANNEXES_REQUEST_FAILED = "GET_TYPES_ANNEXES_REQUEST_FAILED"


// TYPES_ANNEXES TYPES_ANNEXES 
export const getTypesAnnex = () => async dispatch =>{
    dispatch({type:GET_TYPES_ANNEXES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/annexeType`)
        data.success ? 
            dispatch({type:GET_TYPES_ANNEXES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_TYPES_ANNEXES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_TYPES_ANNEXES_REQUEST_FAILED,payload: error.message})
    }
}


// TYPES_ANNEXES reducer
export const typesAnnexeReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_TYPES_ANNEXES_REQUEST:
            return { loading:true }
        
        case GET_TYPES_ANNEXES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_TYPES_ANNEXES_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}