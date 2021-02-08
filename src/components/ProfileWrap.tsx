import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../redux/ReduxStore";
import {
    changePhotoTC,
    getUserProfileTC,
    getUserStatusTC,
    saveProfileTC,
    updateUserStatusTC
} from "../redux/ProfileReducer";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {compose} from "redux";
import {IsLoginRedirect} from '../common/lsLoginHOC';

export type propsType = {
    profile: AxiosGetType
    getUserProfileTC: (userID: string) => void
    getUserStatusTC: (userID: string) => void
    updateUserStatusTC: (status: string) => void
    saveProfileTC: (data: any) => void
    changePhotoTC: (file: any) => void
    status: string
    authorizedUserID: string
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
    refreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.authorizedUserID;
            //userID = '11446';
            if (!userID) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfileTC(userID);
        this.props.getUserStatusTC(userID);
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<propsType & RouteComponentProps<TRouteParams>>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userID !== prevProps.match.params.userID){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userID}
                changePhoto={this.props.changePhotoTC}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatusTC={this.props.updateUserStatusTC}
                saveProfileTC={this.props.saveProfileTC}
            />
        );
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profile.profile,
        status: state.profile.status,
        authorizedUserID: state.auth.id
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
        updateUserStatusTC,
        changePhotoTC,
        saveProfileTC,
    }),
    IsLoginRedirect,
    withRouter
)(ProfileWrap)
