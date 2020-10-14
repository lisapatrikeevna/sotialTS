import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {setUserProfile} from "../redux/ProfileReducer";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {ProfileUserApi} from "../common/AsksApi";

export type propsType = {
    profile:AxiosGetType
    setUserProfile:(profile:AxiosGetType)=>void
}
type TRouteParams = {
    userID:string // since it route params
}
export type AxiosGetType = {
    userId: number
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    contacts:contactsType
    photos: photosType
}
export type contactsType = {
    github:string
    vk:string
    facebook:string
    instagram:string
    twitter:string
    website:string
    youtube:string
    mainLink:string
}
export type photosType = {
    small:string
    large:string
}
export class ProfileContainer extends React.Component<propsType & RouteComponentProps<TRouteParams>> {
    componentDidMount() {
        // this.props.match.params.userId(true)
        //debugger
        let userID = this.props.match.params.userID;
        if(!userID){ userID ='11446'; }
        ProfileUserApi.getUser(+userID)
            .then(response => {
                // this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data);
            });

    }
    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profile.profile
    }
}
let withRouterProfileContainer = withRouter(ProfileContainer);
const ProfileWrap =connect(mapStateToProps,{setUserProfile})(withRouterProfileContainer)
export default ProfileWrap;