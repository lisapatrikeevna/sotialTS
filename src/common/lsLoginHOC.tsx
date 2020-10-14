import { Redirect } from "react-router-dom";
import React from "react";

export const IsLoginRedirect = (SomeComponent:any)=>{

    return(props:any)=>{
        return<>
            if(!props.aught)<Redirect to='login'/>
            <SomeComponent {...props}/>
        </>
    }
}