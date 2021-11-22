import classNames from 'classnames';
import React from 'react';

import s from './CustomButton.module.sass';

const CustomButton = ({type, wrapClassName = '', btnClassName = '', text, callbackOnClick, isDisabled, children}) => {
    return (
        <div className={classNames(s.button__wrap, wrapClassName)} >
            <button
                disabled={isDisabled}
                type={type || 'submit'}
                className={classNames(s.button__submit, btnClassName)}
                onClick={callbackOnClick} >
                {text || children}
            </button>
        </div>
    )
}

export default CustomButton;