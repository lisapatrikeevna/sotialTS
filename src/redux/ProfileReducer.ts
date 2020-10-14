import {ProfileUserApi} from "../common/AsksApi";

type AddChangePostActionType = ReturnType<typeof AddChangePostActionCreator>
type ChangeNewPostTextActionType = ReturnType<typeof OnPostChangeActionCreator>
type setUserProfile = ReturnType<typeof setUserProfile>

type dispatchActionType = AddChangePostActionType | ChangeNewPostTextActionType | setUserProfile;


type profileInitialStateType = {
    posts: Array<postType>
    messageForNewPost: string
    profile: any
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
    profile: null
}

const ADD_CHANGE_POST = "ADD-CHANGE-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const profileReducer = (state: profileInitialStateType = initialState, action: dispatchActionType): profileInitialStateType => {
    switch (action.type) {
        case ADD_CHANGE_POST:
            const newPost: postType = {
                id: new Date().getTime(),
                likesCount: 0,
                message: state.messageForNewPost
            }
            return {
                ...state,
                messageForNewPost: '',
                posts: [...state.posts, newPost]
            };

        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                messageForNewPost: action.message
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default :
            return state;
    }
}
export const AddChangePostActionCreator = () => ({type: ADD_CHANGE_POST} as const)
export const OnPostChangeActionCreator = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, message: newText} as const)
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export default profileReducer;

export const getUserProfileTC = (userID:string) =>{
    return(dispatch:any)=>{
        ProfileUserApi.getUser(+userID)
            .then(response => {
                // this.props.toggleIsFetching(false)
                dispatch(setUserProfile(response.data));
            });

    }
}