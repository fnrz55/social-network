import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

 let store = {

    _state: {
        messagesPage: {
            dialogs: [
                { id: 1, name: "AALLL", text: "))))))", num: 1 },
                { id: 2, name: "KKKKK", text: "hihihih", num: 2 },
                { id: 3, name: "SSSSSS", text: "((((((", num: 3 }
            ],
            newMessageText:'',
            messages: [
                { id: 1, name: "SSSSSS", text: ")))))ADASDA" },
                { id: 2, name: "KKKKKKK", text: "hi" },
                { id: 3, name: "SAD", text: "hello" },
                { id: 4, name: "SSSSSS", text: ")))))ADASDA" },
                { id: 5, name: "SSSSSS", text: ")))))ADASDA" },
                { id: 6, name: "Ahaha", text: "hello ssss" }
            ],
        },
        profilePage: {
            posts: [
                { id: 1, text: "hi ahahahaahahaha", likesCount: "0" },
                { id: 2, text: "hi ahahahaahahaha", likesCount: "1" },
                { id: 3, text: "hi ahahahaahahaha", likesCount: "11" },
            ],
            newPostsText: "",
            friends: [
                { id: 1, name: "Andrew" },
                { id: 1, name: "Kate" },
                { id: 1, name: "Bob" },
            ]
        },
    },

    _callSubsriber(){
        console.log('no observers')
    },

    subscribe(observer) {
        this._callSubsriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.messagesPage=messageReducer(this._state.messagesPage,action)
        this._callSubsriber(this._state)
    },
}

export default store
