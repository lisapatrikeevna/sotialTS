import React from 'react';
import {Dispatch} from "redux";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    userItemType
} from "../../redux/UsersReducer";
import {RootStateType} from "../../redux/ReduxStore";


let mapStateToProps =(state:RootStateType)=> {
    return { users: state.users.users}
}
let mapDispatchToProps =(dispatch:Dispatch)=> {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users: Array<userItemType>) => {
            dispatch(setUsersActionCreator(users))

        },
    }
}
 const UsersWrap = connect (mapStateToProps, mapDispatchToProps) (Users);
export default UsersWrap;