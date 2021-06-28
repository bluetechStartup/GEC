import { combineReducers } from 'redux'
import {userReducer, UserCreatedOrUpdatedReducer, SingleUserReducer, allUsersReducer} from './user/userReducer.js';
import { singleProfileReducer, createdOrUpdateProfileReducer,allProfilesReducer } from "./profile/profileReducer"
import { functionnalityReducer, allFunctionnalityReducer} from "./functionnalities/functionsReducer"

const rootReducer = combineReducers({
    user:userReducer,
    userCreatedOrUpdated:UserCreatedOrUpdatedReducer,
    singleUser:SingleUserReducer,
    allUsers:allUsersReducer,
    singleProfile:singleProfileReducer,
    allProfiles:allProfilesReducer,
    createdOrUpdateProfile:createdOrUpdateProfileReducer,
    singleFunc: functionnalityReducer,
    allFuncs: allFunctionnalityReducer
})

export default rootReducer