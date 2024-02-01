import profileReducer, { addPostActionCreator } from "./profileReducer";

it ('length of posts should be incremented', () => {
    let action = addPostActionCreator("hello action")

    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my post', likesCount: 11 }
        ]
    }
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})