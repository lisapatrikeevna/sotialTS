

type AddChangePostActionType = ReturnType<typeof AddChangePostActionCreator>
type ChangeNewPostTextActionType = ReturnType<typeof OnPostChangeActionCreator>
type dispatchActionType = AddChangePostActionType| ChangeNewPostTextActionType;
type profileInitialStateType = {
    posts: Array<postType>
    messageForNewPost: string
}
export type postType = {
    id: number
    message: string
    likesCount: number
}

let initialState :profileInitialStateType={
    messageForNewPost: '',
    posts:[
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
            return {
                ...state,
                messageForNewPost :'',
                posts: [...state.posts,newPost]
            };
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                messageForNewPost: action.newText
            };
        default :
            return state;
    }
}
export const AddChangePostActionCreator = () => ({ type: ADD_CHANGE_POST} as const)
export const OnPostChangeActionCreator = (message:string) => ({type:CHANGE_NEW_POST_TEXT,newText:message })
export default profileReducer;