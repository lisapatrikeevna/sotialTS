import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {setAuthMyAC, setAuthMyTC} from "../redux/AuthReducer";
import {AuthMyApi, ProfileUserApi} from '../common/AsksApi';
import {photosType} from "./ProfileWrap";
import {getUserProfileTC} from "../redux/ProfileReducer";

type DispatchStateType = {
    //authMyData: (id: number, email: string, login: string) => void
    setAuthMyTC:()=>void
}

type MapStateType = {
    aught: boolean
    avatar: photosType | null
    id: number | null
    email: string | null
    login: string | null
}


class HeaderWrap extends React.Component <MapStateType & DispatchStateType> {
    componentDidMount() {
        // AuthMyApi.getMy()
        //     .then(response => {
        //         if (response.resultCode === 0) {
        //             debugger
        //             let {id, email, login} = response.data
        //             this.props.authMyData(id, email, login)
        //         }
        //       //  let userId=response.data.data.id
        //     });
        this.props.setAuthMyTC()
        // ProfileUserApi.getUser(+userId)
        //     .then(response => {
        //         // this.props.toggleIsFetching(false)
        //         this.props.authMyData(response.data);
        //     });


    }

    render() {
        return (
            <Header
               login={this.props.login}
                aught={this.props.aught}
                photos={this.props.avatar}
            />
        )
    }


}

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        avatar: state.auth.avatar,
        aught: state.auth.aught,
    }
}
export default connect
//<MapStateType, DispatchStateType, {}, RootStateType>
(mapStateToProps, {setAuthMyTC})(HeaderWrap);