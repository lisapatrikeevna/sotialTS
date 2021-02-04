import React from 'react';
import cl from './ProfileInfo.module.css';
import imgAvatar from '../../../assets/img/undraw_faq_rjoy.png';
import {Preloader} from "../../../common/Preloader";
import {AxiosGetType, contactsType} from "../../ProfileWrap";
import {ProfileStatus} from "./ProfileStatus";
import {Accordion} from "../../../common/accordion/Accordion";

type propsType = {
    profile: AxiosGetType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: propsType) {

    if (!props.profile) {
        return <Preloader/>
    }
    let contact: contactsType = props.profile.contacts;
    let items = [
        {name: 'facebook', desk: contact.facebook, id: 1, link: ''},
        {name: 'github', desk: contact.github, id: 2, link: ''},
        {name: 'instagram', desk: contact.instagram, id: 2, link: ''},
        {name: 'mainLink', desk: contact.mainLink, id: 2, link: ''},
        {name: 'twitter', desk: contact.twitter, id: 2, link: ''},
        {name: 'vk', desk: contact.vk, id: 2, link: ''},
        {name: 'website', desk: contact.website, id: 2, link: ''},
        {name: 'youtube', desk: contact.youtube, id: 2, link: ''},
    ]

    return (
        <div className={cl.profileInfo} style={{width:'80%'}}>
            <div className={cl.avaDesc}>
                {/*<img src={imgAvatar} className={cl.ava} alt="ava"/>*/}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : imgAvatar} className={cl.ava} alt="ava"/>
                    <span className={cl.maskFoto}></span>
                </div>
                <div className={cl.wrap}>
                    <p className={cl.name}>{props.profile.fullName}</p>
                </div>
                <Accordion items={items} titleValue={'contacts'}/>
            </div>
            <div>
                <h6>{props.profile.lookingForAJob?  <h6>looking for a job:{props.profile.lookingForAJob}</h6>  : ''}</h6>
                <br/>
                <h6>{props.profile.lookingForAJobDescription? <h6>Description:{props.profile.lookingForAJobDescription}</h6>: ''}</h6>
            </div>
        </div>
            )
            }

            export default ProfileInfo;