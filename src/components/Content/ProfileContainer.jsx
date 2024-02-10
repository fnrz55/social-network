import React from "react";
import Content from './Content';
import {  getProfile, getUsersStatus, updateStatus } from './../../redux/profileReducer';
import { connect } from 'react-redux';
import { withAurhRedirect } from '../../HOC/withAurhRedirect';
import { compose } from 'redux';
import { getUsers } from "../../redux/usersReducer";
import { getUserAuth } from '../../redux/authReducer';
import { withRouter } from './../../HOC/withRouter';
import { getFriends } from './../../redux/usersSelectors';

class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.id
            if (!userId) {
                userId = this.props.router.navigate('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getUsersStatus(userId)
        this.props.getUsers(1,100)
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    friends: getFriends(state),
    status: state.profilePage.status,
    id: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getProfile, getUsers,getUsersStatus, updateStatus, getUserAuth }),
    withAurhRedirect,
    withRouter,
)(ProfileContainerAPI)