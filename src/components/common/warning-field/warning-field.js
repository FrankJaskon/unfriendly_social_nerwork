import React from 'react';
import CustomButton from '../buttons/submit';

import s from './WarningField.module.sass';

const WarningField = ({children, hideFieldFunction, filedStyle}) => {

    let requestResponse = `${s.requestResponse} ${filedStyle}`;

    const onClickSkip = () => {
        hideFieldFunction('');
    }

    return children && <div className={requestResponse}>{children}
        {hideFieldFunction && <CustomButton wrapClassName={s.wrapperStyle} callbackOnClick={onClickSkip}>skip</CustomButton>}
    </div>
}

export default WarningField;