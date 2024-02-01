import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile { ...this.props } profile={ this.props.profile } status={ this.props.status }
                        updateStatus={ this.props.updateStatus }/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}

let mapDispatchToProps = { getProfile, getStatus, updateStatus }

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthRedirectComponent))

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)