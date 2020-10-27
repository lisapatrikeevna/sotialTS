import React from 'react';
import './css/Header.css';
import logo from '../assets/img/undraw_reminder_pa79.png'
import btnImg from '../assets/img/search.png'
import {NavLink} from "react-router-dom";
import { photosType } from './ProfileWrap';

type propsType={
    aught:boolean
    photos:photosType| null
    login: string | null
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
               {props.aught ?
                   <span><img src={props.photos ? props.photos.large : 'plase for ava'} className='ava' alt="ava"/> <br/>{props.login}</span>
                   : <NavLink to={'/login'}>Login</NavLink>
               }
            </span>
        </header>
    )
}

export default Header;