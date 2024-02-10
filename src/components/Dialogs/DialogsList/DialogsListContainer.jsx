import React from "react";
import DialogsList from "./DialogsList";
import { connect } from 'react-redux';

let mapStateToProps=(state)=>{
    return{
        dialogs:state.messagesPage.dialogs,
        isAuth:state.auth.isAuth
    }
  }

const DialogsListContainer=connect(mapStateToProps)(DialogsList);

export default DialogsListContainer