import React  from 'react';
import  "./css/Dialogs.css";
import {
    changeNewMessage, dialogsInitialStateType, dialogsItemType,
    sendMessage,
} from '../redux/DialogReducer';
import {RootStateType} from "../redux/ReduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {IsLoginRedirect} from "../common/lsLoginHOC";
import {messagesItemType} from "./TemplateDialogs/UserDialogs/MessagesItem";


// const  DialogsWrap = (props: DialogsPropsType) => {
// let state = props.store.getState();
// let addSendMessage = () => {
//     // if (dialogMessage.current?.value !== null){
//     //     props.sendMessage(dialogMessage.current?.value);
//     // }
//     // props.sendMessage();
//     // props.dispatch({type:'SEND-MESSAGE'})
//     props.store.dispatch(SendMessageActionCreator())
// }
// let dialogMessage = (message:string) => {
//     // let message= e.currentTarget.value;
//     // props.changeNewMessage(e.currentTarget.value);
//       props.store.dispatch(changeMessageActionCreator(message))
// }
// // let dialogMessage = React.createRef<HTMLTextAreaElement>();
//     return(
//         <section className = 'dialogs'>
//             <Dialogs dialogs={state.dialogs} message={state.message} sendMessage={addSendMessage} changeNewMessage={dialogMessage}/>
//         </section>
//     );
//
// }
type mapStatePropsType={
    dialogs:Array<dialogsItemType>&Array<messagesItemType>
}
type mapDispatchPropsType={
    sendMessage  : (value:string) =>void
    // changeNewMessage:(value:string) =>void
}

let mapStateToProps=(state:RootStateType):mapStatePropsType=>{
    return{
        dialogs:state.dialogs,
      //  message:state.dialogs.messageForNewDialog
    }
}
const DialogsWrap = connect<mapStatePropsType,mapDispatchPropsType,{},RootStateType>(mapStateToProps,{sendMessage(value),})(IsLoginRedirect(Dialogs));

export default DialogsWrap;