import {FollowUserApi, UserApi} from "../common/AsksApi";
import {Dispatch} from "redux";

type UnfollowACType = ReturnType<typeof unfollowAC>
type FollowACType = ReturnType<typeof followAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersACType = ReturnType<typeof setTotalUsersAC>
type IsFetchingACType = ReturnType<typeof isFetchingAC>
type follovinIsProgresACType = ReturnType<typeof followingIsProgressAC>
type UsersActionType = UnfollowACType | FollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersACType |IsFetchingACType|follovinIsProgresACType
export type usersInitialStateType = {
    users: Array<userItemType>
    pagesSize: number
    currentPage: number
    countUsers: number
    isFetching: boolean
    followingIsProgress:number[]
}
export type userItemType = {
    name: string
    id: number
    status: string
    followed: boolean
    photos: photoType
    uniqueUrlName: null

}
type  photoType = {
    small: string
    large: string
}
let initialState: usersInitialStateType = {
    users: [],
    pagesSize: 7,
    currentPage: 1,
    countUsers: 10,
    isFetching: false,
    followingIsProgress:[]
}

const usersReducer = (state: usersInitialStateType = initialState, action: UsersActionType): usersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET-USERS' : {
            // return {...state, users:[ ...state.users, ...action.users]}
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-COUNT': {
            return {...state, countUsers: action.totalCount}
        }
        case 'TOGGLE-IS-FETHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'FOLOVING-IS-PROGRES': {
            return {...state,
                followingIsProgress: action.followingIsProgress
                    ? [...state.followingIsProgress,action.id]
                    : state.followingIsProgress.filter(id=> id !==action.id)
            }
        }
        default  :
            return state;
    }
}


export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: Array<userItemType>) => ({type: 'SET-USERS', users: users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersAC = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount} as const)
export const isFetchingAC = (isFetching:boolean) => ({type: 'TOGGLE-IS-FETHING', isFetching} as const)
export const followingIsProgressAC = (followingIsProgress:boolean,id:number) => ({type: 'FOLOVING-IS-PROGRES', followingIsProgress,id} as const)

//type Dispatch<S> = Redux.Dispatch<S>;
export const getUsersTC = (currentPage:number,pagesSize:number)=>{
    // return(dispatch:Dispatch<S>)=>{
    //import {Dispatch} from "redux";!!!!!!!!!!!!!!!!!!!!!! type Dispatch
    return(dispatch: Dispatch)=>{
        dispatch(isFetchingAC(true))
        UserApi.getUsers(currentPage,pagesSize)
            .then(response => {
                dispatch(isFetchingAC(false));
                dispatch(setUsersAC(response.items));
                dispatch(setTotalUsersAC(response.totalCount));
            });

    }
}
export const onFollowTC = (id: number) =>{
    return(dispatch:Dispatch)=>{
        dispatch(followingIsProgressAC(true,id))
        FollowUserApi.follow(id)
            .then(response => {
                if(response.data.resultCode===0){  dispatch(followAC(id)) }
                dispatch(followingIsProgressAC(false,id))
            });
    }
}
export const onUnFollowTC = (id: number) =>{
    return(dispatch:Dispatch)=>{
        dispatch(followingIsProgressAC(true,id))
        FollowUserApi.unfollow(id)
            .then(response => {
                if(response.data.resultCode===0){ dispatch(unfollowAC(id)) }
                dispatch(followingIsProgressAC(false,id))
            });
    }

}
// window.state:usersInitialStateType=state:usersInitialStateType;
export default usersReducer;
