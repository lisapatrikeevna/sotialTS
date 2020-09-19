import React from 'react';
import {AddChangePostActionCreator, OnPostChangeActionCreator} from "../../../redux/ProfileReducer";
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
let mapStateToProps = (state: RootStateType)=>{
    return{
        posts:state.profile.posts,
        message:state.profile.messageForNewPost
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addChangePost: () => {
            dispatch(AddChangePostActionCreator())
        },
        onPostChange: (text:string) => {
            dispatch(OnPostChangeActionCreator(text))
        }
    }
}
const MyPostsWrap = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsWrap;