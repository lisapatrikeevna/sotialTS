import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followingIsProgressAC,
    followAC,
    isFetchingAC,
    setCurrentPageAC,
    setTotalUsersAC,
    setUsersAC,
    unfollowAC,
    userItemType, getUsersTC, onFollowTC, onUnFollowTC
} from "../../redux/UsersReducer";
import {RootStateType} from "../../redux/ReduxStore";
import axios from "axios";
import {Users} from "./Users";
import preloader from "./../../assets/img/805.gif"
import {Preloader} from "../../common/Preloader";
import {UserApi} from "../../common/AsksApi";

type propsType = MapStateToPropsType & MapDispatchToPropsType
    // setUsers: (users: Array<userItemType>) => void
    // setCurrentPage: (currentPage: number) => void
    // setTotalUsers: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingIsProgress: (followingIsProgress: boolean, id: number) => void
   // getUsersTC: (currentPage: number, pagesSize: number) => void
   // onFollowTC:(id:number)=>void
   // onUnFollowTC:(id:number)=>void

export type MapStateToPropsType={
    users: Array<userItemType>
    pagesSize: number
    currentPage: number
    countUsers: number
    isFetching: boolean
    followingIsProgress: number[]
}
export type MapDispatchToPropsType={
    getUsersTC: (currentPage: number, pagesSize: number) => void
    onFollowTC:(id:number)=>void
    onUnFollowTC:(id:number)=>void
}
export type AxiosGetType = {
    items: Array<userItemType>
    totalCount: number
    error: string
    data: DataType
}
export type DataType = {
    id: number
    email: string
    login: string
    resultCode: number
}

export class UsersContainer extends React.Component<propsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pagesSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.getUsersTC(currentPage,this.props.pagesSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    pagesSize={this.props.pagesSize}
                    currentPage={this.props.currentPage}
                    countUsers={this.props.countUsers}
                    onPageChanged={this.onPageChanged}
                    followingIsProgress={this.props.followingIsProgress}
                    onFollowTC={this.props.onFollowTC}
                    onUnFollowTC={this.props.onUnFollowTC}
                />
            </>
        )
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.users.users,
        pagesSize: state.users.pagesSize,
        currentPage: state.users.currentPage,
        countUsers: state.users.countUsers,
        isFetching: state.users.isFetching,
        followingIsProgress: state.users.followingIsProgress
    }
}
const UsersWrap = connect(mapStateToProps, {
    getUsersTC,
    onFollowTC,
    onUnFollowTC,
})(UsersContainer);
export default UsersWrap;