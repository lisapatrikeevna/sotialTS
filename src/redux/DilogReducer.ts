import {dispatchActionType} from "./ReduxStore";

type messagesItemType = {
    message: string
    id : number | string
}
type dialogsItemType = {
    name: string
    id : number | string
}
let initialState={
    dialogItem: [
        {name: "lisa", id: 1},
        {name: "Dan" , id: 2 },
        {name: "Kat" , id: 3}
    ] ,
    messageData: [
        {id: 1, message: 'ok'},
        {id: 1, message: 'to doms'},
        {id: 1, message: 'hire you go!'}
    ],
    messageForNewDialog: '',
}
const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_NEW_MESSAGE = "CHANGE-NEW-MESSAGE";
const dialogReducer = ( state=initialState, action:dispatchActionType) => {
   switch (action.type) {
       case SEND_MESSAGE:
           const newText: messagesItemType = {
               id: new Date().getTime(),
               message: state.messageForNewDialog
           }
           state.messageForNewDialog='';
           state.messageData.push(newText);
           return state;
       case CHANGE_NEW_MESSAGE:
           state.messageForNewDialog = action.newText;
           return state;
       default  :
           return state;
   }

}
export const SendMessageActionCreator = () => ({type: SEND_MESSAGE}as const)
export const changeMessageActionCreator = (message:string) => ({type:CHANGE_NEW_MESSAGE,messageText:message }as const)
export default dialogReducer;