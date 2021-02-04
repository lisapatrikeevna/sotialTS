import React from 'react';
import { Redirect} from "react-router-dom";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {renderCheckbox, renderTextField} from '../common/FormControl/FormControl';
import {validate} from "../expansive/validate";
import cl from './css/login.module.css'
type FormDataType = {
    // aught:boolean
    // photos:photosType| null
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cl.loginForm}>
            {/*<Field type="text" placeholder={'login'} component={'input'} name={'login'}/>*/}
            <Field type="text" placeholder={'login'} component={renderTextField} name={'email'} id="outlined-multiline-flexible"
                   label='login' variant="outlined"/>
            <Field type='password' placeholder={'password'} component={renderTextField} name={'password'} id="outlined-multiline-flexible"
                   label='password' variant="outlined" className={cl.input} style={{borderColor: 'green'}}/>
            <Field type="checkbox" placeholder={'remember me'} component={renderCheckbox} name={'rememberMe'}/>
            {props.error && <div className={cl.errorForm}>{props.error}</div>}
            <button type={"submit"}>login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login', validate})(LoginForm)
type loginPropsType={
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    aught:boolean
}
function Login(props:loginPropsType) {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email,formData.password,formData.rememberMe)
    }
    if (props.aught) {
       return <Redirect to={'/profile'}/>
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