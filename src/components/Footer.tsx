import React from 'react';
import cl from './css/Footer.module.css';
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {themType} from "../redux/AppReducer";
import style from  './TemplateSettings/ThemeChange.module.css';

function Footer (){
    const theme = useSelector<RootStateType,themType>(state => state.app.theme);
    return(
        <footer className={`${cl.footer} ${style[theme]}`}>
            <div className={`${cl.footerWrap}`}>
                This is block for the footer
            </div>
        </footer>
    );
}

export default Footer ;