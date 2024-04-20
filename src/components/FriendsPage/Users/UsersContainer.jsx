import React from "react";
import { connect } from 'react-redux';
import { setCurrentPage, getUsers, addUser, deleteUserThunk }
from './../../../redux/usersReducer';
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { withAurhRedirect } from './../../../HOC/withAurhRedirect';
import { compose } from "redux";
import {  getUsersFromState, getPageSize, getCurrentPage, getTotalUsersCount, getIsFetching, getFollowingInProgress } from "../../../redux/usersSelectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users {...this.props} onPageChanged={this.onPageChanged} />}
        </>
    }
}



let mapStateToProps = (state) => {

    return {
        users: getUsersFromState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

let withRedirect = withAurhRedirect(UsersAPIComponent)

let UsersContainer = connect(mapStateToProps, {
    setCurrentPage, getUsers,
    addUser, deleteUserThunk,
})(withRedirect)

export default compose(
    connect(mapStateToProps, {
        setCurrentPage, getUsers,
        addUser, deleteUserThunk,
    }),
    withAurhRedirect,
)(UsersAPIComponent)
