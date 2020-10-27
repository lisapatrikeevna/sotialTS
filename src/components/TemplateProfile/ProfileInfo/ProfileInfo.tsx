import React from 'react';
import cl from'./ProfileInfo.module.css';
import imgAvatar from '../../../assets/img/undraw_faq_rjoy.png';
import {Provider} from "react-redux";
import {Preloader} from "../../../common/Preloader";
import {AxiosGetType} from "../../ProfileWrap";
import {ProfileStatus} from "./ProfileStatus";

type propsType= {
    profile:AxiosGetType
    status:string
    updateStatus:(status:string)=>void
}
function ProfileInfo (props: propsType){
    if(!props.profile){
        return <Preloader />
    }
   // debugger
    return(
        <div className = {cl.avaDesc}>
            {/*<img src={imgAvatar} className={cl.ava} alt="ava"/>*/}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>
                <img src={props.profile.photos.large} className={cl.ava} alt="ava"/>
                <span className={cl.maskFoto}></span>
            </div>
               <div className={cl.wrap}>
                    <p className={cl.name}>{props.profile.fullName}</p>
                </div>


            <div>looking for a job:{props.profile.lookingForAJob}</div>
            <br/>
            <div>Description:{props.profile.lookingForAJobDescription}</div>
            <div>
                <div>contacts:
                    <span>facebook:{props.profile.contacts.facebook} </span>
                    <span>github:{props.profile.contacts.github} </span>
                    <span>instagram:{props.profile.contacts.instagram} </span>
                    <span>mainLink:{props.profile.contacts.mainLink} </span>
                    <span>twitter:{props.profile.contacts.twitter} </span>
                    <span>vk:{props.profile.contacts.vk} </span>
                    <span>website:{props.profile.contacts.website} </span>
                    <span>youtube:{props.profile.contacts.youtube} </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;