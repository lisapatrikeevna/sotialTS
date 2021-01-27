import React from 'react';
import {BackgroundChange} from "./TemplateSettings/BackgroundChange";
import {ThemeChange} from "./TemplateSettings/ThemeChange";
import { DeleteOllSettingsAC} from "../redux/AppReducer";
import {useDispatch} from "react-redux";

type SettingsType = {}
export const Settings = () => {
    const dispatch = useDispatch()
    const deleteSettings = () => {
        // debugger
        dispatch(DeleteOllSettingsAC())
        localStorage.clear()
    }
    return (
        // <h4>settings:</h4>
        <section className='content'>
            <h4>settings:</h4>
            <BackgroundChange/>
            <hr/>
            <ThemeChange/>
            <hr/>
            <button onClick={deleteSettings}>remove setting</button>
        </section>
    );
}