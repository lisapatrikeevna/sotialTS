import React from 'react';
import stule from './App.module.css';
import style from './components/TemplateSettings/ThemeChange.module.css';
import cl from './components/TemplateSettings/BackgroundChange.module.css';
import {Route, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from "redux";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeaderWrap from "./components/HeaderWrap";
import LoginWrap from "./components/LoginWrap";
import {BackgroundChangeAC, setInitialTC, ThemeChangeAC, themType} from "./redux/AppReducer";
import {RootStateType} from "./redux/ReduxStore";
import {Preloader} from "./common/Preloader";
import {Settings} from "./components/Settings"

//const Settings = React.lazy(() => import ("./components/Settings"));
const News = React.lazy(() => import ( "./components/News"));
const Music = React.lazy(() => import ( "./components/Music"));
const DialogsWrap = React.lazy(() => import ("./components/DialogsWrap"));
const UsersWrap = React.lazy(() => import ( "./components/Users/UsersWrap"));
const ProfileWrap = React.lazy(() => import ("./components/ProfileWrap"));

type MapStateType = {
    initial: boolean
    bgBody: string
    theme: themType
}
type DispatchStateType = {
    setInitialTC: () => void
    ThemeChangeAC: (name: themType) => void
    BackgroundChangeAC: (name: string) => void
}
type OwnProps = {}
type bodyType = string[];
const body: bodyType = ['bgGray', 'bgCrazy'];

class App extends React.Component <MapStateType & DispatchStateType & OwnProps> {
    componentDidMount() {
        this.props.setInitialTC()
        const name = localStorage.getItem('theme') as themType
        if (name) {
            this.props.ThemeChangeAC(name)
        }
        const bgName = localStorage.getItem('backroundName');
        if (bgName) {
            this.props.BackgroundChangeAC(bgName)
        }
    }

    render() {
        if (!this.props.initial) {
            return <Preloader/>
        }
        return (
            // <IsAuthContext.Provider  value={false}>
            <div className={stule.appWrapper}>
                <HeaderWrap/>
                <Navbar/>
                <React.Suspense fallback={'...loading'}>
                <div className={`${stule.wrappContent} ${style[this.props.theme + 'Body']} ${cl[this.props.bgBody]}`}>
                    <Route path={"/dialogs"} render={() => <DialogsWrap/>}/>
                    <Route path={"/users"} render={() => <UsersWrap/>}/>
                    <Route path={"/profile/:userID?"} render={() => <ProfileWrap/>}/>
                    <Route path={"/login"} render={() => <LoginWrap/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>

                </div>
                </React.Suspense>
                <Footer/>
            </div>
            // </IsAuthContext.Provider>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStateType => ({
    initial: state.app.initial,
    bgBody: state.app.bgBody,
    theme: state.app.theme,
})
export default compose<React.ComponentClass>(
    withRouter,
    connect<MapStateType, DispatchStateType, OwnProps, RootStateType>(mapStateToProps, {
        setInitialTC, ThemeChangeAC, BackgroundChangeAC
    }))(App);