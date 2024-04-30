import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route, Navigate} from "react-router-dom";
import UsersContainer from './components/FriendsPage/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMyProfile } from './redux/profileReducer';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { withRouter } from './HOC/withRouter';
import FriendsContainer from './components/FriendsPage/Friends/FriendsContainer';
import FriendsPage from './components/FriendsPage/FriendsPage';
const ProfileContainer=React.lazy(()=>import('./components/Content/ProfileContainer')) ;


class  App extends React.Component{

  componentDidMount(){
    this.props.initializeApp()
    }
    



render(){
  if(!this.props.initialized){
    return <Preloader/>
  }

  return (
    <Suspense fallback={<div><Preloader /></div>}>
    <div className='app-wrapper' >
     <HeaderContainer myProfile={this.props.myProfile} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*"element= {<DialogsContainer  />}/> 
          <Route path="/profile/:userId?" element={<ProfileContainer />}/>
          <Route path="/" element={<Navigate to={'/profile'}/>}/>
          <Route path="/profile/" element={<ProfileContainer />}/>
          <Route path="/friends" element={<FriendsPage/>}/>

          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </div>
    </Suspense>
  );
}
}

const mapStateToProps=(state)=>({
  initialized:state.app.initialized
})

export default compose(
  connect(mapStateToProps,{initializeApp ,getMyProfile}),
  withRouter,
) (App);
