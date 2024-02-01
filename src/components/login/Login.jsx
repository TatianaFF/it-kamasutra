import React from 'react'
import { Form, Field } from 'react-final-form'
import { createField, Input } from "../common/formsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router";
import s from "../common/formsControls/FormsControls.module.css"

const Login = ({ login, isAuth, errorLogin }) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) return <Redirect to={ '/profile' }/>

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={ onSubmit } errorLogin={ errorLogin }/>
        </div>
    )
}

const LoginForm = ({ onSubmit, errorLogin }) => (
    <Form
        onSubmit={ onSubmit }
        render={ ({ handleSubmit }) => (
            <form onSubmit={ handleSubmit }>
                { createField("Email", "email", required, Input) }
                { createField("Password", "password", required, Input, { type: "password" }) }
                { createField(null, "rememberMe", null, Input, { type: "checkbox" }, "remember me") }

                { errorLogin &&
                    <div className={ s.formSummaryError }>
                        { errorLogin }
                    </div>
                }
                <button type="submit">Submit</button>
            </form>
        ) }
    />
)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    errorLogin: state.auth.errorLogin
})

export default connect(mapStateToProps, { login })(Login)