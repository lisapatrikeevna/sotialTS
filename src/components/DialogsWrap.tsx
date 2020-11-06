import React from 'react';
import "./css/Dialogs.css";
import {dialogsInitialStateType, dialogsItemType, sendMessageAC} from '../redux/DialogReducer';
import {RootStateType} from "../redux/ReduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {IsLoginRedirect} from "../common/lsLoginHOC";
import {messagesItemType} from "./TemplateDialogs/UserDialogs/MessagesItem";


type mapStatePropsType={
    // dialogs:Array<dialogsItemType>&Array<messagesItemType>
    dialogs: dialogsInitialStateType
}
type mapDispatchPropsType={
    sendMessageAC  : (value:string) =>void
   // changeNewMessage:(value:string) =>void
}

let mapStateToProps=(state:RootStateType):mapStatePropsType=>{
    return{
        dialogs:state.dialogs,
       //message:state.dialogs.
    }
}
const DialogsWrap = connect<mapStatePropsType,mapDispatchPropsType,{},RootStateType>(mapStateToProps,{sendMessageAC})(IsLoginRedirect(Dialogs));

export default DialogsWrap;