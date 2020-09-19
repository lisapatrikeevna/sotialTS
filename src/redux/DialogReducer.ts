type SendMessageActionType = ReturnType<typeof SendMessageActionCreator>
type ChangeNewMessageActionType = ReturnType<typeof changeMessageActionCreator>
type dialogsActionType = SendMessageActionType| ChangeNewMessageActionType;
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
    messageForNewDialog:string
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
    messageForNewDialog: '',
}
const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";
const dialogReducer = ( state=initialState, action:dialogsActionType) => {
   switch (action.type) {
       case SEND_MESSAGE:
           const newText: messagesItemType = {
               id: new Date().getTime(),
               message: state.messageForNewDialog
           }
           return {
               ...state,
               messageForNewDialog : '',
               messageData: [...state.messageData,newText]
           }

       case CHANGE_NEW_MESSAGE:
           // debugger
           return {
               ...state,
               messageForNewDialog : action.newText,
           }

       default  :
           return state;
   }

}
export const SendMessageActionCreator = () => ({type:SEND_MESSAGE} as const)
export const changeMessageActionCreator = (message:string) => ({type:CHANGE_NEW_MESSAGE,newText:message }as const)

export default dialogReducer;