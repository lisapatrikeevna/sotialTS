// import {Redirect} from "react-router-dom";
// import React from "react";
// import {InitialStateType} from "../redux/AuthReducer";
// import {connect} from "react-redux";
//
// let mapStateToPropsRedirec = (state:InitialStateType)=>({
//     aught: state.aught
// })
// export const IsLoginRedirect = (SomeComponent: any) => {
//
//     // return (props: any) => {
//     //    //debugger
//     //
//     //     return <SomeComponent {...props}/>
//     // }
//     class RedirectComponent extends React.Component<any, any> {
//         render() {
//             if (!this.props.aught) return <Redirect to='login'/>
//             return <SomeComponent {...this.props}/>
//         }
//     }
//     // return RedirectComponent;
//     let AughtRedirectComponent= connect(mapStateToPropsRedirec)(RedirectComponent)
//     return AughtRedirectComponent;
//
// }
// {!props.aught ? <Redirect to='login'/> :
//     <SomeComponent {...props}/>
// }
// !props.aught &&<> <Redirect to='login'/></>
// const aught =useSelector<RootStateType,boolean>(state=>state.auth.aught)
// if (!props.aught) { return <Redirect to='login'/> }





import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import { RootStateType } from "../redux/ReduxStore";

let mapStateToPropsForRedirect = (state: RootStateType) => ({
    aught: state.auth.aught
});

export const  IsLoginRedirect  = (Component: any) => {

    class RedirectComponent extends React.Component <any>{
        render() {
            if (!this.props.aught) return <Redirect to='/login' />

            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;

}


// import { Redirect } from "react-router-dom";
// import React from "react";
//
// export const IsLoginRedirect = (SomeComponent:any)=>{
//     debugger
//     return(props:any)=>{
//         return<>
//         if(!props.aught)<Redirect to='login'/>
//             <SomeComponent {...props}/>
//         </>
//     }
// }
