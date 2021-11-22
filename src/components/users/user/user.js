import React from 'react';
import {NavLink} from 'react-router-dom';
import otherUsersPhoto from '../../../assets/images/icon-default-other-users.png';
import CustomButton from '../../common/buttons/submit/custom-button';
import DivWrapper from '../../common/finished-components/div-wrapper/diw-wrapper';

import s from './User.module.sass';

const User = ({isAuth, authId, userData: {name, id, followed, status, photos: {small}},
    clickOnSubscription, usersFollowingInProgress}) => {

    const onClickButton = (value) => {
        clickOnSubscription(id, value);
    }
    const isDisabled = usersFollowingInProgress.some(userId => userId === id) || !isAuth;

    return (
        <div className={s.userWrapper}>
            <DivWrapper className={s.userImgBtnWrapper} >
                <NavLink to={`/profile/${id}`}>
                    <div className={s.userImgWrap}>
                        <img src={small ? small : otherUsersPhoto}  alt='user-icon'></img>
                    </div>
                </NavLink>
                <div className={s.userBtnWrap}>
                    {id !== authId
                    ? <CustomButton isDisabled={isDisabled}
                        wrapClassName={s.wrapperStyle}
                        btnClassName={s.buttonStyle}
                        text={!followed ? 'Follow' : 'Unfollow'}
                        callbackOnClick={() => followed ? onClickButton(false) : onClickButton(true)} />
                    : null}
                </div>
            </DivWrapper>
            <DivWrapper className={s.userDescriptionsWrapper}>
                <div className={s.descriptionWrap}>
                    <div className={s.userNameAgeWrapper}>
                        <NavLink to={`/profile/${id}`} className={s.fullnameLink} >
                            <h3 className={s.fullname}>{name}</h3>
                        </NavLink>
                        <p className={s.userId}>{id}</p>
                    </div>
                    <div className={s.userStatus}>
                        {status}
                    </div>
                    <div className={s.userLocation}>
                    </div>
                </div>
            </DivWrapper>
        </div>
    )
}

export default User;


