import {queryAuth} from './auth-reducer';

const SET_INITIALIZATION = 'unfriendly-network/app/SET-INITIALIZATION';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    const type = action.type;

    switch (type) {
        case SET_INITIALIZATION:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setInitialization = (initialized) => ({type: SET_INITIALIZATION, payload: {initialized}});

export const initializeApp = () => async (dispatch) => {
    await dispatch(queryAuth());
    await dispatch(setInitialization(true));

}

export default appReducer;