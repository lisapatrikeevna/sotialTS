import React, {useEffect} from "react";
import  cl from './BackgroundChange.module.css'
import bgGray from '../../assets/img/bg/bg1.jpeg';
import bgCrazy from '../../assets/img/bg/bg2.jpg';
import bgGrin from '../../assets/img/bg/bg3.jpg';
import bgRain from '../../assets/img/bg/bg4.jpg';
import {useDispatch} from "react-redux";
import {BackgroundChangeAC, DeleteSettingsImgAC, DeleteSettingsThemeAC} from "../../redux/AppReducer";

export  const BackgroundChange = () => {
    const dispatch = useDispatch();
    const onChangeBg=(name:string)=>{
        // debugger
        dispatch(BackgroundChangeAC(name))
        localStorage.setItem('backroundName',name)
    }
    const deleteBg = () => {
        // debugger
        dispatch(DeleteSettingsImgAC())
        localStorage.removeItem('backroundName')
    }
    let bgArr=[{name: bgGray,key:'bgGray'}, {name: bgCrazy,key: 'bgCrazy'}, {name: bgGrin,key: 'bgGrin'}, {name: bgRain,key: 'bgRain'}];
    let example=bgArr.map(bg=><div className={cl.img} key={bg.key}  onClick={()=>{onChangeBg(bg.key)}}><img src={bg.name} alt={bg.key}/></div>)
    return(
        <>
        <div className={`${cl.dFlex}`}>
            {example}
        </div>
            <button onClick={deleteBg}>delete image</button>
            </>
    )
}