import React from 'react';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../../assets/images/user-default-photo.jpg';

import s from './UserImg.module.sass';

const UserImg = ({isMyPage, src}) => {
    return (
        isMyPage
        ? <NavLink to='/settings' >
            <div className={s.userImgWrapper}>
                <img src={src ? src : userPhoto}  alt='user-img'></img>
            </div>
        </NavLink>
        : <div className={s.userImgWrapper}>
            <img src={src ? src : userPhoto}  alt='user-img'></img>
        </div>
    )
}

export default UserImg;