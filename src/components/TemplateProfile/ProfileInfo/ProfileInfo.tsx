import React, {ChangeEvent} from 'react';
import cl from './ProfileInfo.module.css';
import {Preloader} from "../../../common/Preloader";
import {AxiosGetType, contactsType} from "../../ProfileWrap";
import IsOwner from "./IsOwer";
import Visitor from "./Visitor";

type propsType = {
    profile: AxiosGetType
    status: string
    updateStatus: (status: string) => void
    isOwner?: boolean
    changePhoto: (photo: any) => void
    saveProfileTC:(data:any)=>void
}
export type itemType={
    name: string
    desk: string
    id: number
    link: string
}
function ProfileInfo(props: propsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    let contact: contactsType = props.profile.contacts;
    let items:Array<itemType> = [
        {name: 'facebook', desk: contact.facebook, id: 1, link: ''},
        {name: 'github', desk: contact.github, id: 2, link: ''},
        {name: 'instagram', desk: contact.instagram, id: 3, link: ''},
        {name: 'mainLink', desk: contact.mainLink, id: 4, link: ''},
        {name: 'twitter', desk: contact.twitter, id: 5, link: ''},
        {name: 'vk', desk: contact.vk, id: 6, link: ''},
        {name: 'website', desk: contact.website, id: 7, link: ''},
        {name: 'youtube', desk: contact.youtube, id: 8, link: ''},
    ]

    return (
        // <div className={cl.profileInfo} style={{width: '80%'}}>
        //     <div className={cl.avaDesc}>
        //         {/*<img src={imgAvatar} className={cl.ava} alt="ava"/>*/}
        //         <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        //         <div>
        //             <img src={props.profile.photos.large ? props.profile.photos.large : imgAvatar} className={cl.ava}
        //                  alt="ava"/>
        //             <span className={cl.maskFoto}></span>
        //         </div>
        //         <div className={cl.wrap}>
        //             <p className={cl.name}>{props.profile.fullName}</p>
        //         </div>
        //         <Accordion items={items} titleValue={'contacts'}/>
        //     </div>
        //     {props.isOwner && <input type="file" onChange={changePhoto}/>}
        //     <div>
        //         <h6>{props.profile.lookingForAJob ? <h6>looking for a job:{props.profile.lookingForAJob}</h6> : ''}</h6>
        //         <br/>
        //         <h6>{props.profile.lookingForAJobDescription ?
        //             <h6>Description:{props.profile.lookingForAJobDescription}</h6> : ''}</h6>
        //     </div>
        // </div>
        <>
            {props.isOwner
                ? <IsOwner profile={props.profile} status={props.status} updateStatus={props.updateStatus} changePhoto={props.changePhoto} contactList={items} saveProfileTC={props.saveProfileTC}/>
                : <Visitor profile={props.profile} status={props.status} contactList={items} />}
        </>
    )
}

export default ProfileInfo;
