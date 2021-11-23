import React from 'react';
import CustomButton from '../buttons/submit';

import s from './WarningField.module.sass';

const WarningField = ({children, hideFieldFunction, filedStyle}) => {

    const onClickSkip = () => {
        hideFieldFunction('');
    }

    let requestResponse = `${s.requestResponse} ${filedStyle}`;

    return children && <div className={requestResponse}>{children}
        {hideFieldFunction && <CustomButton wrapClassName={s.wrapperStyle} callbackOnClick={onClickSkip}>skip</CustomButton>}
    </div>
}

export default WarningField;