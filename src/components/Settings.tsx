import React from 'react';
import {BackgroundChange} from "./TemplateSettings/BackgroundChange";
import {ThemeChange} from "./TemplateSettings/ThemeChange";

type SettingsType = {}
export const Settings = () => {
    return (
        // <h4>settings:</h4>
        <section className='content'>
            <h4>settings:</h4>
            <BackgroundChange/>
            <hr/>
            <ThemeChange/>
            <hr/>
            <button>remove setting</button>
        </section>
    );
}