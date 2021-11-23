import {queryAuth} from './auth-reducer';

const SET_INITIALIZATION = 'unfriendly-network/app/SET-INITIALIZATION',
    SET_SERVER_RESPONSE = 'unfriendly-network/app/SET-SERVER-RESPONSE',
    SET_TIMER_ID = 'unfriendly-network/app/SET-TIMER-ID';

const initialState = {
    initialized: false,
    responseWarning: '',
    timerId: null
};

const appReducer = (state = initialState, action) => {
    const type = action.type;

    switch (type) {
        case SET_INITIALIZATION:
        case SET_SERVER_RESPONSE:
        case SET_TIMER_ID:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setInitialization = initialized => ({type: SET_INITIALIZATION, payload: {initialized}});
export const setWarning = responseWarning => ({type: SET_SERVER_RESPONSE, payload: {responseWarning}});
export const setTimerId = timerId => ({type: SET_TIMER_ID, payload: {timerId}});

export const initializeApp = () => async dispatch => {
    await dispatch(queryAuth());
    await dispatch(setInitialization(true));

}

export const setResponseWarning = responseWarning => (dispatch, getState) => {

    const id = getState().app.timerId;

    if (responseWarning && !getState().app.timerId) {
        dispatch(setWarning(responseWarning));
        dispatch(setTimerId(setTimeout(() => {
            dispatch(setWarning(''));
            clearTimeout(id);
            dispatch(setTimerId(null));
        }, 4000)));
    } else if (!responseWarning && getState().app.timerId) {
        dispatch(setWarning(responseWarning));
        clearTimeout(id);
        dispatch(setTimerId(null));
    }
}

export default appReducer;