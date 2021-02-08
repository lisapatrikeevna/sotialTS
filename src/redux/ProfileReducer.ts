import {ProfileUserApi} from "../common/AsksApi";
import {Dispatch, Reducer} from "redux";
import {AxiosGetType, photosType} from "../components/ProfileWrap";
import {RootStateType} from "./ReduxStore";
import {stopSubmit} from "redux-form";

type AddChangePostActionType = ReturnType<typeof AddChangePostAC>
// type ChangeNewPostTextActionType = ReturnType<typeof OnPostChangeActionCreator>
type setUserProfile = ReturnType<typeof setUserProfile>
type setUserStatus = ReturnType<typeof setUserStatus>
type DeletePostType = ReturnType<typeof DeletePostAC>
type changePhotoSuccessACType = ReturnType<typeof changePhotoSuccessAC>

type dispatchActionType = AddChangePostActionType | setUserProfile | setUserStatus |
    DeletePostType | changePhotoSuccessACType


type profileInitialStateType = {
    messageForNewPost: string;
    posts: Array<postType>
    //messageForNewPost: string
    profile: any
    //profile: number | null
    status: string
}
export type postType = {
    id: number
    message: string
    likesCount: number
}

let initialState: profileInitialStateType = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: "some text", likesCount: 23},
        {id: 2, message: "here you goo", likesCount: 3},
        {id: 3, message: "let`s goo bebe", likesCount: 2}
    ],
    profile: null,
    status: ''
}

const ADD_CHANGE_POST = "ADD-CHANGE-POST";
// const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_NEW_PHOTO = "SET_NEW_PHOTO";

const profileReducer: Reducer<profileInitialStateType, dispatchActionType> = (state = initialState, action): profileInitialStateType => {
    switch (action.type) {
        case ADD_CHANGE_POST:
            const newPost: postType = {
                id: new Date().getTime(),
                likesCount: 0,
                message: action.value
            }
            return {
                ...state,
                // messageForNewPost: '',
                posts: [...state.posts, newPost]
            };
        case "DELETE_POST":
            let newListPost = state.posts.filter(p => p.id !== action.id)
            return {
                ...state,
                posts: newListPost
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_NEW_PHOTO:
            debugger
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            };

        default :
            return state;
    }
}
export const AddChangePostAC = (value: string) => ({type: ADD_CHANGE_POST, value} as const)
export const DeletePostAC = (id: number) => ({type: "DELETE_POST", id} as const)
// export const OnPostChangeActionCreator = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, message: newText} as const)
export const setUserProfile = (profile: number) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const updateUserStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const changePhotoSuccessAC = (photos: photosType) => ({type: SET_NEW_PHOTO, photos} as const)
export default profileReducer;

export const getUserProfileTC = (userID: string) => {
    return (dispatch: Dispatch) => {
        ProfileUserApi.getUser(+userID)
            .then(response => {
                // this.props.toggleIsFetching(false)
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch) => {
        ProfileUserApi.getStatus(+userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            });
    }
}
export const updateUserStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        ProfileUserApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(updateUserStatus(status));
                }
            });
    }
}
export const changePhotoTC = (file: any) => async (dispatch: Dispatch) => {
    let res = await ProfileUserApi.updateUserPhoto(file)
    if (res.data.resultCode === 0) {
        // debugger
        dispatch(changePhotoSuccessAC(res.data.data.photos));
    }
}
export const saveProfileTC = (profile: AxiosGetType) => async (dispatch: Dispatch<any>, getState:()=>RootStateType) => {

   const id = getState().auth.id
    const res = await ProfileUserApi.saveProfile(profile)
    debugger
    if (res.data.resultCode === 0) {
        if (id!==null){
            dispatch(getUserProfileTC(id.toString()))
        }
        console.log(res);
    }else {
        dispatch(stopSubmit('IsOwner',{_error: res.data.messages[0]}))
    }
}

