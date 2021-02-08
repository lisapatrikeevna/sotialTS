import React, {ChangeEvent} from 'react';
import cl from './ProfileInfo.module.css';
import imgAvatar from '../../../assets/img/undraw_faq_rjoy.png';
import {Preloader} from "../../../common/Preloader";
import {AxiosGetType, contactsType} from "../../ProfileWrap";
import {ProfileStatus} from "./ProfileStatus";
import {Accordion, itemType} from "../../../common/accordion/Accordion";

type propsType = {
    profile: AxiosGetType
    status: string
    contactList: Array<itemType>
}

function Visitor(props: propsType) {

    return (
        <div className={cl.profileInfo} style={{width: '80%'}}>
            <div className={cl.avaDesc}>
                <ProfileStatus status={props.status}/>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : imgAvatar} className={cl.ava}
                         alt="ava"/>
                    {/*<span className={cl.maskFoto}></span>*/}
                </div>
                <div className={cl.wrap}>
                    <p className={cl.name}>{props.profile.fullName}</p>
                </div>
                <Accordion items={props.contactList} titleValue={'contacts'}/>
            </div>
            <div>
                <h6>{props.profile.lookingForAJob ? <h6>looking for a job:{props.profile.lookingForAJob}</h6> : ''}</h6>
                <br/>
                <h6>{props.profile.lookingForAJobDescription ?
                    <h6>Description:{props.profile.lookingForAJobDescription}</h6> : ''}</h6>
            </div>
        </div>
    )
}

export default Visitor;

