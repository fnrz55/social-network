import React from "react"
import { connect } from "react-redux"
import { getUserAuth } from "../redux/authReducer"

let mapStatetoProps=(state)=>({
    isAuth:state.auth.isAuth,
    
})

export const withAurhHeader=(Component)=>{
    class HeaderComponent extends React.Component{
        componentDidMount(){
            this.props.getUserAuth()
        }

        render(){
            return <Component {...this.props} />   
        }
    }

    let connectedRedirectComponent=connect(mapStatetoProps,{getUserAuth})(HeaderComponent)

    return connectedRedirectComponent;
}

