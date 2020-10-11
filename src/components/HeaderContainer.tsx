import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {setAuthMyAC} from "../redux/AuthReducer";

type propsType={
    authMyData:(id: number, email: string, login: string)=>void
    resultCode:number
}
type  AxiosGetType={
    id: number| null
    email: string| null
    login: string| null
    aught: boolean

}
class HeaderWrap extends React.Component <propsType>{
    componentDidMount() {
        axios.get<AxiosGetType>(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        })
            .then(response => {
                // if(this.props.resultCode===0){
                //     let {id,email,login}=this.props.data.data
                //     this.props.authMyData(id,email,login)
                // }
                debugger
            });

    }
    render() {
        return (
            <Header/>
        )
    }


}
let mapStateToProps = (state: RootStateType) => {}
export default connect(mapStateToProps,{authMyData:setAuthMyAC})(HeaderWrap);