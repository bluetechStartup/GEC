import axios from "axios"
import * as api from "./api"

// mouvement types
const GET_MOUVEMENTS_REQUEST = "GET_MOUVEMENTS_REQUEST"
const GET_MOUVEMENTS_REQUEST_SUCCESS = "GET_MOUVEMENTS_REQUEST_SUCCESS"
const GET_MOUVEMENTS_REQUEST_FAILED = "GET_MOUVEMENTS_REQUEST_FAILED"


// mouvement actions 
export const getMouvements = () => async dispatch =>{
    dispatch({type:GET_MOUVEMENTS_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/courrierMouvement`)
        data.success ? 
            dispatch({type:GET_MOUVEMENTS_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_MOUVEMENTS_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_MOUVEMENTS_REQUEST_FAILED,payload: error.message})
    }
}


// MOUVEMENTS reducer
export const mouvementsReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_MOUVEMENTS_REQUEST:
            return { loading:true }
        
        case GET_MOUVEMENTS_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_MOUVEMENTS_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}