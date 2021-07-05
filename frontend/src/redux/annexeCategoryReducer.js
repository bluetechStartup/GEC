import axios from "axios"
import * as api from "./api"

// ANNEXE_CATEGORIES types
const GET_ANNEXE_CATEGORIES_REQUEST = "GET_ANNEXE_CATEGORIES_REQUEST"
const GET_ANNEXE_CATEGORIES_REQUEST_SUCCESS = "GET_ANNEXE_CATEGORIES_REQUEST_SUCCESS"
const GET_ANNEXE_CATEGORIES_REQUEST_FAILED = "GET_ANNEXE_CATEGORIES_REQUEST_FAILED"


// ANNEXE_CATEGORIES ANNEXE_CATEGORIES 
export const getAnnexeCategories = () => async dispatch =>{
    dispatch({type:GET_ANNEXE_CATEGORIES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/annexeCategories`)
        data.success ? 
            dispatch({type:GET_ANNEXE_CATEGORIES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_ANNEXE_CATEGORIES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_ANNEXE_CATEGORIES_REQUEST_FAILED,payload: error.message})
    }
}


// ANNEXE_CATEGORIES reducer
export const annexeCategoriesReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_ANNEXE_CATEGORIES_REQUEST:
            return { loading:true }
        
        case GET_ANNEXE_CATEGORIES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_ANNEXE_CATEGORIES_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}