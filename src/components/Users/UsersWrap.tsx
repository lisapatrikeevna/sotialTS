import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followActionCreator, isFetchingAC, setCurrentPageActionCreator, setTotalUsersActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    userItemType
} from "../../redux/UsersReducer";
import {RootStateType} from "../../redux/ReduxStore";
import axios from "axios";
import {Users} from "./Users";
import preloader from "./../../assets/img/805.gif"
import {Preloader} from "../../common/Preloader";

type propsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<userItemType>) => void
    users: Array<userItemType>
    pagesSize: number
    currentPage: number
    countUsers: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsers: (totalCount: number) => void
    isFetching:boolean
    toggleIsFetching:(isFetching:boolean)=>void
}
type AxiosGetType = {
    items: Array<userItemType>
    totalCount: number
    error: string
}

export class UsersContainer extends React.Component<propsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<AxiosGetType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsers}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
            });

    }

    onPageChanged = (currentPage: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get<AxiosGetType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.countUsers}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null }
                <Users
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    pagesSize={this.props.pagesSize}
                    currentPage={this.props.currentPage}
                    countUsers={this.props.countUsers}
                    onPageChanged={this.onPageChanged}
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
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
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
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsers: (totalCount: number) => {
            dispatch(setTotalUsersActionCreator(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(isFetchingAC(isFetching))
        }
    }
}
const UsersWrap = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default UsersWrap;