import React from "react";
import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { Preloader } from "./components/common/preloader/Preloader";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withSuspense } from "./hoc/withSuspense"

const DialogsContainer = lazy(() => import('./components/dialogs/DialogsContainer'))
const ProfileContainer = lazy(() => import('./components/profile/ProfileContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile/:userId?'>
                            { withSuspense(ProfileContainer) }
                        </Route>
                        <Route path='/dialogs*'>
                            { withSuspense(DialogsContainer) }
                        </Route>
                        <Route path='/users'><UsersContainer/></Route>
                        <Route path='/news'><News/></Route>
                        <Route path='/music'><Music/></Route>
                        <Route path='/settings'><Settings/></Route>
                        <Route path={ '/login' }><Login/></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App)