type SendMessageAType = ReturnType<typeof sendMessageAC>
// type ChangeNewMessageAType = ReturnType<typeof changeNewMessage>
type dialogsActionType = SendMessageAType;
type messagesItemType = {
    message: string
    id : number
}
export type dialogsItemType = {
    name: string
    id : number
}
export type dialogsInitialStateType = {
    dialogItem:Array<dialogsItemType>
    messageData: Array<messagesItemType>
}

let initialState:dialogsInitialStateType={
    dialogItem: [
        {name: "lisa", id: 1},
        {name: "Dan" , id: 2 },
        {name: "Kat" , id: 3}
    ] ,
    messageData: [
        {id: 1, message: 'ok'},
        {id: 2, message: 'to doms'},
        {id: 3, message: 'hire you go!'}
    ],
   // messageForNewDialog: '',
}
const SEND_MESSAGE = "SEND-MESSAGE";
// const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";
const dialogReducer = ( state:dialogsInitialStateType=initialState, action:dialogsActionType) => {
   switch (action.type) {
       case SEND_MESSAGE: {
           // debugger
           const newText: messagesItemType = {
               id: new Date().getTime(),
               message:  action.value
           }
           return {
               ...state,
                messageData: [...state.messageData,newText]
           }
          // debugger
       }
       //
       // case CHANGE_NEW_MESSAGE:
       //     // debugger
       //     return {
       //         ...state,
       //         messageForNewDialog : action.newText,
       //     }

       default  :
           return state;
   }

}
export const sendMessageAC = (value:string) => ({type:SEND_MESSAGE,value} as const)


export default dialogReducer;