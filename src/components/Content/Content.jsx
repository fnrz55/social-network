import c from './Content.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Content = (props) => {
    
    return (
        <div className={c.profile} >
            <MyPostsContainer />
            <ProfileInfoContainer />
        </div>

    )
}

export default Content