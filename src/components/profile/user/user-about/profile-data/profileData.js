import React from 'react';

import s from '../UserAbout.module.sass';

const ProfileData = ({lookingForAJob, lookingForAJobDescription, aboutMe, contacts}) => {
    return <div className={s.user__about}>
            <h3 className={s.user__title}><b>User about</b></h3>
            <div className={s.user__description}>
                <p className={s['user__item-about']}><b>Working status:</b>
                    {lookingForAJob ? ' looking for' : ' not looking for'}</p>
                <p className={s['user__item-about']}><b>Descriptions:</b> {lookingForAJobDescription} </p>
                <p className={s['user__item-about']}><b>About me:</b> {aboutMe}</p>
                <div className={s['user__item-contact']}><div><b>Contact me: </b></div>
                    {Object.keys(contacts).map(key => contacts[key]
                        ? <Contact key={key} contactKey={key} contactValue={contacts[key]}/>
                        :null)}
                </div>
            </div>
        </div>
}

const Contact = ({contactValue}) => {
    return <div className={s['user__item-about-link']}><a href={contactValue}>{contactValue}</a></div>
}

export default ProfileData;