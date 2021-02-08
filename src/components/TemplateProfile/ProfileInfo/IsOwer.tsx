import React, {ChangeEvent, useState} from 'react';
import cl from './ProfileInfo.module.css';
import imgAvatar from '../../../assets/img/undraw_faq_rjoy.png';
import {AxiosGetType} from "../../ProfileWrap";
import {ProfileStatus} from "./ProfileStatus";
import {Accordion, itemType} from "../../../common/accordion/Accordion";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {renderCheckbox, renderTextField} from "../../../common/FormControl/FormControl";
import {validate} from "../../../expansive/validate";


const IsOwnerChangeData: React.FC<InjectedFormProps<AxiosGetType, PropsType> & PropsType> = (
    {
        profile, handleSubmit, initialValues,error
    }) =>{
    return (
        <form onSubmit={handleSubmit} className={cl.loginForm}>
            <Field type='text' placeholder={'aboutMe'} component={renderTextField} name={'aboutMe'}
                   id="outlined-multiline-flexible" label='aboutMe' variant="outlined"
                   className={cl.input} style={{borderColor: 'green'}}/>
            <p>contacts:{
                Object.keys(profile.contacts).map(i => {
                    return <div key={i}>
                        <b>{i} : </b><Field type='text' placeholder={i} component={renderTextField} name={i}
                                           id="outlined-multiline-flexible"
                                           label={i} variant="outlined" className={cl.input}
                                           style={{borderColor: 'green'}}/>
                    </div>
                })}</p>
            <label >looking for a job
                <Field type="checkbox" component={renderCheckbox} name={'lookingForAJob'}/>
            </label>
            <Field type="text" placeholder={'lookingForAJobDescription'} component={renderTextField}
                   name={'lookingForAJobDescription'} id="outlined-multiline-flexible"
                   label='looking for a job description' variant="outlined"/>
            <Field type='text' placeholder={'fullName'} component={renderTextField} name={'fullName'}
                   id="outlined-multiline-flexible" label='fullName' variant="outlined"
                   className={cl.input} style={{borderColor: 'green'}}/>
            {error && <div className={cl.errorForm}>{error}</div>}
            <button type={"submit"}>save</button>
        </form>
    )
}

type PropsType = {
    profile: AxiosGetType
}
//const IsOwnerForm = reduxForm<FormDataType>({form: 'IsOwner', validate})(IsOwnerChangeData)
const IsOwnerForm = reduxForm<AxiosGetType, PropsType>({form: 'IsOwner', validate})(IsOwnerChangeData)

type propsType = {
    profile: AxiosGetType
    status: string
    updateStatus: (status: string) => void
    isOwner?: boolean
    changePhoto: (photo: any) => void
    contactList: Array<itemType>
    saveProfileTC:(data:any)=>void
}

function IsOwner(props: propsType) {
    let [editMode, setEditMode]= useState(false)
    const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        if (e.target.files.length) {
            //@ts-ignore
            props.changePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: any) => {
        props.saveProfileTC(formData)
            // .then(()=> {
            //     someChanged
            // })
        editProfile()
    }
    const editProfile = () =>{
        setEditMode(!editMode)
    }
    return (
        <div className={cl.profileInfo} style={{width: '80%'}}>
            <button onClick={editProfile}> edit profile</button>
            {!editMode?
                <div>
                    <div className={cl.avaDesc}>
                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        <div>
                            <img src={props.profile.photos.large ? props.profile.photos.large : imgAvatar} className={cl.ava}
                                 alt="ava"/>
                        </div>
                        <div className={cl.wrap}>
                            <p className={cl.name}>{props.profile.fullName}</p>
                        </div>
                        <Accordion items={props.contactList} titleValue={'contacts'}/>
                    </div>
                    <input type="file" onChange={changePhoto}/>
                    <div>
                        <h6>looking for a job:{props.profile.lookingForAJob ? 'yes' : 'no'}</h6>
                        <br/>
                        <h6>Description:{props.profile.lookingForAJobDescription ?
                            <h6>{props.profile.lookingForAJobDescription}</h6> : 'dont have'}</h6>
                    </div>

                </div>
                : <IsOwnerForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit}/>
            }
        </div>
    )
}

//profile={props.profile}
export default IsOwner;
