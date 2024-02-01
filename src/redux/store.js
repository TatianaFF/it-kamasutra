// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 12},
//                 {id: 2, message: 'It\'s my post', likesCount: 11}
//             ],
//             newPostText: 'post text'
//         },
//
//         dialogsPage: {
//             dialogs: [
//                 {
//                     id: 1,
//                     name: 'Andrey',
//                     img: 'https://i.pinimg.com/550x/71/f4/94/71f49475aadd82338485844f50e167f9.jpg'
//                 },
//                 {
//                     id: 2,
//                     name: 'Sveta',
//                     img: 'https://img0.liveinternet.ru/images/attach/c/7/97/238/97238850_large_ava46.jpg'
//                 },
//                 {
//                     id: 3,
//                     name: 'Sasha',
//                     img: 'https://img1.liveinternet.ru/images/attach/c/7/97/238/97238851_large_ava33.jpg'
//                 }
//             ],
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you'},
//                 {id: 3, message: 'Yo'}
//             ],
//
//             newMessageText: 'message'
//         },
//
//         sidebar: {}
//     },
//
//     getState() {
//         return this._state
//     },
//
//     _callSubscriber() {
//         console.log("State changed")
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber(this._state)
//     },
// }
//
// export default store
// window.store = store