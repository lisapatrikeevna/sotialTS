type UnfollowACType = ReturnType<typeof unfollowAC>
type FollowACType = ReturnType<typeof followAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersACType = ReturnType<typeof setTotalUsersAC>
type IsFetchingACType = ReturnType<typeof isFetchingAC>
type UsersActionType = UnfollowACType | FollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersACType |IsFetchingACType
export type usersInitialStateType = {
    users: Array<userItemType>
    pagesSize: number
    currentPage: number
    countUsers: number
    isFetching: boolean
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
    isFetching: false
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

// window.state:usersInitialStateType=state:usersInitialStateType;
export default usersReducer;
