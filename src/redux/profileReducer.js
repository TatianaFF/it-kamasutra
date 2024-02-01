import { profileApi } from "../api/api";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my post', likesCount: 11 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.post,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (post) => ({ type: ADD_POST, post })

export const setProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })

export const setStatus = (status) => ({ type: SET_USER_STATUS, status: status })

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileApi.getProfile(userId)
    dispatch(setProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatus(status))

}

export default profileReducer