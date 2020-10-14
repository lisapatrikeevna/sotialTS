import React from 'react';
import './css/Header.css';
import logo from '../assets/img/undraw_reminder_pa79.png'
import btnImg from '../assets/img/search.png'
import {NavLink} from "react-router-dom";
import { photosType } from './ProfileWrap';

type propsType={
    // aught:boolean
    // photos:photosType| null
    // login: string | null
}
function Login (props:propsType) {

// const setLogin=(e:currentTarget.value)=>{
//
// }
// const addLoginUser
    return (
        <div>
            {/*<input type="text" value={'name'} onChange={setLogin}/>*/}
            <input type="password"/>
            <input type="checkbox"/>
            <button>login</button>
        </div>
    )
}

export default Login;