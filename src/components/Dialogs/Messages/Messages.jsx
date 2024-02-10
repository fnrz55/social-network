import Message from './Message/Message'
import c from './Messages.module.css'
import s from '../../../img/Profile/send.svg'
import React from 'react';
import { useForm } from "react-hook-form"

const Messages = (props) => {
    let messagesElements =
        props.messages.map(message => { return <Message name={message.name} text={message.text} /> })

    let addMessage = (message) => {
        props.addMessage(message)
    }

    return (
        <div className={c.container}>
            <div className={c.info}>
                <div className={c.avarar}>
                    <img src="https://i.pinimg.com/736x/4f/1f/ab/4f1fabcce701473344138eb41fce144d.jpg" alt="" />
                </div>
                <div className={c.name}>
                    adadsadad
                </div>
            </div>
            <div className={c.messagesCont}>
                {messagesElements}
            </div>
            <MessageForm onSubmit={addMessage} />
        </div>
    )
}

const MessageForm = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm()

    const onFormSubmit = (data) => {
        props.onSubmit(data.message)
        reset()
    }

    return <div className={c.newMessage}>
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className={c.input}>
                    <input {...register('message', { required: true })} autocomplete="off" placeholder='Write something to ur friend...' />
                </div>
                <div>
                    {isValid && <button type='submit' >
                        <img src={s} alt="" />
                    </button>}
                </div>
            </form>
        </div>

    </div>
}

export default Messages