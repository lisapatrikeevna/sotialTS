import {combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";


export type RootStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    users: usersReducer,
});

let store = createStore(reducers);

export default store;

// export type AddChangePostActionType={
//     type:'ADD-CHANGE-POST'
// }

// export type ChangeNewPostTextActionType={
//     type:'CHANGE-NEW-POST-TEXT'
//     newText: string
// }
// export type sendMessageAction={
//     type:'SEND-MESSAGE'
// }
// export type changeNewMessageAction={
//     type:'CHANGE-NEW-MESSAGE'
//     newText: string
// }