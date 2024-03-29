import s from './FormsControls.module.css'
import { Field } from "react-final-form";
import React from "react";

export const FormControl = ({ meta: { touched, error }, children }) => {

    const hasError = touched && error

    return (
        <div className={ s.formControl + " " + (hasError && s.error) }>
            <div>
                { children }
            </div>
            { hasError && <span>{ error }</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl { ...props }><textarea { ...input } { ...restProps }/></FormControl>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl { ...props }><input { ...input } { ...restProps }/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field validate={ validators } name={ name } component={ component } placeholder={ placeholder } { ...props }/>
        { text }
    </div>
)