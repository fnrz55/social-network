import React from "react";
import c from './Users.module.css'
import User from './User/User';
import { useState } from "react";
import ni from './../../img/Users/chevron-right.svg'
import pi from './../../img/Users/chevron-left.svg'
import fi from './../../img/Users/first-page.png'
import li from './../../img/Users/last-page.png'

const Users = (props) => {
    
    return (
        <div className={c.container}>
            <div className={c.title}>
                <h3>CURRENT USERS OF THIS SITE</h3>
            </div>
            <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
             currentPage={props.currentPage} onPageChanged={props.onPageChanged}
             portionSize={10}  />
            {props.users.map(u =>
                <User photos={u.photos}
                    name={u.name} status={u.status} location={u.location}
                    added={u.followed} id={u.id} followingInProgress={props.followingInProgress}
                    addUser={props.addUser}
                    deleteUserThunk={props.deleteUserThunk} />)}
            <div className={c.getUsers}>
                <button >
                    GET USERS
                </button>
            </div>
        </div>

    )


}

const Pagination=(props)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)

    }
    
    let portionCount=Math.ceil(pagesCount/props.portionSize)
    let [potrionNumber,setPortionNumber]=useState(Math.ceil(props.currentPage / props.portionSize))
    let leftPotrionNumber=(potrionNumber-1)*props.portionSize+1
    let rightPotrionNumber=potrionNumber*props.portionSize

    return(
        
        <div className={c.pagesCont}>
            <button onClick={()=>{props.onPageChanged(1)}}><img src={fi} alt="" /> </button>
        {potrionNumber>1 &&
            <button className={c.button} onClick={()=>{setPortionNumber(potrionNumber-1)}}> <img src={pi} alt="" /></button>
        }
                <ul className={c.pagesLict}>
                    {pages
                    .filter(p=>p>=leftPotrionNumber&&p<=rightPotrionNumber)
                    .map(p => {
                        return (
                            <li className={props.currentPage === p && c.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</li>
                        )
                    })}
                </ul>
            {portionCount>potrionNumber&& <button className={c.button} onClick={()=>{setPortionNumber(potrionNumber+1)}}><img src={ni} alt="" /></button> }
            <button onClick={()=>{props.onPageChanged(pages[pages.length-1])}}><img src={li} alt="" /></button>
            </div>
    )
    
}

export default Users