import {Dispatch} from "redux";
import {setAuthMyTC} from "./AuthReducer";

type setInitialACACType = ReturnType<typeof setInitialAC>
type ActionType = setInitialACACType ;
export type InitialStateType = {
    initial: boolean
}

let initialState: InitialStateType = {
    initial: false
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
        default  :
            return state;
    }
}

export const setInitialAC = () => ({type: 'SET-INITIAL'} as const);
export const setInitialTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(setAuthMyTC());
    Promise.all([promise]).then(()=>{
        dispatch(setInitialAC());
    })

};


export default appReducer;
