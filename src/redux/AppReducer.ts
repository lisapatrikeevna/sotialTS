import {Dispatch} from "redux";
import {setAuthMyTC} from "./AuthReducer";

type setInitialACACType = ReturnType<typeof setInitialAC>
type BackgroundChangeACType = ReturnType<typeof BackgroundChangeAC>
type ThemeChangeACType = ReturnType<typeof ThemeChangeAC>
type DeleteSettingsThemeACType = ReturnType<typeof DeleteSettingsThemeAC>
type DeleteSettingsImgACType = ReturnType<typeof DeleteSettingsImgAC>
type DeleteOllSettingsACType = ReturnType<typeof DeleteOllSettingsAC>
type ActionType = setInitialACACType | BackgroundChangeACType | ThemeChangeACType|DeleteOllSettingsACType|DeleteSettingsImgACType|DeleteSettingsThemeACType;
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
        case 'DELETE-OLL-SETTINGS':
            return {
                ...state,
                theme: '',
                bgBody: ''
            }
        case 'DELETE-THEME-SETTINGS':
            return {
                ...state,
                theme: '',
            }
        case 'DELETE-IMG-SETTINGS':
            return {
                ...state,
                bgBody: ''
            }
        default  :
            return state;
    }
}

export const setInitialAC = () => ({type: 'SET-INITIAL'} as const);
export const BackgroundChangeAC = (name: string) => ({type: 'SET-BACKGROUND', name} as const);
export const ThemeChangeAC = (name: themType) => ({type: 'SET-THEME', name} as const);
export const DeleteOllSettingsAC = () => ({type: 'DELETE-OLL-SETTINGS'} as const);
export const DeleteSettingsThemeAC = () => ({type: 'DELETE-THEME-SETTINGS'} as const);
export const DeleteSettingsImgAC = () => ({type: 'DELETE-IMG-SETTINGS'} as const);
export const setInitialTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(setAuthMyTC());
    Promise.all([promise]).then(() => {
        //debugger
        dispatch(setInitialAC());
    })

};


export default appReducer;
