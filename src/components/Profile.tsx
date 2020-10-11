import React  from 'react';
import cl from'./css/Profile.module.css';
import ProfileInfo from './TemplateProfile/ProfileInfo/ProfileInfo';
import mainImage from '../assets/img/baner1.png';
import MyPostsWrap from "./TemplateProfile/MyPosts/MyPostsWrap";
import {AxiosGetType} from "./ProfileWrap";

export type ProfilePropsType = {
  profile:AxiosGetType
  // addChangePost:()=>void
  // changeNewPostText:(newText:string) => void
  // dispatch:(action:dispatchActionType)=>void
  //   store:any
}
const Profile = (props: ProfilePropsType) => {
  // debugger
    return(
      <section className = 'content d-flex'>
        <div>
        {/* <img src={mainImage}/> */}
          <div className = {cl.main__image}>
            <img src={mainImage} className={cl.baner}/>
          </div>
          <ProfileInfo
              profile={props.profile}
          />
          <MyPostsWrap
              // store={props.store}
          // post={props.profile.post}
          // message={props.profile.messageForNewPost}
          // addChangePost={props.addChangePost}
          // onPostChange={props.changeNewPostText}
          // dispatch={props.dispatch}
          />
        </div>
      </section>
    );
}

export default Profile;