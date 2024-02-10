import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'
import s from '../../../img/Profile/send.svg'
import { useForm } from "react-hook-form"



const MyPosts = (props) => {


    let postsElements = props.posts
        .map(post => { return <Post text={post.text} likesCount={post.likesCount} /> })


    let newPostElement = React.createRef();

    let addPost = (text) => {
        props.addPost(text)
    }
    let postOnChange = () => {
        let text = newPostElement.current.value;
        props.postOnChange(text)

    }
    return (
        <div className={c.myPosts}>
            <div className={c.newPost}>
                <p>NEW POST</p>
                <PosrForm onSubmit={props.addPost} />
            </div>
            <div className={c.sort}>
                <div> SORT BY TRENDING</div>
            </div>
            {postsElements}
        </div>


    )
}

const PosrForm = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm()

    const onSubmit = (data) => {
        props.onSubmit(data.post)
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={c.input}>
                    <input {...register('post', { required: true })} autoComplete="off" placeholder='Whats new?' />
                </div>
                <div>
                    {isValid && <button>
                        <img src={s} alt="" />
                    </button>}
                </div>
            </form>
        </div>
    )

}

export default MyPosts