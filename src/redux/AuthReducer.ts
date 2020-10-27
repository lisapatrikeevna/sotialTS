import {photosType} from "../components/ProfileWrap";
import {AuthMyApi, ProfileUserApi} from "../common/AsksApi";
import {Dispatch} from "redux";
import {setUserProfile} from "./ProfileReducer";

type setAuthMyACType = ReturnType<typeof setAuthMyAC>
type getAvatarACType = ReturnType<typeof getAvatarAC>
type ActionType = setAuthMyACType|getAvatarACType;
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
                aught: true
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

export const setAuthMyAC = (id: number, email: string, login: string) => ({
    type: 'SET-AUTH-MY', data: {id, email, login}
} as const)
const getAvatarAC = (id: number, ava: any,)=>({type:'SET-AVA',id,ava}as const)
export const setAuthMyTC = ()=>{
    return(dispatch:Dispatch)=>{
        AuthMyApi.getMy()
            .then(response => {
                if (response.resultCode === 0) {
                  //  debugger
                    let {id, email, login} = response.data
                    dispatch(setAuthMyAC(id, email, login))
                }
            });
        // ProfileUserApi.getUser(id)
        //     .then(response=>{
        //     dispatch(setUserProfile(response.data.data.avatar));
        //
        //     }
        // )
    }
}
// window.state:InitialStateType=state:InitialStateType;
export default authReducer;
