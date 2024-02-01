import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { Field, Form } from "react-final-form";
import { composeValidators, maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/FormsControls";

export const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={ p.message } likesCount={ p.likesCount }/>)

    const addPost = (post) => {
        props.addPost(post)
    }

    return (
        <div className={ s.postsBlock }>
            <h3>My posts</h3>
            <div className={ s.posts }>
                { postsElements }
            </div>
            <AddPostForm addPost={ addPost }/>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.addPost(formData.post)
    }

    return (
        <Form
            onSubmit={ onSubmit }
            render={ ({ handleSubmit }) => (
                <form onSubmit={ handleSubmit }>
                    <div>
                        <Field validate={ composeValidators(required, maxLength10) } name={ "post" }
                               component={ Textarea }
                               placeholder="Enter your post"/>
                    </div>

                    <button type="submit">Add post</button>
                </form>
            ) }
        />
    )
}