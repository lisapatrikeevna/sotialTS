type UnfollowActionCreatorType = ReturnType<typeof unfollowActionCreator>
type FollowActionCreatorType = ReturnType<typeof followActionCreator>
type SetUsersActionCreatorType = ReturnType<typeof setUsersActionCreator>
type SetCurrentPageActionCreatorType = ReturnType<typeof setCurrentPageActionCreator>
type SetTotalUsersActionCreatorType = ReturnType<typeof setTotalUsersActionCreator>
type IsFetchingACType = ReturnType<typeof isFetchingAC>
type UsersActionType = UnfollowActionCreatorType | FollowActionCreatorType | SetUsersActionCreatorType | SetCurrentPageActionCreatorType | SetTotalUsersActionCreatorType |IsFetchingACType
type ActionType = UsersActionType
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
    isFetching: true
}

const usersReducer = (state: usersInitialStateType = initialState, action: ActionType): usersInitialStateType => {
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


export const followActionCreator = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollowActionCreator = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersActionCreator = (users: Array<userItemType>) => ({type: 'SET-USERS', users: users} as const)
export const setCurrentPageActionCreator = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersActionCreator = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount} as const)
export const isFetchingAC = (isFetching:boolean) => ({type: 'TOGGLE-IS-FETHING', isFetching} as const)

// window.state:usersInitialStateType=state:usersInitialStateType;
export default usersReducer;
