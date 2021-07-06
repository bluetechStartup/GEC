import axios from "axios"
import * as api from "./api"

// categories types
const GET_CATEGORIES_REQUEST = "GET_CATEGORIES_REQUEST"
const GET_CATEGORIES_REQUEST_SUCCESS = "GET_CATEGORIES_REQUEST_SUCCESS"
const GET_CATEGORIES_REQUEST_FAILED = "GET_CATEGORIES_REQUEST_FAILED"


// categories actions 
export const getCategories = () => async dispatch =>{
    dispatch({type:GET_CATEGORIES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courierCategory`)
        data.success ? 
            dispatch({type:GET_CATEGORIES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_CATEGORIES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_CATEGORIES_REQUEST_FAILED,payload: error.message})
    }
}


// CATEGORIES reducer
export const categoriesReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_CATEGORIES_REQUEST:
            return { loading:true }
        
        case GET_CATEGORIES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_CATEGORIES_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}