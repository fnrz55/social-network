import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { getUserAuth } from "../redux/authReducer"

let mapStatetoProps=(state)=>({
    isAuth:state.auth.isAuth
})

export const withAurhRedirect=(Component)=>{
    class RedirectComponent extends React.Component{
        componentDidMount(){
            this.props.getUserAuth()
        }

        render(){
            if (!this.props.isAuth){ return <Navigate to={'/login'}/>}
    return <Component {...this.props} />   
        }
    }

    let connectedRedirectComponent=connect(mapStatetoProps,{getUserAuth})(RedirectComponent)

    return connectedRedirectComponent;
}

