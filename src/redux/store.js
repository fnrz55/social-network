import messegeReducer from './messageSlice';
import profileReducer from './profileSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

let reducers=combineReducers({
    profilePage:profileReducer,
    messagesPage:messegeReducer,
})

let store=configureStore({
    reducer:{
        profilePage:profileReducer,
        messagesPage:messegeReducer,        
    }
})
