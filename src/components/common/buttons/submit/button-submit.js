import React from 'react';

import s from './ButtonSubmit.module.sass';

// stylesBtn = {}, stylesWrapper = {} text = string, callbackOnClick = callback;

// For example //

//<ButtonSubmit stylesBtn={{width: '80px', height: '40px'}}
//    stylesWrapper={{display: 'flex', justifyContent: 'end', padding: '1rem'}}
//    text={'Send'} callbackOnClick={onAddMessage} />

const ButtonSubmit = ({wrapClassName = '', btnClassName = '', text, callbackOnClick, isDisabled, className}) => {
// const ButtonSubmit = ({stylesBtn, stylesWrapper, text, callbackOnClick, isDisabled, className}) => {
    let wrapperClass = `${s.button__wrap} ${wrapClassName}`;
    let btnClass = `${s.button__submit} ${btnClassName}`;

    return (
        // <div className={s.button__wrap} style={stylesWrapper}>
        <div className={wrapperClass} >
            <button
                disabled={isDisabled}
                type='submit'
                // className={s.button__submit}
                className={btnClass}
                onClick={callbackOnClick} >
                {text}
            </button>
        </div>
    )
}

export default ButtonSubmit;