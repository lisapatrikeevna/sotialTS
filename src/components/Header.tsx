import React from 'react';
import './css/Header.css';
import logo from '../assets/img/undraw_reminder_pa79.png'
import btnImg from '../assets/img/search.png'
import {NavLink} from "react-router-dom";
import { photosType } from './ProfileWrap';

type propsType={
    aught:boolean
    photos:photosType| null
}
function Header (props:propsType) {
    return (
        <header className='header'>
            <a href='http://webstydio.lisa15.ru/#bottom-content'> 
                <img src={logo} className='poolLeft'/>
            </a>
            <div className="wrap">
                <input type="text"/>
                <button className="btnImg"><img src={btnImg} alt=""/></button>
            </div>
            <span className="login">
               {props.aught? <NavLink to={'/login'}>Login</NavLink> :
                   <img src={props.photos ? props.photos.large : ''} className='ava' alt="ava"/>}
            </span>
        </header>
    )
}

export default Header;