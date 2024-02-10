import { produce } from "immer"
import { createSlice } from '@reduxjs/toolkit'
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState = {
    profilePage: {
        posts: [
            { id: 1, text: "hi ahahahaahahaha", likesCount: "0" },
            { id: 2, text: "hi ahahahaahahaha", likesCount: "1" },
            { id: 3, text: "hi ahahahaahahaha", likesCount: "11" },
        ],
        newPostsText: "",
        friends: [
            { id: 1, name: "Andrew" },
            { id: 1, name: "Kate" },
            { id: 1, name: "Bob" },
        ]
    }
}


const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost(state = initialState, action) {
            return produce(state, draft => {
                let newPost = {
                    id: 5,
                    text: draft.profilePage.newPostsText,
                    likesCount: 0
                }
                draft.profilePage.posts.push(newPost);
                draft.profilePage.newPostsText = '';
            })
        },
        updateNewPostText(state = initialState, action){
        return produce(state, draft => {
            draft.newPostsText = action.newText
        })    }}
})


export const {addPostActionCreator,updateNewPostTextActionCreator}=profileSlice.actions;
export default profileSlice.reducer;
