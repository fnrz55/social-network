import c from './ProfileInfo.module.css'
import Friend from './Friend/Friend';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProlileStatus'
import ProfileStatusWithHooks from './ProlileStatusWithHooks';

const ProfileInfo = (props) => {
    let friendsElements = props.friends
        .map(friend => { return <Friend avatar={friend.photos.small} id={friend.id} name={friend.name} /> })

    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <div className={c.profile} >
            <div className={c.backgroundCont}>
                <div className={c.background}>
                    <img src="https://i.pinimg.com/564x/15/8a/1b/158a1b79e4f7559b48067da9369c38cb.jpg"></img>
                </div>
                <div className={c.avatarPic}>
                    <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : "https://i.pinimg.com/564x/06/a0/59/06a059e6ef315c59c3eb07dfb54e27d2.jpg"}></img>
                </div>
            </div>
            <div className={c.container}>
                <div className={c.info}>
                    <div className={c.name}>
                        {props.userProfile.fullName}
                    </div>
                    <div className={c.descriptipon}>
                        <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
                        <p><span>ВК: </span> {props.userProfile.contacts.vk}</p>
                        <p><span>instagram: </span> {props.userProfile.contacts.instagram}</p>
                        <p><span>Просьбы о работе: </span> {props.userProfile.lookingForAJobDescription}</p>

                    </div>
                </div>
            </div>
            <div className={c.friendsBlock}>
                <h3>MY FRIENDS </h3>
                <div className={c.friends}>
                    {friendsElements}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo