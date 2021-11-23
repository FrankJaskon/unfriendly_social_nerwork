import React, {useEffect} from 'react';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import AsideContainer from '../aside';
import HeaderContainer from '../header';
import Preloader from '../common/preloader';
// import HOC from '../common/hoc';
// import News from '../news';
// import Music from '../music';
// import DialogsContainer from '../dialogs';
import ProfileContainer from '../profile';
import UsersContainer from '../users';
import LoginContainer from '../login';
import SettingsContainer from '../settings';
import WarningField from '../common/warning-field';
import {initializeApp, setResponseWarning} from '../../redux/app-reducer';
import {getInitialized, getResponseWarning} from '../../redux/app-selectors';

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


    // componentDidMount() {
    //     this.props.initializeApp();
    //     // window.addEventListener("unhandledrejection", function (event) {
    //     //     console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: "
    //     //                  + event.reason);
    //     //   });
    // }
const App = ({initializeApp, initialized, responseWarning, setResponseWarning}) => {

    useEffect(() => {
        initializeApp();

        window.addEventListener("unhandledrejection", ({reason: {response: {data: {message}}}}) => {
            setResponseWarning(message);
        });
    }, [initializeApp, setResponseWarning]);


    if (!initialized) {
        return <Preloader preloaderClass={s.preloader}/>
    }
    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <HeaderContainer />
                <AsideContainer />
                <div className={s['app-wrapper-content']}>
                    {/* <WarningField hideFieldFunction={setResponseWarning}>{responseWarning}</WarningField> */}
                    <WarningField hideFieldFunction={setResponseWarning} filedStyle={s.warningField}>
                        {responseWarning}
                    </WarningField>
                    <Switch>
                        <Route
                            path={["/login"]}
                            component={LoginContainer} />
                        <Route
                            path='/profile/:userId?'
                            component={ProfileContainer} />
                        {/* <Route
                            path='/dialogs/'
                            component={DialogsContainer} /> */}
                        <Route
                            path='/users/'
                            component={UsersContainer} />
                        {/* <Route path='/news' component={News} />
                        <Route path='/music' component={Music} /> */}
                        <Route
                            path='/settings'
                            component={SettingsContainer} />
                        <Route
                            path={["/"]}
                            render={() => <Redirect to='/login' />} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    initialized: getInitialized(state),
    responseWarning: getResponseWarning(state)
});

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp, setResponseWarning})
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
