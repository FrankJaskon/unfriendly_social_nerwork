import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import asideReducer from './aside-reducer';
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import settingsReducer from './settings-reducer';
import appReducer from './app-reducer';
import thunkMiddleWare from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer,
    aside: asideReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    settings: settingsReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(compose(applyMiddleware(thunkMiddleWare))));

// export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));