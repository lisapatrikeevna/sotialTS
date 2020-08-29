import {combineReducers, createStore} from "redux";
import dialogReducer, {changeMessageActionCreator, SendMessageActionCreator} from "./DilogReducer";
import profileReducer from "./ProfileReducer";

export type addChangePostAction={
    type:'ADD-CHANGE-POST'
}
export type changeNewPostTextAction={
    type:'CHANGE-NEW-POST-TEXT'
    newText: string
}
// export type sendMessageAction={
//     type:'SEND-MESSAGE'
// }
export type sendMessageAction = ReturnType<typeof SendMessageActionCreator>
// export type changeNewMessageAction={
//     type:'CHANGE-NEW-MESSAGE'
//     newText: string
// }
export type changeNewMessageAction= ReturnType<typeof changeMessageActionCreator>
export type dispatchActionType=changeNewPostTextAction|sendMessageAction|changeNewMessageAction|addChangePostAction;
export type storeType={
    _state: rootStateType
    getState: ()=> rootStateType
    changeNewPostText: (newText:string)=>void
    addChangePost: ()=>void
    sendMessage: ()=>void
    changeNewMessage: (messageText: string)=>void
    _onChange: (state: rootStateType)=> void
    subscribe: (observer: () => void)=>void
    dispatch:(action:dispatchActionType)=>void
}
export type dialogsType = {
    dialogItem: Array<dialogsItemType>
    messageData: Array<messagesItemType>
    messageForNewDialog: string
}
export type profileType = {
    post: Array<postType>
    messageForNewPost: string
}
export type messagesItemType = {
    message: string
    id : number | string
}
export type dialogsItemType = {
    name: string
    id : number | string
}
export type postType = {
    message: string
    likesCount: number
    id: number
}
export type rootStateType={
    profile: profileType
    dialogs: dialogsType
}


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer
});

let store= createStore(reducers);

export default store;