import React from 'react';

import s from './Message.module.sass';

const DialogMessage = (props) => {
    const {id, name, message} = props;

    return (
        <div key={id} className={s.message}>
            <div className={s.user}>
                <div className={s.user__img}>

                </div>
                <p className={s.user__name}>
                    {name}
                </p>
            </div>
            <div className={s.message__text}>
                {message}
            </div>
        </div>
    )
}

export default DialogMessage;