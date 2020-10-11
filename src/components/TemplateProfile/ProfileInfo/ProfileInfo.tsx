import React from 'react';
import cl from'./ProfileInfo.module.css';
import imgAvatar from '../../../assets/img/undraw_faq_rjoy.png';
import {Provider} from "react-redux";
import {Preloader} from "../../../common/Preloader";
import {AxiosGetType} from "../../ProfileWrap";

type propsType= {
    profile:AxiosGetType
}
function ProfileInfo (props: propsType){
    if(!props.profile){
        return <Preloader />
    }
    debugger
    return(
        <div className = {cl.avaDesc}>
            {/*<img src={imgAvatar} className={cl.ava} alt="ava"/>*/}
            <img src={props.profile.photos.large} className={cl.ava} alt="ava"/>
               <div className={cl.wrap}>
                    <p className={cl.name}>{props.profile.fullName}</p>
                    {/*<p className={cl.lastName}> lastName</p>*/}
                </div>
            {/*<div>contacts:{props.profile.contacts}</div>*/}
            <div>looking for a job:{props.profile.lookingForAJob}</div>
            <div>Description:{props.profile.lookingForAJobDescription}</div>
        </div>
    )
}

export default ProfileInfo;