import React from "react";
import preloader from "../assets/img/806.gif";
import cl from './commonCl.module.css'

export const Preloader =()=>{
    return<div className={cl.owerleyPreloader}>
        <img src={preloader}/>
    </div>
}