import React from 'react';
import CustomButton from '../../buttons/submit';


import s from './ErrorField.module.sass';

const ErrorField = ({serverResponse, setServerResponse}) => {

    const onClickSkip = () => {
        setServerResponse('');
    }

    return serverResponse && <div className={s.requestResponse}>{serverResponse}
        <CustomButton wrapClassName={s.wrapperStyle} callbackOnClick={onClickSkip}>skip</CustomButton>
    </div>
}

export default ErrorField;