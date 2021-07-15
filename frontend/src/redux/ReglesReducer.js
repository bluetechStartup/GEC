import axios from "axios"
import * as api from "./api"

// RULE types
const ADD_RULE_REQUEST = "ADD_RULE_REQUEST"
const ADD_RULE_REQUEST_SUCCESS = "ADD_RULE_REQUEST_SUCCESS"
const ADD_RULE_REQUEST_FAILED = "ADD_RULE_REQUEST_FAILED"

const GET_RULE_REQUEST = "GET_RULE_REQUEST"
const GET_RULE_REQUEST_SUCCESS = "GET_RULE_REQUEST_SUCCESS"
const GET_RULE_REQUEST_FAILED = "GET_RULE_REQUEST_FAILED"


// RULE actions
export const addRule = (heure, person, category) => async dispatch =>{
    console.log("data",{heure, person, category})
    dispatch({type:ADD_RULE_REQUEST})
    try {
        const {data} = await axios.post(`${api.URL}/api/regle`,{
            PERSONE_ID:parseInt(person),
            NOMBRE_HEURE:parseInt(heure),
            CATEGORIE_COURRIER_ID:parseInt(category)
        })
        data.success ? 
            dispatch({type:ADD_RULE_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:ADD_RULE_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:ADD_RULE_REQUEST_FAILED,payload: error.message})
    }
}

export const getRule = id => async dispatch =>{
    dispatch({type:GET_RULE_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/regle/${id}`)
        data.success ? 
            dispatch({type:GET_RULE_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_RULE_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_RULE_REQUEST_FAILED,payload: error.message})
    }
}


// RULE reducer
export const ruleReducer = (state={}, action) =>{
    switch (action.type) {
        case ADD_RULE_REQUEST:
            return { loading:true }
        
        case ADD_RULE_REQUEST_SUCCESS:
            return { loading:false, ruleAdded: action.payload }
        
        case ADD_RULE_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        case GET_RULE_REQUEST:
            return { loading:true }
        
        case GET_RULE_REQUEST_SUCCESS:
            return { loading:false, ruleRetrieved: action.payload }
        
        case GET_RULE_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}
