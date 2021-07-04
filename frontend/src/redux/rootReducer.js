import { combineReducers } from 'redux'
import {userReducer, UserCreatedOrUpdatedReducer, SingleUserReducer, allUsersReducer} from './user/userReducer.js';
import { singleProfileReducer, createdOrUpdateProfileReducer,allProfilesReducer } from "./profile/profileReducer"
import { functionnalityReducer, allFunctionnalityReducer, allFunctionnalityByProfileReducer} from "./functionnalities/functionsReducer"
import { courrierReducer } from "./courrierReducer"
import { annexeReducer, allAnnexReducer, annexeRemovedReducer } from "./annexeReducer"

const rootReducer = combineReducers({
    user:userReducer,
    userCreatedOrUpdated:UserCreatedOrUpdatedReducer,
    singleUser:SingleUserReducer,
    allUsers:allUsersReducer,
    singleProfile:singleProfileReducer,
    allProfiles:allProfilesReducer,
    createdOrUpdateProfile:createdOrUpdateProfileReducer,
    singleFunc: functionnalityReducer,
    allFuncs: allFunctionnalityReducer,
    allFuncsByProfile: allFunctionnalityByProfileReducer,
    courrier: courrierReducer,
    annexe:annexeReducer,
    allAnnex:allAnnexReducer,
    removedAnnex:annexeRemovedReducer
})

export default rootReducer