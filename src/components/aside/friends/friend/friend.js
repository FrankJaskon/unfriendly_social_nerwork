import userPhoto from '../../../../assets/images/icon-default-other-users.png';

import React from 'react';

import s from './Friend.module.sass';

const Friend = (props) => {
    const {name} = props;
    return (
        <div className={s.friend}>
            <div className={s.friend__img}>
                <img src={userPhoto}  alt='user-icon'></img>
            </div>
            <h3 className={s.friend__name}>
                {name}
            </h3>
        </div>
    )
}

export default Friend;