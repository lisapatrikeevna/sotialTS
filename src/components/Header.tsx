import React from 'react';
import './css/Header.css';
import logo from '../assets/img/undraw_reminder_pa79.png'
import btnImg from '../assets/img/search.png'
import {NavLink} from "react-router-dom";

function Header () {
    return (
        <header className='header'>
            <a href='http://webstydio.lisa15.ru/#bottom-content'> 
                <img src={logo} className='poolLeft'/>
            </a>
            {/* <input type="text" placeholder="🔍 search "  /> */}
            <div className="wrap">
                <input type="text"/>
                <button className="btnImg"><img src={btnImg} alt=""/></button>
            </div>
            <span className="login">
                <NavLink to={'/login'}>Login</NavLink>
            </span>


        </header>
    )
}

export default Header;