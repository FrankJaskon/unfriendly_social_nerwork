import {queryAuth} from './auth-reducer';

const SET_INITIALIZATION = 'unfriendly-network/app/SET-INITIALIZATION',
    SET_SERVER_RESPONSE = 'unfriendly-network/app/SET-SERVER-RESPONSE';

const initialState = {
    initialized: false,
    responseWarning: ''
};

const appReducer = (state = initialState, action) => {
    const type = action.type;

    switch (type) {
        case SET_INITIALIZATION:
        case SET_SERVER_RESPONSE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setInitialization = (initialized) => ({type: SET_INITIALIZATION, payload: {initialized}});
export const setResponseWarning = (responseWarning) => ({type: SET_SERVER_RESPONSE, payload: {responseWarning}});

export const initializeApp = () => async dispatch => {
    await dispatch(queryAuth());
    await dispatch(setInitialization(true));

}

export default appReducer;