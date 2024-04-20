import { produce } from "immer"
import { profileAPI } from "../API/api";
import { usersAPI } from './../API/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SET_MY_PROFILE = "SET_MY_PROFILE"
const SET_FRIENDS="SET_FRIENDS"
const SAVE_PHOTO_SUCCESS="SAVE_PHOTO_SUCCESS"
const SET_PROFILE_SUCCESS="SET_PROFILE_SUCCESS"
const SET_ERROR_MESSAGE="SET_ERROR_MESSAGE"


const initialState = {
    posts: [
        { id: 1, text: "hi ahahahaahahaha", likesCount: "0" },
        { id: 2, text: "hi ahahahaahahaha", likesCount: "1" },
        { id: 3, text: "hi ahahahaahahaha", likesCount: "11" },
    ],

    friends: [],
    userProfile: null,
    status: null,
    myProfile: null,
    errorMessage: null,
}



const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return produce(state, draft => {
                let newPost = {
                    id: 5,
                    text: action.text,
                    likesCount: 0
                }
                draft.posts.push(newPost);

            })

        case SET_USER_PROFILE:

            return produce(state, draft => {
                draft.userProfile = action.userProfile
            })

        case SET_STATUS:
            return produce(state, draft => {
                draft.status = action.status;
            })
        case SET_MY_PROFILE:
            return produce(state, draft => {
                draft.myProfile = action.myProfile
            })

        case SET_FRIENDS:
            return produce(state, draft => {
                draft.friends = action.friends
            })

        case SAVE_PHOTO_SUCCESS:
            return produce(state, draft => {
                draft.userProfile.photos = action.photos
            })
        
        case SET_PROFILE_SUCCESS:
            return produce(state, draft => {
                draft.userProfile = action.userProfile
            })
        case SET_ERROR_MESSAGE:
            return produce(state, draft => {
                draft.errorMessage = action.errorMessage
            })

        default:
            return state;
    }
}



export const addPost = (text) => ({ type: ADD_POST, text })

export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE, userProfile
})

export const setErrorMessage = (ErrorMessage) => ({
    type: SET_ERROR_MESSAGE, ErrorMessage
})

export const setMyProfile = (myProfile) => ({
    type: SET_MY_PROFILE, myProfile
})

export const setProfile = (profile) => ({
    type: SET_PROFILE_SUCCESS, profile
})


export const setStatus = (status) => ({ type: SET_STATUS, status })

export const setPhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const setFriends=(friends)=>({type:SET_FRIENDS,friends})

export const getProfile = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id);
        dispatch(setUserProfile(data))
    }
}

export const getMyProfile = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id);
        dispatch(setMyProfile(data))
    }
}

export const getUsersStatus = (id) => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(id);
        dispatch(setStatus(status))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let responce = await profileAPI.putStatus(status);
        if (responce.resultCode === 0) dispatch(setStatus(status))
    }
}

export const getFriends=()=>{
    return async(dispatch)=>{
        let responce=await usersAPI.getUsers();
        let friends=responce.filter(u=>u.followed===true)
        dispatch(setFriends(friends))
    }
}

export const savePhoto=(file)=>{
    return async (dispatch)=>{
        let responce=await profileAPI.savePhoto(file);
        if(responce.resultCode===0){
            dispatch(setPhotoSuccess(responce.data.potos))
        }
    }
}

export const saveProfile=(profile)=>{
    return async (dispatch,getState)=>{
        let id=getState().auth.userId
        let responce=await profileAPI.setProfile(profile);
        if(responce.resultCode===0){
            dispatch(getProfile(id))
        }
        else{
            let errorMessage = responce.messages[0].length > 0 ? responce.messages[0] : 'Some unknown error'
            dispatch(setErrorMessage(errorMessage))
        }
    }
}


export default profileReducer;
