import { produce } from "immer"
import { updateObjInArray } from "../utilits/validators/objectHelpers";
import { followAPI, usersAPI } from './../API/api';

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const ADD = "ADD"
const DELETE = "DELETE"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return produce(state, draft => {
                draft.users =updateObjInArray(draft.users,action.userId,"id",{followed:true}) 
            })

        case DELETE:
            return produce(state, draft => {
                draft.users =updateObjInArray(draft.users,action.userId,"id",{followed:false})
            })

        case SET_USERS:
            return produce(state, draft => {
                draft.users = action.users
            })

        case SET_CURRENT_PAGE:
            return produce(state, draft => {
                draft.currentPage = action.currentPage
            })

        case SET_TOTAL_COUNT:
            return produce(state, draft => {
                draft.totalUsersCount = action.totalUsersCount
            })

        case TOGGLE_IS_FETCHING:
            return produce(state, draft => {
                draft.isFetching = action.isFetching
            })

        case TOGGLE_IS_FOLLOWING:
            return produce(state, draft => {
                action.isFetching ? draft.followingInProgress.push(action.userId)
                    : draft.followingInProgress = draft.followingInProgress.filter(id => id != action.userId)
            })

        default:
            return state;
    }

}

export const addSucces = (userId) => ({ type: ADD, userId })

export const deleteSucces = (userId) => ({ type: DELETE, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount })

export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setIsFetching(false))
        dispatch(setTotalUsersCount(data.totalCount ))
    }
}
export const addUser = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        let data = await followAPI.follow(id)
        if (data.resultCode === 0) {
            dispatch(addSucces(id));
        }
        dispatch(toggleFollowingInProgress(false, id));
    }
}

export const deleteUserThunk = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        let data = await followAPI.unfollow(id)
        if (data.resultCode === 0) {
            dispatch(deleteSucces(id));
        }
        dispatch(toggleFollowingInProgress(false, id));
    }
}

export default usersReducer
