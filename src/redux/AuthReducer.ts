import {photosType} from "../components/ProfileWrap";
import {AuthMyApi, ProfileUserApi} from "../common/AsksApi";
import {Dispatch} from "redux";
import {setUserProfile} from "./ProfileReducer";
import {stopSubmit} from "redux-form";

type setAuthMyACType = ReturnType<typeof setAuthMyAC>
type getAvatarACType = ReturnType<typeof getAvatarAC>
type ActionType = setAuthMyACType | getAvatarACType;
export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    avatar: photosType | null
    aught: boolean
    captchaUrl?: string | null
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    avatar: null,
    aught: false
}
const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-AUTH-MY': {
            // debugger
            return {
                ...state,
                ...action.data,
            //    aught: true
            }
        }
        case 'SET-AVA': {
            return {
                ...state,
                avatar: action.ava
            }
        }
        default  :
            return state;
    }
}

export const setAuthMyAC = (id: number | null, email: string | null, login: string | null,aught:boolean) => ({
    type: 'SET-AUTH-MY', data: {id, email, login,aught}
} as const)
const getAvatarAC = (id: number, ava: any,) => ({type: 'SET-AVA', id, ava} as const)
export const setAuthMyTC = () => {
    return (dispatch: Dispatch) => {
        AuthMyApi.getMy()
            .then(response => {
                if (response.resultCode === 0) {
                    //  debugger
                    let {id, email, login} = response.data
                    dispatch(setAuthMyAC(id, email, login,true))
                    // ProfileUserApi.getUser(id)
                    //     .then(response=>{
                    //             dispatch(setUserProfile(response.data.photos));
                    //
                    //         }
                    //     )
                }
            });

    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        //debugger
        AuthMyApi.login(email, password, rememberMe)
            .then(response => {
               // debugger
                if (response.resultCode === 0) {
                   // debugger
                    dispatch(setAuthMyTC())
                }else{
                    debugger
                    console.log(response.messages);
                    dispatch(stopSubmit('login',{ _error:response.messages}))
                }
            })

    }
}
export const logOutTC = () => {
    return (dispatch: Dispatch) => {
        AuthMyApi.logout().then(response => {
            if (response.resultCode === 0) {
                console.log(response.data)
               dispatch(setAuthMyAC(null, null, null,false))
            }
        })
    }
}
export default authReducer;
