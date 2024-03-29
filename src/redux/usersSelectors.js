import { createSelector } from "reselect";

const getUsersSelector = (state) => (state.usersPage.users)

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

// export const getUsersSuperSelector = createSelector(getUsers, getIsFetching, (users, isFetching) => {
//     // debugger
//     return users.filter(u => true)
// })

export const getPageSize = (state) => (state.usersPage.pageSize)

export const getTotalUsersCount = (state) => (state.usersPage.totalUsersCount)

export const getCurrentPage = (state) => (state.usersPage.currentPage)

export const getIsFetching = (state) => (state.usersPage.isFetching)

export const getFollowingProgress = (state) => (state.usersPage.followingProgress)