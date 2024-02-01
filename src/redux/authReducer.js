import { authApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR_LOGIN = 'SET_ERROR_LOGIN'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errorLogin: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
                errorLogin: null
            }
        }
        case SET_ERROR_LOGIN: {
            return {
                ...state,
                errorLogin: action.errorLogin
            }
        }
        default:
            return state
    }
}

export const setAuthUser = (id, email, login, isAuth) => (
    {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    }
)

const setErrorLogin = (errorLogin) => ({type: SET_ERROR_LOGIN, errorLogin})

export const getAccountData = () => async (dispatch) => {
    let response = await authApi.getAccountData()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUser(id, email, login, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAccountData())
    } else {
        dispatch(setErrorLogin(response.data.messages[0]))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false))
    }
}

export default authReducer