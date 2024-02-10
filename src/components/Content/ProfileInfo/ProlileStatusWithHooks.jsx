import React, { useState } from "react";
import c from './ProfileInfo.module.css'



const ProfileStatusWithHooks=(props)=>  {
    let [editMode,setEditMode]=useState(false)
    let [userStatus,setStatus]=useState(props.status)
    
    let activateEditMode=()=>{
        setEditMode(true)
    }

    let deactivateEditMode=()=>{
        setEditMode(false)
        props.updateStatus(userStatus)
    }

    let onStatusChange=(e)=>{
            setStatus(e.currentTarget.value)
    }
    
        return (
            <div>
                {!editMode&&<div>
                    <span onDoubleClick={activateEditMode}>{props.status?props.status:"Write something about urself..."}</span>
                </div>
                }
                {editMode&&<div>
                    <input  autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={userStatus}  type="text"  />
                </div>
                }
                
            </div>
        )
    }
    


export default ProfileStatusWithHooks