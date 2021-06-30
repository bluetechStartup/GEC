// mouvement types
const GET_MOUVEMENT_REQUEST = "GET_MOUVEMENT_REQUEST"
const GET_MOUVEMENT_REQUEST_SUCCESS = "GET_MOUVEMENT_REQUEST_SUCCESS"
const GET_MOUVEMENT_REQUEST_FAILED = "GET_MOUVEMENT_REQUEST_FAILED"


// mouvement actions 
const getMouvements = () => async dispatch =>{
    dispatch({type:GET_MOUVEMENT_REQUEST})
    try {
        const {data} = await axios.get(`${api.URL}/api/users/auth`)
        data.success ? 
            dispatch({type:GET_MOUVEMENT_REQUEST_SUCCESS, payload: data.data})
            : dispatch({type:GET_MOUVEMENT_REQUEST_FAILED, payload: data.message})
    } catch (error) {
        dispatch({type:GET_MOUVEMENT_REQUEST_FAILED,payload: error.message})
    }
}


// mouvement reducer
const mouvementReducer = (state={}, action) =>{
    switch (action.type) {
        case GET_USER_BY_ID_REQUEST:
            return { loading:true }
        
        case GET_MOUVEMENT_REQUEST_SUCCESS:
            return { loading:false, data: action.payload }
        
        case GET_MOUVEMENT_REQUEST_FAILED:
            return { loading:false, error:action.payload}

        default:return { ...state }
    }
}

export default mouvementReducer