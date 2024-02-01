import React from 'react'
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import { NavLink } from "react-router-dom";

export let User = ({ user, followingProgress, unfollowUserThunk, followUserThunk }) => {

    return (
        <div>
            <span>
                <div className={ s.wrapper }>
                    <NavLink to={ '/profile/' + user.id }>
                        <img src={ user.photos.small != null ? user.photos.small : userPhoto } className={ s.userPhoto }/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={ followingProgress.some(id => id === user.id) } onClick={ () => {
                                unfollowUserThunk(user.id)
                            } }>Unfollow</button>
                            : <button disabled={ followingProgress.some(id => id === user.id) } onClick={ () => {
                                followUserThunk(user.id)
                            } }>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{ user.name }</div>
                    <div>{ user.status }</div>
                </span>
                <span>
                    <div>{ "user.location.country" }</div>
                    <div>{ "user.location.city" }</div>
                </span>
            </span>
        </div>
    )
}