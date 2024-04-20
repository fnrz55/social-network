import React, { useState } from 'react'
import { useForm } from 'react-hook-form';



const ProfileForm = ({handleRedactProfile,profile,saveProfile,...props}) => {
    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            fullName: profile.fullName,
            aboutMe:profile.aboutMe,
            lookingForAJob:profile.lookingForAJob,
            lookingForAJobDescription:profile.lookingForAJobDescription,
            'contacts.vk':profile.contacts.vk,
            'contacts.instagram':profile.contacts.instagram,
          }
    })
    
    const onSubmit= (data)=>{
        saveProfile(data).then(()=>{
            handleRedactProfile()
        })
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit)}>
            <p>Your name:</p>
            <input type="text" {...register('fullName',{required:"Enter ur name"})} />
            <p>Your self description:</p>
            <input type="text"{ ...register('aboutMe')} />
            <p>Your work description:</p>
            <input type="checkbox"  {...register('lookingForAJob') }  />
             <input type="text" {...register('lookingForAJobDescription')} />
            <p>Your vk link:</p>
            <input type="text"{ ...register('contacts.vk',{pattern: {
            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            message: 'Invalid URL'
          }})} />
            <p>Your inst link:</p>
            <input type="text" { ...register('contacts.instagram',{pattern: {
            value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            message: 'Invalid URL'
          }})} />
            <div className='error'>
            {props.errorMessage&&<p>{props.errorMessage}</p>}
            </div>
            <input type="submit"/>
        </form>
  )
}

export default ProfileForm