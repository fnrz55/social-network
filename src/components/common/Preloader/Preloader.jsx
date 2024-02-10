import React from "react";
import c from './Preloader.module.css'
import d from '../1480.gif'
const Preloader=(props)=>{
    return(
        <div className={c.container}>
            <img src={d}/>
            </div>
    )
}
export default Preloader