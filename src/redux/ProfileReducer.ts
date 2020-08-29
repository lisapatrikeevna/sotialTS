import {dispatchActionType, postType} from "./ReduxStore";


let initialState={
    messageForNewPost: '',
    post:[
        {id: 1, message: "some text", likesCount: 23 },
        {id: 2, message: "here you goo", likesCount: 3 },
        {id: 3, message: "let`s goo bebe", likesCount: 2 }
    ]
}

const ADD_CHANGE_POST = "ADD-CHANGE-POST";
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT";
const profileReducer = ( state=initialState, action:dispatchActionType) => {
    switch (action.type) {
        case ADD_CHANGE_POST:
            const newPost: postType = {
                id: new Date().getTime(),
                likesCount: 0,
                message: state.messageForNewPost
            }
            state.messageForNewPost  = '';
            state.post.push(newPost);
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText;
            return state;
        default :
            return state;
    }


}
export const addChangePostActionCreator = () => ({ type: ADD_CHANGE_POST})
export const onPostChangeActionCreator = (message:string) => ({type:CHANGE_NEW_POST_TEXT,newText:message })
export default profileReducer;