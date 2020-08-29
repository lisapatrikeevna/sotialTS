import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs';
import {Route} from 'react-router-dom';
import News from './components/News';
import Settings from './components/Settings';
import Users from './components/Users/Users';
import { rootStateType,  storeType,dispatchActionType } from './redux/ReduxStore';

export type  appType={
  state:rootStateType
  // addChangePost:() => void
  // sendMessage:() =>  void
  // changeNewPostText:( newText:string) => void
  // changeNewMessage:(someText:string)=>void
  store: storeType
  dispatch:(action:dispatchActionType)=>void
}
function App(props:appType) {
  
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div  className = 'wrappContent'>
              <Route path={"/dialogs"} render={ () => <Dialogs 
                                                        dialogs ={props.state.dialogs} 
                                                        message={props.state.dialogs.messageForNewDialog}
                                                        dispatch={props.store.dispatch.bind(props.store)}
                                                        // sendMessage={props.sendMessage}
                                                        // changeNewMessage={props.changeNewMessage}
                                                        /> } />
              <Route path={"/profile"} render={() => <Profile 
                                                        profile ={props.state.profile}
                                                        dispatch={props.store.dispatch.bind(props.store)}
                                                        // dispatch={props.dispatch}
                                                        // addChangePost={props.addChangePost} 
                                                        // changeNewPostText={props.changeNewPostText}
                                                      /> 
              } />
              <Route path= {"/news"} render={() => <News/>} />
              {/* <Route path={"/music"} render={() => <Music/>} /> */}
              <Route path={"/settings"} render={() => <Settings/>} />
              {/* <Route path={"/users"} render={() => <Users/>} /> */}
        </div>
        <Footer/>
      </div>
  );
}

export default App;
