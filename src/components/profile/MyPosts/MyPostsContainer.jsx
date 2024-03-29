import React from 'react'
import { addPostActionCreator } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPostActionCreator(post))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer