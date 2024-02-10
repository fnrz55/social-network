import {produce} from "immer"
const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT';

const initialState={
        dialogs: [
            { id: 1, name: "AALLL", text: "))))))", num: 1 },
            { id: 2, name: "KKKKK", text: "hihihih", num: 2 },
            { id: 3, name: "SSSSSS", text: "((((((", num: 3 }
        ],
        
        messages: [
            { id: 1, name: "SSSSSS", text: ")))))ADASDA" },
            { id: 2, name: "KKKKKKK", text: "hi" },
            { id: 3, name: "SAD", text: "hello" },
            { id: 4, name: "SSSSSS", text: ")))))ADASDA" },
            { id: 5, name: "SSSSSS", text: ")))))ADASDA" },
            { id: 6, name: "Ahaha", text: "hello ssss" }
        ],
        
    }


    const messageReducer=(state=initialState,action)=>{
        switch(action.type){
        case ADD_MESSAGE:
        return produce(state,draft=>{
            let newMessage = {
                id: 7,
                name: 'Aristarh P.',
                text: action.text,
                }
                draft.messages.push(newMessage);
        })
    
        default:
        return state;
        }
        }

export const addMessage=(text)=>({type:ADD_MESSAGE,text})

export default messageReducer;