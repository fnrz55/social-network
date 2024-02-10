import profileReducer, { addPost } from "./profileReducer";
it('length of posts should be incremented', () => {
    let action = addPost("))))))")
    let state = {
        posts: [
            { id: 1, text: "hi ahahahaahahaha", likesCount: "0" },
            { id: 2, text: "hi ahahahaahahaha", likesCount: "1" },
            { id: 3, text: "hi ahahahaahahaha", likesCount: "11" },
        ],
    }
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(4) 
})
