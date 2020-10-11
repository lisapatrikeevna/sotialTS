import React, { ChangeEvent } from 'react';
import cl from './MyPost.module.css';
import Post from './Post';
import {postType} from "../../../redux/ProfileReducer";


type propsMyPostsType = {
  posts: Array<postType>
  message: string
  addChangePost: () => void
  onPostChange: (message:string) => void
}


function MyPosts(props:propsMyPostsType ){

  let postsElement = props.posts.map(d =>{
    return <Post id={d.id} message={d.message} likesCount={d.likesCount}/>
  });

  const addPost = ()=>{
      props.addChangePost();
  };
  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
    let message = e.currentTarget.value;
    props.onPostChange(message);
  }
return(
    <div className ={cl.post}>
      <h2>My Posts</h2>
      <div className={cl.sendMessage}>
         <p>write new post:</p> 
        <textarea  value={props.message}  onChange={onPostChange} placeholder={"write your message"}/>
         <button  className={cl.btnAddet} onClick={addPost}>Add post</button>
      </div>
      <div className ={cl.posts}>
        {postsElement}
      </div>
    </div>
)

}
export default MyPosts;