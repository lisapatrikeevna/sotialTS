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
    // avatar: photosType | null
    // // id: number | null
    // email: string | null
    // login: string | null
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
        // id: state.auth.id,
        // email: state.auth.email,
        // login: state.auth.login,
        // avatar: state.auth.avatar,
        aught: state.auth.aught,
    }
}
export default connect <MapStateType, DispatchStateType, {}, RootStateType>
    (mapStateToProps, {loginTC})(LoginWrap);