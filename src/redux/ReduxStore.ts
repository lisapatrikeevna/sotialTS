import {combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";


export type RootStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    users: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);
// @ts-ignore
window.store = store
export default store;
