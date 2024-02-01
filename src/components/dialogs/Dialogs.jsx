import s from "./Dialogs.module.css"
import DialogItem from "./dialog_item/DialogItem";
import Message from "./message/Message";
import React from "react";
import { Field, Form } from "react-final-form";
import { Textarea } from "../common/formsControls/FormsControls";
import { composeValidators, maxLengthCreator, required } from "../../utils/validators/validators";

export const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={ d.id } name={ d.name } img={ d.img }/>)
    let messagesElements = state.messages.map(m => <Message message={ m.message }/>)

    const addNewMessage = (message) => {
        props.sendMessage(message)
    }

    return (
        <div>
            <div className={ s.dialogs }>
                <div className={ s.dialogsItems }>
                    { dialogsElements }
                </div>
                <div className={ s.messages }>
                    { messagesElements }

                    <AddMessageForm addNewMessage={ addNewMessage }/>

                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.addNewMessage(formData.message)
    }

    const maxLength50 = maxLengthCreator(50)

    return (
        <Form
            onSubmit={ onSubmit }
            render={ ({ handleSubmit }) => (
                <form onSubmit={ handleSubmit }>
                    <div>
                        <Field name={ "message" } component={ Textarea } placeholder="Enter your message"
                               validate={ composeValidators(required, maxLength50) }/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            ) }
        />
    )
}