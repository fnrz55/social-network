import { produce } from "immer"
import { createSlice } from '@reduxjs/toolkit'
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    messagesPage: {
        dialogs: [
            { id: 1, name: "AALLL", text: "))))))", num: 1 },
            { id: 2, name: "KKKKK", text: "hihihih", num: 2 },
            { id: 3, name: "SSSSSS", text: "((((((", num: 3 }
        ],
        newMessageText: '',
        messages: [
            { id: 1, name: "SSSSSS", text: ")))))ADASDA" },
            { id: 2, name: "KKKKKKK", text: "hi" },
            { id: 3, name: "SAD", text: "hello" },
            { id: 4, name: "SSSSSS", text: ")))))ADASDA" },
            { id: 5, name: "SSSSSS", text: ")))))ADASDA" },
            { id: 6, name: "Ahaha", text: "hello ssss" }
        ],
    }
}

const messegeSlice = createSlice({
    name: 'messege',
    initialState,
    reducers: {
        addMessage(state = initialState, action) {
            return produce(state,draft=>{
                let newMessage = {
                    id: 7,
                    name: 'Aristarh P.',
                    text: state.newMessageText,
                }
                draft.messages.push(newMessage);
                draft.newMessageText='';
            })},
        updateMessageText(state = initialState,action){
        return produce(state,draft=>{
            draft.newMessageText = action.newText;
        })
        },
    },
})

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE, })

export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
})

export default messegeSlice.reducer