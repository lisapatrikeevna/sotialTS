import {Redirect} from "react-router-dom";
import React from "react";



export const IsLoginRedirect = (SomeComponent: any) => {

    return (props: any) => {
       //debugger

        return <SomeComponent {...props}/>
    }
}
// {!props.aught ? <Redirect to='login'/> :
//     <SomeComponent {...props}/>
// }
// !props.aught &&<> <Redirect to='login'/></>
// const aught =useSelector<RootStateType,boolean>(state=>state.auth.aught)
// if (!props.aught) { return <Redirect to='login'/> }