import axios from "axios"
import * as api from "./api"

// mouvement types
const GET_HIERARCHIES_REQUEST = "GET_HIERARCHIES_REQUEST"
const GET_HIERARCHIES_REQUEST_SUCCESS = "GET_HIERARCHIES_REQUEST_SUCCESS"
const GET_HIERARCHIES_REQUEST_FAILED = "GET_HIERARCHIES_REQUEST_FAILED"


// Hierarchies actions 
export const getHierarchies = () => async dispatch =>{
    dispatch({type:GET_HIERARCHIES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/hierarchie`)
        data.success ? 
            dispatch({type:GET_HIERARCHIES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_HIERARCHIES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_HIERARCHIES_REQUEST_FAILED,payload: error.message})
    }
}


// Hierarchies reducer
export const HierarchiesReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_HIERARCHIES_REQUEST:
            return { loading:true }
        
        case GET_HIERARCHIES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_HIERARCHIES_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}