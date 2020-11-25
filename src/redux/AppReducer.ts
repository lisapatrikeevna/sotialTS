import {Dispatch} from "redux";
import {setAuthMyTC} from "./AuthReducer";

type setInitialACACType = ReturnType<typeof setInitialAC>
type BackgroundChangeACType = ReturnType<typeof BackgroundChangeAC>
type ThemeChangeACType = ReturnType<typeof ThemeChangeAC>
type DeleteSettingsACType = ReturnType<typeof DeleteSettingsAC>
type ActionType = setInitialACACType | BackgroundChangeACType | ThemeChangeACType;
export type themType = 'dark' | 'light' | 'blue' | 'red' | '';
export type InitialStateType = {
    initial: boolean
    bgBody: string
    theme: themType
}

let initialState: InitialStateType = {
    initial: false,
    bgBody: '',
    theme : '',
}
const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-INITIAL': {
            // debugger
            return {
                ...state,
                initial: true,
            }
        }
        case 'SET-BACKGROUND': {
            // debugger
            return {
                ...state,
                bgBody: action.name
            }
        }
        case 'SET-THEME': {
            // debugger
            return {
                ...state,
                theme: action.name
            }
        }
        default  :
            return state;
    }
}

export const setInitialAC = () => ({type: 'SET-INITIAL'} as const);
export const BackgroundChangeAC = (name: string) => ({type: 'SET-BACKGROUND', name} as const);
export const ThemeChangeAC = (name: themType) => ({type: 'SET-THEME', name} as const);
export const DeleteSettingsAC = (name: themType) => ({type: 'DELETE-SETTINGS', name} as const);
export const setInitialTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(setAuthMyTC());
    Promise.all([promise]).then(() => {
        //debugger
        dispatch(setInitialAC());
    })

};


export default appReducer;
