import { configureStore,combineReducers } from '@reduxjs/toolkit'
import profileReducer from './profileReducer';
import  messageReducer  from './messageReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';

let reducers=combineReducers({
    profilePage:profileReducer,
    messagesPage:messageReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,
})
let store=configureStore({
    reducer:reducers
})

window.store=store

export default store