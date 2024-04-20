import React from 'react'
import FriendPageMenu from './FriendsPageMenu'
import { useState } from 'react';
import FriendsContainer from './Friends/FriendsContainer';
import UsersContainer from './Users/UsersContainer';
import s from './FriendsPage.module.css'


function FriendsPage() {
const[friendsPageOption,setFriendsPageOption]=useState(0)

const changeOption=(e)=>{
  setFriendsPageOption(e)
    console.log(e);
}


  return (
    <div className={s.container}>
      <div className={s.menu}>
        <FriendPageMenu  changeShowmode={changeOption}/>
      </div>
      <div className={s.usersBlock}>
        {
        friendsPageOption==0?<FriendsContainer/>
        :friendsPageOption==1&&<UsersContainer/>
        }
        </div>
    </div>
  )
}

export default FriendsPage