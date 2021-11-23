import {getPage, profileAPI, putData} from '../components/api/api';
import {setResponseWarning} from './app-reducer';

const ADD_POST = 'unfriendly-network/profile/ADD-POST',
      SET_USER_PROFILE = 'unfriendly-network/profile/SET-USER-PROFILE',
      SET_PROFILE_STATUS = 'unfriendly-network/profile/SET-PROFILE-STATUS',
      SET_IS_PROFILE_LOADED = 'unfriendly-network/profile/SET-IS-PROFILE-LOADED',
      SET_IS_STATUS_LOADED = 'unfriendly-network/profile/SET-IS-STATUS-LOADED',
      SET_LOADING_ERROR = 'unfriendly-network/profile/SET-LOADING-ERROR',
      SET_IS_SUCCESS_RESPONSE = 'unfriendly-network/profile/SET-IS-SUCCESS-RESPONSE';

const initialState = {
    status: '',
    aboutMe: '',
    contacts: {},
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: '',
    photos: {
        small: '',
        large: ''
    },
    postsData: [
        {id: 0, message: `Hello, retard. You aren't welcome here.`, likesCount: 12},
        {id: 1, message: `If you are walking the first it's mean that everybody is walking behind.`, likesCount: 10},
        {id: 2, message: `There will be everything but not immediately.`, likesCount: 101},
        {id: 3, message: `When I was child the gods were happy and smiled to me. But after I became older and started working. That was the end of our friendship. They dont laugh any more and I'm as well.`, likesCount: 120},
        {id: 4, message: `I'm so happy to be here`, likesCount: 11}
    ],
    placeholderText: 'Enter your message',
    isProfileLoaded: false,
    isStatusLoaded: false,
    loadingError: {
        code: '',
        message: ''
    },
    isSuccessResponse: false
};

const profileReducer = (state = initialState, action) => {
    const type = action.type;

    switch(type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.newPostBody,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostBody: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                ...action.payload,
                contacts: {...action.payload.contacts},
                photos: {...action.payload.photos}
            }
        case SET_PROFILE_STATUS:
        case SET_IS_PROFILE_LOADED:
        case SET_IS_STATUS_LOADED:
        case SET_IS_SUCCESS_RESPONSE:
            return {
                ...state,
                ...action.payload
            }
        case SET_LOADING_ERROR:
            return {
                ...state,
                loadingError: {...state.loadingError, ...action.payload}
            }
        default:
            return state;
    }
}

export const setProfile = ({status, aboutMe, contacts, lookingForAJob,
    lookingForAJobDescription, fullName, userId, photos, error}) => (
        {type: SET_USER_PROFILE, payload: {status, aboutMe, contacts, error,
            lookingForAJob, lookingForAJobDescription, fullName, userId, photos}}
    );
export const addPost = (body) => ({type: ADD_POST, newPostBody: body});
export const changeUserStatus = (status) => ({type: SET_PROFILE_STATUS, payload: {status}});
export const setIsProfileLoaded = (isProfileLoaded) => ({type: SET_IS_PROFILE_LOADED, payload: {isProfileLoaded}});
export const setIsStatusLoaded = (isStatusLoaded) => ({type: SET_IS_STATUS_LOADED, payload: {isStatusLoaded}});
export const setLoadingError = (code, message) => ({type: SET_LOADING_ERROR, payload: {code, message}});
export const setIsSuccessResponse = (isSuccessResponse) => ({type: SET_IS_SUCCESS_RESPONSE, payload: {isSuccessResponse}});

export const showUserPage = userId => async dispatch => {
    dispatch(setIsProfileLoaded(false));
    dispatch(setIsStatusLoaded(false));
    dispatch(setLoadingError('', ''));
    try {
        const data = await getPage(`profile/${userId}`);
        dispatch(setProfile(data));
    } catch({response: {status, data: {message}}}) {
        dispatch(setLoadingError(status, message));
    }
    await dispatch(setIsProfileLoaded(true));
    const data = await getPage(`profile/status/${userId}`)
        dispatch(changeUserStatus(data));
        dispatch(setIsStatusLoaded(true));
}

export const applyNewStatus = body => async dispatch => {
    const {resultCode, messages} = await putData(`profile/status/`, {status: body});
    if (!resultCode) {
        dispatch(changeUserStatus(body));
    } else dispatch(setResponseWarning(`Some error: ${messages[0]}`));
}

export const saveUserInfoFormData = (data, setErrors) => async (dispatch, getState) => {
    const id = getState().auth.id;
    const {resultCode, messages} = await putData(`profile`, data);
    if (!resultCode) {
        dispatch(setIsSuccessResponse(true));
        dispatch(showUserPage(id));
    } else setErrors({responseWarning: `Some error:${messages.join(' ')}`});
}

export const saveNewUserPhoto = file => async (dispatch, getState) => {
    const id = getState().auth.id;
    const {resultCode, messages} = await profileAPI.updateUserImg('/profile/photo', file);
    if (!resultCode) {
        dispatch(showUserPage(id));
    } else dispatch(setResponseWarning(`Some error: ${messages[0]}`));
}

export default profileReducer;