import React from 'react';
import {AddChangePostAC,  postType} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/ReduxStore";
import {Dispatch} from "redux";

// type propsMyPostsType = {
//   // post: Array<postType>
//   // message: string
//   // addChangePost: () => void
//   // onPostChange: (newText:string) => void
//   // dispatch:(action:dispatchActionType) => void
//   // store:any
// }



type mapStateToPropsType={
    posts:Array<postType>
    message: string
}
type mapDispatchToPropsType={
    addChangePost:(value:string)=>void
}
let mapStateToProps = (state: RootStateType):mapStateToPropsType=>{
    return{
        posts:state.profile.posts,
        message:state.profile.messageForNewPost
    }
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        addChangePost: (value: string) => {
           // debugger
            dispatch(AddChangePostAC(value))
        },
        // onPostChange: (message:string) => {
        //     dispatch(OnPostChangeActionCreator(message))
        // }
    }
}
const MyPostsWrap = connect<mapStateToPropsType,mapDispatchToPropsType,{},RootStateType>(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsWrap;

// function MyPostsWrap(props:propsMyPostsType ){
// let state = props.store.getState();
//
//
//   const addChangePost = ()=>{
//       // props.addChangePost();
//       props.store.dispatch(AddChangePostActionCreator());
//   };
//   const onPostChange = (text:string)=>{
//     // let action = OnPostChangeActionCreator(text);
//     // props.onPostChange(text);
//     // props.dispatch({type:'CHANGE-NEW-POST-TEXT',newText:text })
//       props.store.dispatch(OnPostChangeActionCreator(text));
//   }
// return(
//     <MyPosts post={state.post} message={props.store.getState().message} addChangePost={addChangePost} onPostChange={onPostChange} />
// )
//
// }