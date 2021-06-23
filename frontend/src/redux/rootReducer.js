import { combineReducers } from 'redux'
import {userReducer, UserCreatedOrUpdatedReducer, SingleUserReducer, allUsersReducer} from './user/userReducer.js';

const rootReducer = combineReducers({
    user:userReducer,
    userCreatedOrUpdated:UserCreatedOrUpdatedReducer,
    singleUser:SingleUserReducer,
    allUsers:allUsersReducer
})

export default rootReducer