import React from 'react';

import s from './CustomButton.module.sass';

// stylesBtn = {}, stylesWrapper = {} text = string, callbackOnClick = callback;

// For example //

//<CustomButton stylesBtn={{width: '80px', height: '40px'}}
//    stylesWrapper={{display: 'flex', justifyContent: 'end', padding: '1rem'}}
//    text={'Send'} callbackOnClick={onAddMessage} />

const CustomButton = ({type, wrapClassName = '', btnClassName = '', text, callbackOnClick, isDisabled, children}) => {
// const CustomButton = ({stylesBtn, stylesWrapper, text, callbackOnClick, isDisabled, className}) => {
    let wrapperClass = `${s.button__wrap} ${wrapClassName}`;
    let btnClass = `${s.button__submit} ${btnClassName}`;

    return (
        // <div className={s.button__wrap} style={stylesWrapper}>
        <div className={wrapperClass} >
            <button
                disabled={isDisabled}
                type={type ? type : 'submit'}
                // className={s.button__submit}
                className={btnClass}
                onClick={callbackOnClick} >
                {text || children}
            </button>
        </div>
    )
}

export default CustomButton;