import React from "react";
import { useForm } from "react-hook-form"
import { connect } from "react-redux";
import c from './Login.module.css'
import { setLogin,getUserAuth } from './../../redux/authReducer';
import { Navigate } from "react-router-dom";

const Login = (props) => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        props.setLogin(data.login,data.password,data.remembered,data.captcha)
        
        // if(props.errorMessage){
        //     setError("wrongLogin",{
        //         type:"custom",
        //         message:props.errorMessage,
        //     })
        // }
        reset()
        
        
    }
    if(props.isAuth===true){
        return <Navigate to={'/profile'}/>
     }
    return (
        
        <div className={c.container}>
            <div>LOGIN</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <label >
                        <div>Login</div>
                        <input className={c.field} placeholder="Enter ur login" {...register('login', {
                            required: 'Enter login',
                            minLength: {
                                value: 3,
                                message: "minimum 3 characters"
                            }
                        })} />
                    </label>
                </div>
                <div className={c.error}>
                    {errors?.login && <div >{errors?.login?.message || "ERROR"}</div>}
                </div>
                <div >
                    <label>
                        <div>Password</div>
                        <input className={c.field} placeholder="Enter ur password" type="password" {...register('password', {
                            required: 'Enter password',
                        })} />
                    </label>
                </div>
                <div className={c.error}>
                    {errors?.password && <div >{errors?.password?.message || "ERROR"}</div>}
                    
                </div>
                <div className={c.rememerMe}>
                    <input {...register('remembered')} type="checkbox" />
                    <span> Remember me</span>
                </div>
                <div className={c.error}>
                    <div></div>
                {props.errorMessage&&<p>{props.errorMessage}</p>}
                </div>
                {props.captchaUrl&& <div><img src={props.captchaUrl} alt=""/>
                    <input type="text" {...register('captcha',{required:'Enter captcha'})} />
                    </div>}
                <input type="submit" disabled={!isValid} />
            </form>

        </div>

    )
}

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    errorMessage:state.auth.errorMessage,
    captchaUrl:state.auth.captchaUrl,
})

export default connect(mapStateToProps, { setLogin,getUserAuth })(Login)