import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {loginTC} from "../redux/AuthReducer";
import {photosType} from "./ProfileWrap";
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
    // componentDidMount() {
    //
    // }

    render() {
        return (
            <Login
                // login={this.props.login}
                //  aught={this.props.aught}
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