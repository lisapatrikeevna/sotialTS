import React  from 'react';
import cl from'./css/Profile.module.css';
import ProfileInfo from './TemplateProfile/ProfileInfo/ProfileInfo';
import mainImage from '../assets/img/baner1.png';
import MyPostsWrap from "./TemplateProfile/MyPosts/MyPostsWrap";
import {AxiosGetType} from "./ProfileWrap";
import {ProfileStatus} from "./TemplateProfile/ProfileInfo/ProfileStatus";

export type ProfilePropsType = {
  profile:AxiosGetType
    status:string
  // addChangePost:()=>void
  // changeNewPostText:(newText:string) => void
  // dispatch:(action:dispatchActionType)=>void
  //   store:any
    updateUserStatusTC:(status:string)=>void
}
const Profile = (props: ProfilePropsType) => {
  // debugger
    return(
      <section className = 'content d-flex'>
        <div>
          <div className = {cl.main__image}>
            <img src={mainImage} className={cl.baner}/>
          </div>
            {/*<div>*/}
            {/*    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            {/*</div>*/}
          <ProfileInfo
              profile={props.profile} status={props.status} updateStatus={props.updateUserStatusTC}
          />
          <MyPostsWrap />
        </div>
      </section>
    );
}

export default Profile;