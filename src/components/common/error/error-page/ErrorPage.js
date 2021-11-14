import React from 'react';
import imgSrc from '../../../../assets/images/error400.png';

import s from './ErrorPage.module.sass';

const ErrorPage = ({loadingError: {code, message}}) => {
    return <div className={s.mainWrapper}>
        <div className={s.additionalWrapper1}>
            <div className={s.additionalWrapper2}>
                <div className={s.errorWrapper}>
                    <h3 className={s.errorTitle}>Error {code}</h3>
                    <p className={s.errorDescription}>{message}</p>
                </div>
                <div className={s.imgWrapper}>
                    <img src={imgSrc} alt='' />
                </div>
            </div>
            <p className={s.additionalTitle}>Oh you. What have you done?</p>
        </div>
    </div>
}

export default ErrorPage;
