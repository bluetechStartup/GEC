import { combineReducers } from 'redux'
import {userReducer, UserCreatedOrUpdatedReducer, SingleUserReducer, allUsersReducer} from './user/userReducer.js';
import { singleProfileReducer, createdOrUpdateProfileReducer,allProfilesReducer } from "./profile/profileReducer"
import { functionnalityReducer, allFunctionnalityReducer, allFunctionnalityByProfileReducer} from "./functionnalities/functionsReducer"
import { courrierReducer } from "./courrierReducer"
import { annexeReducer, allAnnexReducer, annexeRemovedReducer } from "./annexeReducer"
import { mouvementsReducer } from "./mouvementReducer"
import { categoriesReducer } from "./categoryReducer"
import { servicesReducer } from "./serviceReducer"
import { actionsReducer } from "./actionsReducer"
import { civilitiesReducer } from "./civilityReducer"
import { statusReducer } from "./statusReducer"
import { villesReducer } from "./villeReducer"
import { prioritiesReducer } from "./priorityReducer"
import { annexeCategoriesReducer } from "./annexeCategoryReducer"
import { typesAnnexeReducer } from "./typesAnnexe"

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
    removedAnnex:annexeRemovedReducer,
    mouvements:mouvementsReducer,
    categories:categoriesReducer,
    services:servicesReducer,
    actions:actionsReducer,
    civilities:civilitiesReducer,
    status:statusReducer,
    villes:villesReducer,
    priorities:prioritiesReducer,
    annexeCategories:annexeCategoriesReducer,
    typesAnnexe:typesAnnexeReducer
})

export default rootReducer