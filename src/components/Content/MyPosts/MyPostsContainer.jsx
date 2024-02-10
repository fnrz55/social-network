import React from 'react'
import { addPost} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps=(props)=>{
    return{
        posts: props.profilePage.posts,
        newPostsText:props.profilePage.newPostsText,
        profile:props.profilePage.profile,  
    }
}


const MyPostsContainer=connect(mapStateToProps,{
    addPost,
})(MyPosts)


export default MyPostsContainer 