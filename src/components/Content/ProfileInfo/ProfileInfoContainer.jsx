import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';
import { updateStatus, savePhoto, saveProfile } from './../../../redux/profileReducer';
import { getFriends } from './../../../redux/usersSelectors';

let mapStateToProps = (state) => {
  
  return {
    friends: getFriends(state),
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    errorMessage:state.profilePage.errorMessage,
  }
}

const ProfileInfoContainer = connect(mapStateToProps, { updateStatus,savePhoto,saveProfile })(ProfileInfo)

export default ProfileInfoContainer