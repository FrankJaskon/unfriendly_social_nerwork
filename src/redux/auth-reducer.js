import {loginAPI} from '../components/api/api';

const SET_AUTH_DATA = 'unfriendly-network/auth/SET-AUTH-DATA',
    SET_CAPTCHA = 'unfriendly-network/auth/SET-CAPTCHA';

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: '',
    isCaptcha: false
};

const authReducer = (state = initialState, action) => {
    const type = action.type;

    switch (type) {
        case SET_AUTH_DATA:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthData = ({id, login, email}, isAuth) =>
    ({type: SET_AUTH_DATA, payload: {id, email, login: login || 'Guest', isAuth}});
export const setIsCaptcha = (captcha, isCaptcha) => ({type: SET_CAPTCHA, payload: {captcha, isCaptcha}});
export const setCaptcha = url => {
    if (url.length > 0) return setIsCaptcha(url, true);
    else return setIsCaptcha(url, false);
}

export const queryAuth = () => async (dispatch) => {
    const {data, resultCode} = await loginAPI.getLoginData(`auth/me`);
        if (!resultCode) dispatch(setAuthData(data, true));
        else dispatch(setAuthData(data, false));
}

export const setUserAuth = (loginData, setErrors) => async (dispatch) => {
    const {resultCode, messages} = await loginAPI.postLoginData(`/auth/login`, loginData);
    if (!resultCode) {
        dispatch(setCaptcha(''));
        dispatch(queryAuth());
    } else if (resultCode === 10) {
            const {url} = await loginAPI.getLoginData(`/security/get-captcha-url`);
            dispatch(setCaptcha(url));
    } else if (resultCode === 1) {
        setErrors({email: messages});
    }
}

export const deleteAuthLogin = () => dispatch => {
    const {resultCode} = loginAPI.deleteLoginData(`/auth/login`);
    if (!resultCode) dispatch(setAuthData({}, false));
    // else console.log(`Something is wrong. Error ${resultCode}: `, messages[0]);
}


export default authReducer;