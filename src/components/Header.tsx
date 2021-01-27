import React from 'react';
import cl from './css/Header.module.css';
import style from  './TemplateSettings/ThemeChange.module.css';
import logo from '../assets/img/undraw_reminder_pa79.png';
import defoultAva from '../assets/img/undraw_mobile_web_2g8b.png';
import btnImg from '../assets/img/search.png'
import {NavLink} from "react-router-dom";
import {photosType} from './ProfileWrap';
import {themType} from "../redux/AppReducer";

type propsType = {
    aught: boolean
    photos: photosType | null
    login: string | null
    logOutTC: () => void
    theme:themType
}

function Header(props: propsType) {
    // debugger
    return (
        <header className={`${cl.header} ${style[props.theme]}`}>
            <a href='http://webstydio.lisa15.ru/#bottom-content'>
                <img src={logo} className='poolLeft'/>
            </a>
            <div className={cl.wrap}>
                <input type="text"/>
                <button className={cl.btnImg}><img src={btnImg} alt=""/></button>
            </div>
            <span className={cl.login}>
               {props.aught ?
                   // <span>{props.photos?.small ? <img src={ props.photos.small } className={cl.ava} alt="ava"/> :  'please for ava'}
                   <div className={cl.dFlex}>{props.photos?.small ?
                       <img src={props.photos.small} className={cl.ava} alt="ava"/> :
                       <img src={defoultAva} alt="defoultAva" className={cl.ava}/>}
                       <div>
                           {props.login}
                           <br/>
                           <button onClick={props.logOutTC}>exit</button>
                       </div>
                   </div>
                   : <NavLink to={'/login'}>Login</NavLink>
               }
            </span>
        </header>
    )
}

export default Header;