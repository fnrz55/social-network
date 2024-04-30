import React from "react";
import c from './User.module.css'
import s from '../../../../img/Users/6386837.svg'
import d from '../../../../img/Users/8184225.svg'
import { NavLink } from "react-router-dom";

const User = (props) => {

    let deleteUser = () => {
        props.deleteUserThunk(props.id)
    }

    let addUser = () => {
        props.addUser(props.id)
    }

    return (
        <div className={c.item}>
            <div className={c.avatar}>
                <NavLink to={"/profile/" + props.id}>
                    <img src={props.photos.small != null ? props.photos.small : "https://i.pinimg.com/564x/06/a0/59/06a059e6ef315c59c3eb07dfb54e27d2.jpg"} alt="" />
                </NavLink>
            </div>
            <div className={c.info}>
                <div className={c.main}>
                    <div className={c.name}>
                        {props.name}
                    </div>
                    <div className={c.status}>
                        {props.status}
                    </div>
                </div>
                <div className={c.additional}>
                    <div className={c.add}>
                        {props.added
                            ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={deleteUser}><img src={d} alt="" /></button>
                            : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={addUser}><img src={s} alt="" /></button>
                        }          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User