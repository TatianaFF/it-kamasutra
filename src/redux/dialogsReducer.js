const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Andrey',
            img: 'https://i.pinimg.com/550x/71/f4/94/71f49475aadd82338485844f50e167f9.jpg'
        },
        {
            id: 2,
            name: 'Sveta',
            img: 'https://img0.liveinternet.ru/images/attach/c/7/97/238/97238850_large_ava46.jpg'
        },
        {
            id: 3,
            name: 'Sasha',
            img: 'https://img1.liveinternet.ru/images/attach/c/7/97/238/97238851_large_ava33.jpg'
        }
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.message}]
            }
        }
        default:
            return state
    }
}

export const sendMessageActionCreator = (message) => ({ type: SEND_MESSAGE, message })

export default dialogsReducer