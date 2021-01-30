import React from 'react';
import {NavLink} from 'react-router-dom'
import cl from './css/Navbar.module.css';
import style from  './TemplateSettings/ThemeChange.module.css';
import music from '../assets/img/undraw_video_upload_3d4u.png';
import news from '../assets/img/undraw_experience_design_eq3j.png';
import profile from '../assets/img/undraw_online_popularity_elhc.png';
import dialogs from '../assets/img/undraw_design_team_af2y.png';
import settings from '../assets/img/undraw_good_team_m7uu.png';
import users from '../assets/img/undraw_online_test_gba7.png';
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {InitialStateType, themType} from "../redux/AppReducer";


export type NavbarType = {

}

function Navbar () {
    const theme = useSelector<RootStateType,themType>(state => state.app.theme);
    return(
    <nav className={`${cl.menu} ${style[theme+'Menu']}`} >
      <ul>
          <li className={`${cl.menuItem}`}><img src={users} alt="users"/><NavLink to='/users'>Users</NavLink></li>
        <li className={`${cl.menuItem} ${cl.active}`}><img src={profile} alt="profile"/><NavLink to='/profile'>Blog</NavLink></li>
        <li className={`${cl.menuItem}`}><img src={dialogs} alt="dialogs"/><NavLink to='/dialogs'>Messages</NavLink></li>
        <li className={`${cl.menuItem}`}><img src={news} alt="news"/><NavLink to='/news'>News</NavLink></li>
        <li className={`${cl.menuItem}`}><img src={music} alt="music"/><NavLink to='/music'>Music</NavLink></li>
        <li className={`${cl.menuItem}`}><img src={settings} alt="settings"/><NavLink to='/settings'>Settings</NavLink></li>
      </ul>
    </nav>
    )
}



// function Navbar () {
//    return(
//    <nav className='menu'>
//      <ul>
//        <li className='menu__item active'>
//            {/* <NavLink to='/profile'> */}
//                Blog
//                {/* </NavLink> */}
//                </li>
//        <li className='menu__item'>
//            {/* <NavLink to='/dialogs'> */}
//                Messages
//                {/* </NavLink> */}
//                </li>
//        <li className='menu__item'>
//            {/* <NavLink to='/news'> */}
//                News
//                {/* </NavLink> */}
//                </li>
//        <li className='menu__item'>
//            {/* <NavLink to='/music'> */}
//                Music
//                {/* </NavLink> */}
//                </li>
//        <li className='menu__item'>
//            {/* <NavLink to='/settings'> */}
//                Settings
//                {/* </NavLink> */}
//                </li>
//        <li className='menu__item'>
//            {/* <NavLink to='/users'> */}
//                Users
//                {/* </NavLink> */}
//                </li>
//      </ul>
//    </nav>
//    )
// }

export default Navbar;