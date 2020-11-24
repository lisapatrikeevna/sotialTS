import profileReducer, {AddChangePostAC, DeletePostAC, setUserStatus} from "./ProfileReducer";

type profileInitialStateType = {
    messageForNewPost: string;
    posts: Array<postType>
    //messageForNewPost: string
    profile: number|null
    status: string
}
export type postType = {
    id: number
    message: string
    likesCount: number
}

let initialState: profileInitialStateType = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: "some text", likesCount: 23},
        {id: 2, message: "here you goo", likesCount: 3},
        {id: 3, message: "let`s goo bebe", likesCount: 2}
    ],
    profile: null,
    status:''
}

it('length posts should be incremented', ()=>{
    let action = AddChangePostAC('test for new posts');
    let newState = profileReducer(initialState,action);
    expect (newState.posts.length).toBe(4);
    //expect(newState.posts[3].id).toBe(4);
    expect(newState.posts[3].likesCount).toBe(0);
})
it('should be correct setUserStatus', ()=>{
    let action = setUserStatus('true');
    let newState= profileReducer(initialState,action)
    expect(newState.status).toBe('true')
})
it('post is decremented', ()=>{
    let action = DeletePostAC(1);
    let newState = profileReducer(initialState,action);
    expect(newState.posts.length).toBe(2)
})
it('if idPost is incorrect post not decremented', ()=>{
    let action = DeletePostAC(100);
    let newState = profileReducer(initialState,action);
    expect(newState.posts.length).toBe(3)
})
