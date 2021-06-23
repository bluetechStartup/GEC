import { combineReducers } from 'redux'
import {userReducer, UserCreatedOrUpdatedReducer, SingleUserReducer} from './user/userReducer.js';

const rootReducer = combineReducers({
    user:userReducer,
    userCreatedOrUpdated:UserCreatedOrUpdatedReducer,
    singleUser:SingleUserReducer
})

export default rootReducer