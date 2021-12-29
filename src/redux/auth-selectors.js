import {createSelector} from 'reselect';

export const getMyIdSelector = ({auth: {id}}) => id;

export const getIsAuthSelector = ({auth: {isAuth}}) => isAuth;

export const getIsCaptchaSelector = ({auth: {isCaptcha}}) => isCaptcha;

export const getCaptchaSelector = ({auth: {captcha}}) => captcha;

export const getMyId = createSelector([getMyIdSelector], id => id);

export const getIsAuth = createSelector([getIsAuthSelector], isAuth => isAuth);

export const getIsCaptcha = createSelector([getIsCaptchaSelector], isCaptcha => isCaptcha);

export const getCaptcha = createSelector([getCaptchaSelector], captcha => captcha);