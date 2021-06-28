import {
    GET_FUNCTION_REQUEST,
    GET_FUNCTION_REQUEST_SUCCESS,
    GET_FUNCTION_REQUEST_FAILED,

    GET_ALL_FUNCTIONS_REQUEST,
    GET_ALL_FUNCTIONS_REQUEST_SUCCESS,
    GET_ALL_FUNCTIONS_REQUEST_FAILED
} from "./functionsTypes"


// actions for single functionnality 

export const getFunc = (id) => async (dispatch) =>{
    dispatch({type:GET_FUNCTION_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/profile/${id}`)
        console.log(data)
        data.success ? 
            dispatch({type:GET_FUNCTION_REQUEST_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:GET_FUNCTION_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_FUNCTION_REQUEST_FAILED,payload: error.message});
    }
}


// actions for all functionnalities 

export const getAllFuncs = () => async (dispatch) =>{
    dispatch({type:GET_ALL_FUNCTIONS_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/profile/${id}`)
        console.log(data)
        data.success ? 
            dispatch({type:GET_ALL_FUNCTIONS_REQUEST_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:GET_ALL_FUNCTIONS_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_ALL_FUNCTIONS_REQUEST_FAILED,payload: error.message});
    }
}


export const getAllFuncsByProfile = (id) => async (dispatch) =>{
    dispatch({type:GET_ALL_FUNCTIONS_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/profile/${id}`)
        console.log(data)
        data.success ? 
            dispatch({type:GET_ALL_FUNCTIONS_REQUEST_SUCCESS, payload: {success:data.success, data:data.data }})
            : dispatch({type:GET_ALL_FUNCTIONS_REQUEST_FAILED, payload: data.message})

    } catch (error) {
        dispatch({type:GET_ALL_FUNCTIONS_REQUEST_FAILED,payload: error.message});
    }
}