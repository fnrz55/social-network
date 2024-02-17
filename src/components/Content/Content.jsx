import c from './Content.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Content = (props) => {
    
    return (
        <div className={c.profile} >
            <MyPostsContainer  />
            <ProfileInfoContainer owner={props.owner} />
        </div>

    )
}

export default Content