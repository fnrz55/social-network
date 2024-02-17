import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setLogout,getUserAuth } from './../../redux/authReducer';
import { getMyProfile } from './../../redux/profileReducer';

class HeaderContainerAPI extends React.Component{

    componentDidMount(){
        if(this.props.isAuth){
            this.props.getMyProfile(this.props.userId)
        }
    }

    componentDidUpdate(){
        
    }
    
    
    
        
    

render(){  
    return <Header isAuth={this.props.isAuth} logOut={this.props.setLogout} myLogin={this.props.login} userProfile={this.props.myProfile} />
}

}

const mapStateToProps=(state)=>{
    return{
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    userId:state.auth.userId,
    myProfile:state.profilePage.myProfile,
}};
// id:state.auth.userId,
// isAuth:state.auth.isAuth,
    
const HeaderContainer=connect(mapStateToProps,{setLogout,getMyProfile,getUserAuth})(HeaderContainerAPI)

export default HeaderContainer