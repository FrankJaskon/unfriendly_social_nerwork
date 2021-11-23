import React, {useEffect, useState} from 'react';
import CustomButton from '../buttons/submit';

import s from './WarningField.module.sass';

const WarningField = ({children, hideFieldFunction, filedStyle}) => {

    const [timerId, setTimerId] = useState();

    const onClickSkip = () => {
        hideFieldFunction('');
        clearInterval(timerId);
    }

    useEffect(() => {
        if (children && hideFieldFunction) {
            setTimerId(setTimeout(onClickSkip, 3000));
        }
    }, [children]);

    let requestResponse = `${s.requestResponse} ${filedStyle}`;

    return children && <div className={requestResponse}>{children}
        {hideFieldFunction && <CustomButton wrapClassName={s.wrapperStyle} callbackOnClick={onClickSkip}>skip</CustomButton>}
    </div>
}

export default WarningField;