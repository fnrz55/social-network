import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMyProfile } from './redux/profileReducer';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { withRouter } from './HOC/withRouter';

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
          <Route path="/profile/" element={<ProfileContainer />}/>
          <Route path="/users" element={<UsersContainer />}/>
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
