import React from 'react';
import {NavLink} from 'react-router-dom';
import otherUsersPhoto from '../../../assets/images/icon-default-other-users.png';
import ButtonSubmit from '../../common/buttons/submit/button-submit';

import s from './User.module.sass';

const User = ({authId, userData: {name, id, followed, status, photos: {small}},
    clickOnSubscription, usersFollowingInProgress}) => {

    const onClickButton = (value) => {
        clickOnSubscription(id, value);
    }
    const getButton = () => {
        const isDisabled = usersFollowingInProgress.some(userId => userId === id);
        if (followed) {
            return <ButtonSubmit isDisabled={isDisabled}
                wrapClassName={s.wrapperStyle} text={'Unfollow'} callbackOnClick={() => onClickButton(false)} />
        } else return <ButtonSubmit isDisabled={isDisabled}
        wrapClassName={s.wrapperStyle} text={'Follow'} callbackOnClick={() => onClickButton(true)} />
    }
    return (
        <div className={s.userWrapper}>
            <div className={s.userImgBtnWrapper} >
                <NavLink to={`/profile/${id}`}>
                    <div className={s.userImgWrap}>
                        <img src={small ? small : otherUsersPhoto}  alt='user-icon'></img>
                    </div>
                </NavLink>
                <div className={s.userBtnWrap}>
                    {id !== authId ? getButton() : null}
                </div>
            </div>
            <div className={s.userDescriptionsWrapper}>
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
            </div>
        </div>
    )
}

export default User;


