import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {loginTC} from "../redux/AuthReducer";
import Login from "./Login";

type DispatchStateType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateType = {
    aught: boolean
    captchaUrl?: string | null
}

class LoginWrap extends React.Component <MapStateType & DispatchStateType> {


    render() {
        return (
            <Login
                //  photos={this.props.avatar}
                loginTC={this.props.loginTC}
                aught={this.props.aught}
            />
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        aught: state.auth.aught,
        //captchaUrl: state.auth.
    }
}
export default connect <MapStateType, DispatchStateType, {}, RootStateType>
    (mapStateToProps, {loginTC})(LoginWrap);