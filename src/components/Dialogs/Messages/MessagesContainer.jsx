import React from 'react'
import { addMessage } from '../../../redux/messageReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

let mapStateToProps = (props) => {
    return {
        messages:props.messagesPage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage:(text) => {
            dispatch(addMessage(text));
        },
    }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default MessagesContainer