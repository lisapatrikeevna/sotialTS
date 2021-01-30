import React from 'react';
import cl from './MyPost.module.css';
import Post from './Post';
import {postType} from "../../../redux/ProfileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type propsMyPostsType = {
    posts: Array<postType>
    addChangePost: (value: string) => void
}


 //const MyPosts=(props: propsMyPostsType)=> {
const MyPosts=React.memo((props: propsMyPostsType)=> {
    let postsElement = props.posts.map(d => {
        return <Post key={d.id} id={d.id} message={d.message} likesCount={d.likesCount}/>
    });

    const onSubmit = (value: FormDataType) => {
        console.log(value)
        props.addChangePost(value.post);
    }
    return (
        <div className={cl.post}>
            <h2>My Posts</h2>
            {/*<div className={cl.sendMessage}>*/}
            {/*  <textarea  value={props.message}  onChange={onPostChange} placeholder={"write your message"}/>*/}
            {/*   <button  className={cl.btnAddet} onClick={addPost}>Add post</button>*/}
            {/*</div>*/}
            <PostReduxForm onSubmit={onSubmit}/>
            <div className={cl.posts}>
                {postsElement}
            </div>
        </div>
    )
})

export default MyPosts;
type  FormDataType = {
    post: string
}
const PostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cl.sendMessage}>
            <p>write new post:</p>
            <Field component={'textarea'} name={'post'} placeholder={'write your message'}/>
            <button className={cl.btnAddet} type={'submit'}>Add post</button>
        </form>
    )
}
const PostReduxForm = reduxForm<FormDataType>({form: 'posts'})(PostForm);