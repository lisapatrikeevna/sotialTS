import {ProfileUserApi} from "../common/AsksApi";
import {Dispatch, Reducer} from "redux";

type AddChangePostActionType = ReturnType<typeof AddChangePostAC>
// type ChangeNewPostTextActionType = ReturnType<typeof OnPostChangeActionCreator>
type setUserProfile = ReturnType<typeof setUserProfile>
type setUserStatus = ReturnType<typeof setUserStatus>

type dispatchActionType = AddChangePostActionType | setUserProfile | setUserStatus;


type profileInitialStateType = {
    messageForNewPost: string;
    posts: Array<postType>
    //messageForNewPost: string
    profile: number|null
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
    status:''
}

const ADD_CHANGE_POST = "ADD-CHANGE-POST";
// const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const profileReducer: Reducer<profileInitialStateType,dispatchActionType> = (state = initialState, action): profileInitialStateType => {
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

        // case CHANGE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         messageForNewPost: action.message
        //     };

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

        default :
            return state;
    }
}
export const AddChangePostAC = (value:string) => ({type: ADD_CHANGE_POST,value} as const)
// export const OnPostChangeActionCreator = (newText: string) => ({type: CHANGE_NEW_POST_TEXT, message: newText} as const)
export const setUserProfile = (profile: number) => ({type: SET_USER_PROFILE, profile} as const)
export const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const updateUserStatus = (status: string) => ({type: SET_STATUS, status} as const)
export default profileReducer;

export const getUserProfileTC = (userID:string) =>{
    return(dispatch:Dispatch)=>{
        ProfileUserApi.getUser(+userID)
            .then(response => {
                // this.props.toggleIsFetching(false)
                dispatch(setUserProfile(response.data));
            });

    }
}
export const getUserStatusTC = (userId:string) =>{
    return(dispatch:Dispatch)=>{
        ProfileUserApi.getStatus(+userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            });

    }
}
export const updateUserStatusTC = (status:string) =>{
    return(dispatch:Dispatch)=>{
        //debugger
        ProfileUserApi.updateStatus(status)
            .then(response => {
                debugger
                if (response.data.resultCode===0) {
                    dispatch(updateUserStatus(status));
                }
            });

    }
}


//
// import React from "react";
// import {Redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import { RootStateType } from "../redux/ReduxStore";
//
// let mapStateToPropsForRedirect = (state: RootStateType) => ({
//     aught: state.auth.aught
// });
//
// export const  IsLoginRedirect  = (Component: any) => {
//
//     class RedirectComponent extends React.Component <any>{
//         render() {
//             if (!this.props.aught) return <Redirect to='/login' />
//
//             return <Component {...this.props}/>
//         }
//     }
//
//     let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
//
//     return ConnectedAuthRedirectComponent;
//
// }


// import { Redirect } from "react-router-dom";
// import React from "react";
//
// export const IsLoginRedirect = (SomeComponent:any)=>{
//     debugger
//     return(props:any)=>{
//         return<>
//         if(!props.aught)<Redirect to='login'/>
//             <SomeComponent {...props}/>
//         </>
//     }
// }