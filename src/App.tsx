import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {Route, withRouter} from 'react-router-dom';
import Settings from './components/Settings';
import DialogsWrap from "./components/DialogsWrap";
import UsersWrap from "./components/Users/UsersWrap";
import HeaderWrap from "./components/HeaderWrap";
import LoginWrap from "./components/LoginWrap";
import ProfileWrap from "./components/ProfileWrap";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitialTC} from "./redux/AppReducer";
import {RootStateType} from "./redux/ReduxStore";
import {Preloader} from "./common/Preloader";

type MapStateType = {
    initial: boolean
}
type DispatchStateType = {
    setInitialTC: () => void
}

type OwnProps = {

}

class App extends React.Component <MapStateType & DispatchStateType & OwnProps> {
    componentDidMount() {
        this.props.setInitialTC()
    }

    render() {
        if (!this.props.initial) {
            return <Preloader/>
        }
        return (
            // <IsAuthContext.Provider  value={false}>
            <div className='app-wrapper'>
                <HeaderWrap/>
                <Navbar/>
                <div className='wrappContent'>
                    <Route path={"/dialogs"} render={() => <DialogsWrap/>}/>
                    <Route path={"/profile/:userID?"} render={() => <ProfileWrap/>}/>
                    {/*<Route path= {"/news"} render={() => <News/>} />*/}
                    {/* <Route path={"/music"} render={() => <Music/>} /> */}
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/users"} render={() => <UsersWrap/>}/>
                    <Route path={"/login"} render={() => <LoginWrap/>}/>
                </div>
                <Footer/>
            </div>
            // </IsAuthContext.Provider>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStateType => ({
    initial: state.app.initial
})
export default compose<React.ComponentClass>(
    withRouter,
    connect<MapStateType, DispatchStateType, OwnProps,RootStateType >(mapStateToProps, {
        setInitialTC,
    }))(App);