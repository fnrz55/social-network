import React from "react";
import { connect } from 'react-redux';
import { setCurrentPage, addUser, deleteUserThunk,getFriends }
from './../../../redux/usersReducer';
import Friends from "./Friends";
import Preloader from "../../common/Preloader/Preloader";
import { withAurhRedirect } from './../../../HOC/withAurhRedirect';
import { compose } from "redux";
import { getTotalFriendsCount,getFriendsFromState, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../../redux/usersSelectors";

class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getFriends(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Friends {...this.props} onPageChanged={this.onPageChanged} />}
        </>
    }
}



let mapStateToProps = (state) => {

    return {
        friends:getFriendsFromState(state),
        pageSize: getPageSize(state),
        totalFriendsCount: getTotalFriendsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,addUser, deleteUserThunk,getFriends
    }),
    withAurhRedirect,
)(FriendsAPIComponent)