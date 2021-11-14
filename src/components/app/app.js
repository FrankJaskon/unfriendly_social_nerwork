import React from 'react';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import AsideContainer from '../aside';
import HeaderContainer from '../header';
import {initializeApp} from '../../redux/app-reducer';
import Preloader from '../common/preloader';
import HOC from '../common/hoc';

import s from './App.module.sass';

const LoginContainer = HOC.wrapComponentSuspense(
    React.lazy(() => import('../login')), <Preloader preloaderClass={s.preloader} />);
const ProfileContainer = HOC.wrapComponentSuspense(
    React.lazy(() => import('../profile')), <Preloader preloaderClass={s.preloader} />);
const DialogsContainer = HOC.wrapComponentSuspense(
    React.lazy(() => import('../dialogs')), <Preloader preloaderClass={s.preloader} />);
const UsersContainer = HOC.wrapComponentSuspense(
    React.lazy(() => import('../users')), <Preloader preloaderClass={s.preloader} />);
const SettingsContainer = HOC.wrapComponentSuspense(
    React.lazy(() => import('../settings')), <Preloader preloaderClass={s.preloader} />);
const News = HOC.wrapComponentSuspense(
    React.lazy(() => import('../news')), <Preloader preloaderClass={s.preloader} />);
const Music = HOC.wrapComponentSuspense(
    React.lazy(() => import('../music')), <Preloader preloaderClass={s.preloader} />);

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) return <Preloader preloaderClass={s.preloader}/>

        return (
            <div className={s.app}>
                <div className={s.wrapper}>
                    <HeaderContainer />
                    <AsideContainer />
                    <div className={s['app-wrapper-content']}>
                        <Route
                            path='/login/'
                            render={LoginContainer} />
                        <Route
                            path='/profile/:userId?'
                            render={ProfileContainer} />
                        <Route
                            path='/dialogs/'
                            render={DialogsContainer} />
                        <Route
                            path='/users/'
                            render={UsersContainer} />
                        <Route path='/news' component={News} />
                        <Route path='/music' component={Music} />
                        <Route
                            path='/settings'
                            render={SettingsContainer} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({app: {initialized}}) => ({
    initialized
});

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp})
)(App);


const UnfriendlySocialNetworkApp = ({store}) => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}

export default UnfriendlySocialNetworkApp;
