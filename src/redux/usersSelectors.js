import { createSelector } from "reselect"

export const getUsersFromState=(state)=>{
    return state.usersPage.users
}

export const getPageSize=(state)=>{
    return state.usersPage.pageSize
}

export const getTotalUsersCount=(state)=>{
    return state.usersPage.totalUsersCount
}

export const getCurrentPage=(state)=>{
    return state.usersPage.currentPage
}

export const getIsFetching=(state)=>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress=(state)=>{
    return state.usersPage.followingInProgress
}

export const getFriends=createSelector([getUsersFromState],(users)=>{
    return users.filter(u=>u.followed===true)
})



// export const getFriends=(state)=>{
//     return state.usersPage.users.filter(u=>u.followed===true)
// }
