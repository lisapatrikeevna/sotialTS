import React from 'react';
import './App.module.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';
import DialogsWrap from "./components/DialogsWrap";
import UsersWrap from "./components/Users/UsersWrap";
import HeaderWrap from "./components/HeaderWrap";
import LoginWrap from "./components/LoginWrap";
import ProfileWrap from "./components/ProfileWrap";


function AppOld() {
  return (
      // <IsAuthContext.Provider  value={false}>
      <div className='app-wrapper'>
        <HeaderWrap />
        <Navbar/>
        <div  className = 'wrappContent'>
              <Route path={"/dialogs"} render={ () => <DialogsWrap/> } />
              <Route path={"/profile/:userID?"} render={() => <ProfileWrap/> } />
              {/*<Route path= {"/news"} render={() => <News/>} />*/}
              {/* <Route path={"/music"} render={() => <Music/>} /> */}
              {/*<Route path={"/settings"} render={() => <Settings/>} />*/}
              <Route path={"/users"} render={() => <UsersWrap/>} />
              <Route path={"/login"} render={() => <LoginWrap/>} />
        </div>
        <Footer/>
      </div>
      // </IsAuthContext.Provider>
  );
}

export default AppOld;
