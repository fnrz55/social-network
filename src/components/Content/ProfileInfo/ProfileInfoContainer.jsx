import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';
import { updateStatus } from './../../../redux/profileReducer';
import { getFriends } from './../../../redux/usersSelectors';

let mapStateToProps = (state) => {
  return {
    friends: getFriends(state),
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status
  }
}

const ProfileInfoContainer = connect(mapStateToProps, { updateStatus })(ProfileInfo)

export default ProfileInfoContainer