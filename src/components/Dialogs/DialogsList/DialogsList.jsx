import React from "react";
import Dialog from "./DialogLink/Dialog";
import c from './DialogsList.module.css'

const DialogsList=(props)=>{
    
    let dialogsElements=
props.dialogs.map(dialog=>{return <Dialog name={dialog.name} num={dialog.num} text={dialog.text}/>});
return(
<div className={c.list}>
    {dialogsElements}
</div>)
}

export default DialogsList