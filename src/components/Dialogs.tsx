import React, { ChangeEvent }  from 'react';
import  "./css/Dialogs.css";
import {dialogsInitialStateType} from '../redux/DialogReducer';
import DialogData from './TemplateDialogs/UserDialogs/DialogData';
import MessagesItem from './TemplateDialogs/UserDialogs/MessagesItem';
import usersImg from '../assets/img/undraw_data_processing_yrrv.png';


export type DialogsPropsType = {
    dialogs: dialogsInitialStateType
    message: string
    sendMessage: () => void
    changeNewMessage: (someText: string) => void
}
const  Dialogs = (props: DialogsPropsType) => {

let dialogsElements = props.dialogs.dialogItem.map( (d) => <DialogData name = {d.name} key = {d.id} id = {d.id} /> );
let messageElements = props.dialogs.messageData.map( (m) => <MessagesItem message = {m.message} key = {m.id} id = {m.id}/> );
// let newMessageText = newMessageT.ext;
let addSendMessage = () => {
    // if (dialogMessage.current?.value !== null){
    //     props.sendMessage(dialogMessage.current?.value);
    // }
    props.sendMessage();
    // props.dispatch({type:'SEND-MESSAGE'})
    // props.dispatch(SendMessageActionCreator())
}

let dialogMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // let message= e.currentTarget.value;
    props.changeNewMessage(e.currentTarget.value);
    //   props.dispatch(changeMessageActionCreator(message))
}
// let dialogMessage = React.createRef<HTMLTextAreaElement>();
    return(
        <section className = 'dialogs'>
            <div className = 'users__wrepp'>
                <div className = 'user-name'>
                    <img src={usersImg} className="users"/>
                    {/* <NavLink to={path}> {props.name}{props.src} </NavLink> */}
                    user name:<br/>
                    {dialogsElements}
                </div>
            </div>
            <div className = 'messages'>
                <div>{messageElements}</div>
                <div className= 'new-message'>
                    <p>wright message</p>
                    <textarea placeholder="let text" value={props.message} onChange={dialogMessage}></textarea>
                    <button  className='newMessage' onClick={addSendMessage}>send</button>
                </div>
            </div>
        </section>
    );

}


export default Dialogs;