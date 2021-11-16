import React from 'react';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {HashRouter, Route} from 'react-router-dom';
import AsideContainer from '../aside';
import HeaderContainer from '../header';
import {initializeApp} from '../../redux/app-reducer';
import Preloader from '../common/preloader';
// import HOC from '../common/hoc';
import News from '../news';
import Music from '../music';
import ProfileContainer from '../profile';
import DialogsContainer from '../dialogs';
import UsersContainer from '../users';
import LoginContainer from '../login';
import SettingsContainer from '../settings';

import s from './App.module.sass';

// const LoginContainer = HOC.wrapComponentSuspense(
//     React.lazy(() => import('../login')), <Preloader />);
// const ProfileContainer = HOC.wrapComponentSuspense(
//     React.lazy(() => import('../profile')), <Preloader />);
// const DialogsContainer = HOC.wrapComponentSuspense(
//     React.lazy(() => import('../dialogs')), <Preloader />);
// const UsersContainer = HOC.wrapComponentSuspense(
//     React.lazy(() => import('../users')), <Preloader />);
// const SettingsContainer = HOC.wrapComponentSuspense(
//     React.lazy(() => import('../settings')), <Preloader />);
// const News = HOC.wrapComponentSuspense(
//     React.lazy(() => import('../news')), <Preloader />);
// const Music = HOC.wrapComponentSuspense(
//     React.lazy(() => import('../music')), <Preloader />);

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
                            exact
                            path={["/login", "/"]}
                            render={() => <LoginContainer />} />
                        <Route
                            path='/profile/:userId?'
                            render={() => <ProfileContainer />} />
                        <Route
                            path='/dialogs/'
                            render={() => <DialogsContainer />} />
                        <Route
                            path='/users/'
                            render={() => <UsersContainer />} />
                        <Route path='/news' component={News} />
                        <Route path='/music' component={Music} />
                        <Route
                            path='/settings'
                            render={() => <SettingsContainer />} />
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
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default UnfriendlySocialNetworkApp;
