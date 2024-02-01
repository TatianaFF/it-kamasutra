import React from 'react'
import { connect } from "react-redux";
import { getUsersThunk, followUserThunk, unfollowUserThunk } from "../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../common/preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        let { currentPage, pageSize } = this.props
        this.props.getUsersThunk(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        let { getUsersThunk, pageSize } = this.props
        getUsersThunk(pageNumber, pageSize)
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader/> : null }
            <Users
                totalUsersCount={ this.props.totalUsersCount }
                pageSize={ this.props.pageSize }
                currentPage={ this.props.currentPage }
                onPageChanged={ this.onPageChanged }
                users={ this.props.users }
                followUserThunk={ this.props.followUserThunk }
                unfollowUserThunk={ this.props.unfollowUserThunk }
                followingProgress={ this.props.followingProgress }
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

let mapDispatchToProps = { getUsersThunk, followUserThunk, unfollowUserThunk }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer)