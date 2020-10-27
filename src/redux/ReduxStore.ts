import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
//import {reduser as formReducer} from 'redux-form'
import { reducer as formReducer } from 'redux-form'

export type RootStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
    //login: lo
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store
export default store;
