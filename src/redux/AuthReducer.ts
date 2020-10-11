type setAuthMyACType = ReturnType<typeof setAuthMyAC>
type ActionType =  setAuthMyACType;
 type InitialStateType = {
    id: number| null
    email: string| null
    login: string| null
    aught: boolean
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
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
    type: 'SET-AUTH-MY', data: {id, email, login} }as const )

// window.state:InitialStateType=state:InitialStateType;
export default authReducer;
