import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {getUserProfileTC, getUserStatusTC, updateUserStatusTC} from "../redux/ProfileReducer";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {compose} from "redux";
import {IsLoginRedirect} from '../common/lsLoginHOC';

export type propsType = {
    profile: AxiosGetType
    getUserProfileTC: (userID: string) => void
    getUserStatusTC: (userID: string) => void
    updateUserStatusTC: (status: string) => void
    status: string
    autorizUserID:string
}
type TRouteParams = {
    userID: string // since it route params
}
export type AxiosGetType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
}
export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type photosType = {
    small: string
    large: string
}

export class ProfileWrap extends React.Component<propsType & RouteComponentProps<TRouteParams>> {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.autorizUserID;
            //userID = '11446';
            if (!userID){
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfileTC(userID);
        this.props.getUserStatusTC(userID);
        //this.props.getUserStatusTC(status)
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatusTC={this.props.updateUserStatusTC}
            />
        );
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        autorizUserID: state.auth.id
    }
}
// let withRouterProfileContainer = withRouter(ProfileWrap);
// export default connect(mapStateToProps, {
//     getUserProfileTC,
//     getUserStatusTC,
//     updateUserStatusTC
// })(IsLoginRedirect(withRouterProfileContainer))


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC,
        getUserStatusTC,
        updateUserStatusTC
    }),
    IsLoginRedirect,
    withRouter
)(ProfileWrap)
