import {photosType} from "../components/ProfileWrap";
import {AuthMyApi} from "../common/AsksApi";

type setAuthMyACType = ReturnType<typeof setAuthMyAC>
type ActionType = setAuthMyACType;
type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    avatar: photosType | null
    aught: boolean
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
            return {
                ...state,
                ...action.data,
                aught: true
            }
        }
        default  :
            return state;
    }
}

export const setAuthMyAC = (id: number, email: string, login: string) => ({
    type: 'SET-AUTH-MY', data: {id, email, login}
} as const)

export const setAuthMyTC = ()=>{
    return(dispatch:any)=>{
        AuthMyApi.getMy()
            .then(response => {
                if (response.resultCode === 0) {
                    debugger
                    let {id, email, login} = response.data
                    dispatch(setAuthMyAC(id, email, login))
                }
            });
    }
}
// window.state:InitialStateType=state:InitialStateType;
export default authReducer;
