import React from 'react';
import ProfileStatus from '../../status';

import s from './UserAbout.module.sass';

const UserAbout = (props) => {
    const {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, webSites} = props;

    let i = 0;

    const userWebSites = webSites.filter(w => w.length > 0)
        .map(w => (<li key={i++} className={s.webSite}>{`${w}/`}</li>));

    return (
        <div className={s.user__about}>
            <div className={s.userNameWithStatus}>
                <h3 className={s.user__name}>
                    {fullName}
                </h3>
                <ProfileStatus />
            </div>
            <h3 className={s.user__title}>User about:</h3>
            <div className={s.user__description}>
                <p className={s['user__item-about']}>Working status:
                    {lookingForAJob ? ' looking for' : ' not looking for'}</p>
                <p className={s['user__item-about']}>Descriptions: {lookingForAJobDescription} </p>
                <p className={s['user__item-about']}>About me: {aboutMe}</p>
                <ul className={s['user__item-about']}>
                    <p className={s['user__item-about']}>Contact me:</p>{userWebSites}</ul>
            </div>
        </div>
    )
}

export default UserAbout;