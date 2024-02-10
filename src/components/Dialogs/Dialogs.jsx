import React from 'react'
import c from './Dialogs.module.css'
import DialogsListContainer from './DialogsList/DialogsListContainer'
import MessagesContainer from './Messages/MessagesContainer'

const Dialogs=(props)=>{
    return(
        <div className={c.container}>
                <DialogsListContainer />
            <div className={c.dialog}>
                <MessagesContainer />
            </div>
        </div>
    )
}
export default Dialogs