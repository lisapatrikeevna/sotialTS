import React from 'react';
import cl from './MyPost.module.css';
import imgAvatar from '../../../assets/img/undraw_cloud_docs_p4ob.png';

export type postPropsType = {
    message: string
    likesCount: number
    id: number 
  } 
const Post = (props:postPropsType) =>{
    return (
      <div className={cl.item} key={props.id}>
        <img src={imgAvatar}/>
        <p className={cl.message}>{props.message }</p>
        <div className={cl.wrap}>
          <span>Like :</span><p>{props.likesCount}</p>
        </div>
            
      </div>
    );
  }
   export default Post;