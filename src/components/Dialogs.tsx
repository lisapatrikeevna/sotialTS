import React, {ChangeEvent} from 'react';
import "./css/Dialogs.css";
import {dialogsInitialStateType} from '../redux/DialogReducer';
import DialogData from './TemplateDialogs/UserDialogs/DialogData';
import MessagesItem from './TemplateDialogs/UserDialogs/MessagesItem';
import usersImg from '../assets/img/undraw_data_processing_yrrv.png';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, minLength, requiredFields} from "../expansive/validate";
import {renderTextField, Textarea} from "../common/FormControl/FormControl";


export type DialogsPropsType = {
    dialogs: dialogsInitialStateType
    // message: string
    sendMessageAC: (value: string) => void
    // changeNewMessage: (someText: string) => void
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.dialogItem.map((d) => <DialogData name={d.name} key={d.id} id={d.id}/>);
    let messageElements = props.dialogs.messageData.map((m) => <MessagesItem message={m.message} key={m.id}
                                                                             id={m.id}/>);

// let addSendMessage = () => {
//     // if (dialogMessage.current?.value !== null){
//     //     props.sendMessage(dialogMessage.current?.value);
//     // }
//     //props.sendMessage();
// }
//
// let dialogMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     // let message= e.currentTarget.value;
//     props.changeNewMessage(e.currentTarget.value);
//     //   props.dispatch(changeMessageActionCreator(message))
// }
    const onSubmit = (value: FormDataType) => {
        debugger
        // console.log(value)
        //alert(value.message)
        props.sendMessageAC(value.message);
    }

    return (
        <section className='dialogs'>
            <div className='users__wrepp'>
                <div className='user-name'>
                    <img src={usersImg} className="users"/>
                    {/* <NavLink to={path}> {props.name}{props.src} </NavLink> */}
                    user name:<br/>
                    {dialogsElements}
                </div>
            </div>
            <div className='messages'>
                <div>{messageElements}</div>
                {/*<div className= 'new-message'>*/}
                {/*    <p>wright message</p>*/}
                {/*    <textarea placeholder="let text" value={props.message} onChange={dialogMessage}></textarea>*/}
                {/*    <button  className='newMessage' onClick={addSendMessage}>send</button>*/}
                {/*</div>*/}
                <DilogsReduxForm onSubmit={onSubmit}/>
            </div>
        </section>
    );

}
export default Dialogs;

type  FormDataType = {
    message: string
}
const maxLength20 = maxLength(20)
const minLength1 = minLength(1)
const DilogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className='new-message' onSubmit={props.handleSubmit}>
            <p>write message</p>
            <Field component={renderTextField} placeholder='let text'
                   name={'message'}
                   id="outlined-multiline-flexible"
                   label="you`r message"
                   multiline
                   rowsMax={4}
                   variant="outlined"
            />
            {/*<Field component={Textarea} placeholder='let text'*/}
            {/*       name={'message'}*/}
            {/*      validate={[requiredFields,maxLength20,minLength1]}*/}
            {/*/>*/}

            {/*<TextField placeholder='let text'*/}
            {/*           name={'message'}*/}
            {/*           id="outlined-multiline-flexible"*/}
            {/*           label="Multiline"*/}
            {/*           multiline*/}
            {/*           rowsMax={4}*/}
            {/*           variant="outlined"*/}
            {/*/>*/}
            <button className='newMessage' type={'submit'}>send</button>
        </form>
    )
}
const DilogsReduxForm = reduxForm<FormDataType>({form: 'dialogs'})(DilogsForm);