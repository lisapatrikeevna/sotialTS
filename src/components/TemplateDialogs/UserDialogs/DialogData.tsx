import React from 'react';
import  cl from "./DialogData.module.css";
import {NavLink} from "react-router-dom";

export type DialogsDataPropsType = {
    name: string
    id: number
}
function DialogData (props: DialogsDataPropsType){ 
    let path = "/dialog/" + props.id;
    return(
    <div className = 'user-name' key={props.id}>
        <NavLink to={path}> {props.name}</NavLink>
    </div>
)}


export default DialogData;