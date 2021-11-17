import React from 'react';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../../../assets/images/user-default-photo.jpg';
import CustomButton from '../../../common/buttons/submit/custom-button';

import s from './UserImg.module.sass';

const UserImg = ({isMyPage, src}) => {
    return <div className={s.userPhotoWrapper}>
        {isMyPage
        ? <>
            <NavLink to='/settings' >
                <div className={s.imgWrapper}>
                    <img src={src ? src : userPhoto}  alt='user-img'></img>
                </div>
            </NavLink>
            <CustomButton wrapClassName={s.wrapperStyle}>Change photo</CustomButton>
        </>
        : <div className={s.imgWrapper}>
            <img src={src ? src : userPhoto}  alt='user-img'></img>
        </div>}
    </div>
}

export default UserImg;