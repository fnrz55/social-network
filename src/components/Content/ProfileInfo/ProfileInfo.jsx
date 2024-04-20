import c from './ProfileInfo.module.css'
import Friend from './Friend/Friend';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProlileStatusWithHooks';
import { useState } from 'react';
import ProfileForm from './ProfileForm';
import set from '../../../img/Profile/settings-icon-2048x2046-cw28eevx.png'
const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [showChangeMenu, setShowChangeMenu] = useState(false)


    const handleRedactProfile = () => {
        setEditMode(!editMode)
    }

    let friendsElements = props.friends
        .map(friend => { return <Friend key={friend.id} avatar={friend.photos.small} id={friend.id} name={friend.name} /> })

    if (!props.userProfile) {
        return <Preloader />
    }

    const onProfilePicChange = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={c.profile} >
            <div className={c.backgroundCont}>
                <div className={c.background}>
                    <img src="https://i.pinimg.com/564x/15/8a/1b/158a1b79e4f7559b48067da9369c38cb.jpg"></img>
                </div>
                <div className={c.avatarHoverCont} onMouseEnter={() => setShowChangeMenu(true)} onMouseLeave={() => setShowChangeMenu(false)}>
                <div className={c.avatarPic} >
                    <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : "https://i.pinimg.com/564x/06/a0/59/06a059e6ef315c59c3eb07dfb54e27d2.jpg"}/>      
                </div>
                {props.owner && showChangeMenu && editMode && <div className={c.upload} onMouseEnter={() => setShowChangeMenu(true)} onMouseLeave={() => setShowChangeMenu(false)}><label htmlFor="file">Uoload new photo</label> <input id='file' type="file" onChange={onProfilePicChange} /></div>}
                </div>
                
            </div>
            <div className={c.container}>

                <div className={c.info}>
                    {!editMode&& <div className={c.name}>
                        {props.userProfile.fullName}
                    </div>}
                    <div className={c.descriptipon}>
                        {
                            editMode ? <ProfileForm
                                profile={props.userProfile} saveProfile={props.saveProfile} handleRedactProfile={handleRedactProfile}  errorMessage={props.errorMessage}/>
                                : <ProfileDescription userProfile={props.userProfile} isOwner={props.owner}
                                    handleRedactProfile={handleRedactProfile} status={props.status} updateStatus={props.updateStatus} />
                        }

                    </div>
                </div>
            </div>
            <div on className={c.friendsBlock}>
                <h3>MY FRIENDS </h3>
                <div className={c.friends}>
                    {friendsElements.slice(0, 6)}
                </div>
            </div>
        </div>
    )
}


export const ProfileDescription = ({ userProfile, updateStatus,
    status, isOwner,
    handleRedactProfile }) => {
    return (<div>
        {isOwner && <button className={c.edit} onClick={handleRedactProfile}><img src={set} alt="" /></button>}
        {status && <ProfileStatusWithHooks updateStatus={updateStatus} status={status} />}
        {userProfile.aboutMe && <p><span>Description: </span> {userProfile.aboutMe}</p>}
        {userProfile.contacts.vk && <p><span>ВК: </span> {userProfile.contacts.vk}</p>}
        {userProfile.contacts.instagram && <p><span>instagram: </span> {userProfile.contacts.instagram}</p>}
        {userProfile.lookingForAJob && <p><span>Просьбы о работе: </span> {userProfile.lookingForAJobDescription}</p>}
    </div>
    )
}






export default ProfileInfo