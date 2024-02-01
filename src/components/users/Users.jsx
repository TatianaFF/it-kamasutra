import React from 'react'
import { Paginator } from "../common/paginator/Paginator";
import { User } from "./User";

export let Users = ({ users, totalUsersCount, pageSize, currentPage, onPageChanged, ...props }) => {

    let usersElements = users.map(u => <User key={ u.id } user={ u } followingProgress={ props.followingProgress }
                                             unfollowUserThunk={ props.unfollowUserThunk }
                                             followUserThunk={ props.followUserThunk }/>)

    return (
        <div>
            { usersElements }
            <Paginator currentPage={ currentPage } onPageChanged={ onPageChanged } totalItemsCount={ totalUsersCount }
                       pageSize={ pageSize }/>
        </div>
    )
}