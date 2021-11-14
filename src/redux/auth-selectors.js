import {createSelector} from 'reselect';

export const getMyId = ({auth: {id}}) => {
    return id;
}

export const getIsAuthSelector = (state) => {
    const {auth: {isAuth}} = state;
    return isAuth;
}

export const getIsAuth = createSelector(getIsAuthSelector,
    (isAuth) => {
    return isAuth;
});

export const getIsCaptcha = (state) => {
    const {auth: {isCaptcha}} = state;
    return isCaptcha;
}

export const getCaptcha = (state) => {
    const {auth: {captcha}} = state;
    return captcha;
}