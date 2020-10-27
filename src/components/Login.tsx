import React from 'react';
import './css/Header.css';
import logo from '../assets/img/undraw_reminder_pa79.png'
import btnImg from '../assets/img/search.png'
import {NavLink} from "react-router-dom";
import {photosType} from './ProfileWrap';
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type FormDataType = {
    // aught:boolean
    // photos:photosType| null
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type="text" placeholder={'login'} component={'input'} name={'login'}/>
            <Field type="password" placeholder={'password'} component={'input'} name={'password'}/>
            <Field type="checkbox" placeholder={'remember me'} component={'input'} name={'rememberMe'}/>
            <button type={"submit"}>login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

function Login() {
    const onSubmit = (formData: FormDataType) => {
        // debugger
        console.log(formData)
       // alert(formData)
    }
    return (
        <div>
            <h3>page login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;


//npm add redux-form
//npm i redux-form
//npm i @types/redux-form