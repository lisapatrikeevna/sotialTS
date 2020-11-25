import React, {useEffect} from "react";
import  cl from './BackgroundChange.module.css';
import {useDispatch} from "react-redux";
import { ThemeChangeAC, themType} from "../../redux/AppReducer";
import  red from '../../assets/img/bg/red.jpg';
import  blue from '../../assets/img/bg/blue.jpg';
import  light from '../../assets/img/bg/light.jpg';
import  dark from '../../assets/img/bg/dark.jpg';

type themeType={
    name:themType
    preview:any
}
export  const ThemeChange = () => {
    const dispatch = useDispatch();
    const onChangeBg=(name:themType)=>{
        // debugger
        dispatch(ThemeChangeAC(name))
        localStorage.setItem('theme', name)
    }
    let themesArr:Array<themeType>=[{name:'dark', preview:dark}, {name:'light', preview:light}, {name: 'blue', preview:blue}, {name:'red', preview:red}];
    let example=themesArr.map(bg=><div className={cl.img} key={bg.name}  onClick={()=>{
            // debugger
            onChangeBg(bg.name)}}>
        <p>{bg.name}</p>
        <img src={bg.preview} alt={bg.name}/>
    </div>)
    return(
        <div className={`${cl.dFlex}`}>
            {example}
        </div>
    )
}