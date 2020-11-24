import dialogReducer, {sendMessageAC} from "./DialogReducer";

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
 it('test sendMessageAC',()=>{
     let action = sendMessageAC("test message");
     let newState= dialogReducer(initialState,action);
     expect(newState.messageData.length).toBe(4);
     expect(newState.messageData[3].message).toBe('test message');
 })