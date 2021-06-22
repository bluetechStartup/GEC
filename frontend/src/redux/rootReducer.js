import { combineReducers } from 'redux'
import {userReducer, singleUserReducer} from './user/userReducer.js';

const rootReducer = combineReducers({
    user:userReducer,
    singleUser:singleUserReducer
})

export default rootReducer