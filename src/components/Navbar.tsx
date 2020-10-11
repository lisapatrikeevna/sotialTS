import React from 'react';
import {NavLink} from 'react-router-dom'
import './css/Navbar.css';
import music from '../assets/img/undraw_video_upload_3d4u.png';
import news from '../assets/img/undraw_experience_design_eq3j.png';
import profile from '../assets/img/undraw_online_popularity_elhc.png';
import dialogs from '../assets/img/undraw_design_team_af2y.png';
import settings from '../assets/img/undraw_good_team_m7uu.png';
import users from '../assets/img/undraw_online_test_gba7.png';


export type NavbarType = {

}
function Navbar () {
    return(
    <nav className='menu'>
      <ul>
        <li className="menu__item active"><img src={profile} alt="profile"/><NavLink to='/profile'>Blog</NavLink></li>
        <li className="menu__item"><img src={dialogs} alt="dialogs"/><NavLink to='/dialogs'>Messages</NavLink></li>
        <li className="menu__item"><img src={news} alt="news"/><NavLink to='/news'>News</NavLink></li>
        <li className='menu__item'><img src={music} alt="music"/><NavLink to='/music'>Music</NavLink></li>
        <li className='menu__item'><img src={settings} alt="settings"/><NavLink to='/settings'>Settings</NavLink></li>
        <li className='menu__item'><img src={users} alt="users"/><NavLink to='/users'>Users</NavLink></li>
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