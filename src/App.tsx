import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import {Route} from 'react-router-dom';
import News from './components/News';
import Settings from './components/Settings';
import DialogsWrap from "./components/DialogsWrap";
import UsersWrap from "./components/Users/UsersWrap";
import ProfileWrap from "./components/ProfileWrap";
// import {UsersWrap} from "./components/Users/UsersWrap";


function App() {

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div  className = 'wrappContent'>
              <Route path={"/dialogs"} render={ () => <DialogsWrap/> } />
              <Route path={"/profile/:userID?"} render={() => <ProfileWrap/> } />
              {/*<Route path= {"/news"} render={() => <News/>} />*/}
              {/* <Route path={"/music"} render={() => <Music/>} /> */}
              <Route path={"/settings"} render={() => <Settings/>} />
              <Route path={"/users"} render={() => <UsersWrap/>} />
        </div>
        <Footer/>
      </div>
  );
}

export default App;
