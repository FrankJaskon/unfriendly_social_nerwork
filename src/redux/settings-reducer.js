import {settingsAPI} from '../components/api/api';

const initialState = {
};

const settingsReducer = (state = initialState, action) => {
    const type = action.type;

    switch (type) {
        default:
            return state;
    }
}

export const sendFile = async (file) => {
    const {resultCode, messages} = await settingsAPI.updateImg('/profile/photo', file);
        if (!resultCode) {
            console.log('User photo was changed')
        } else console.log(messages[0]);
}

export default settingsReducer;