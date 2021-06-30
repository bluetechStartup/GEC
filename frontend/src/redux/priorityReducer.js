// priority types
const GET_PRIORITIES_REQUEST = "GET_PRIORITIES_REQUEST"
const GET_PRIORITIES_REQUEST_SUCCESS = "GET_PRIORITIES_REQUEST_SUCCESS"
const GET_PRIORITIES_REQUEST_FAILED = "GET_PRIORITIES_REQUEST_FAILED"


// priorities actions
const getPriorities = () => async dispatch =>{
    dispatch({type:GET_PRIORITIES_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/users/auth`)
        data.success ? 
            dispatch({type:GET_PRIORITIES_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_PRIORITIES_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_PRIORITIES_REQUEST_FAILED,payload: error.message})
    }
}


// priorities reducer
const prioritiesReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_USER_BY_ID_REQUEST:
            return { loading:true }
        
        case GET_PRIORITIES_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_PRIORITIES_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}

export default prioritiesReducer