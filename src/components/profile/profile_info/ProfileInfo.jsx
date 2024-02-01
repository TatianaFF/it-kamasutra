import React from "react";
import s from './ProfileInfo.module.css'
import { Preloader } from "../../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) return <Preloader/>

    let contactsElements = Object.entries(profile.contacts).map(c => <div> { c[0] } : { c[1] } </div>)

    return (
        <div>
            <div className={ s.descriptionBlock }>
                <img src={ profile.photos.large || userPhoto }/>
                <ProfileStatusWithHooks status={ status } updateStatus={ updateStatus }/>
                <h3>{ profile.fullName }</h3>
                <h3>{ profile.lookingForAJob ? '1' : '0' }</h3>
                <h3>{ profile.lookingForAJobDescription }</h3>
                { contactsElements }
            </div>
        </div>
    )
}

export default ProfileInfo