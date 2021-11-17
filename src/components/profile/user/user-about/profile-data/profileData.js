import React from 'react';
import CustomButton from '../../../../common/buttons/submit/custom-button';

import s from '../UserAbout.module.sass';

const ProfileData = ({title, lookingForAJob = null, lookingForAJobDescription,
    aboutMe, contacts, changeIsEditMode, wrapperInfoClassName}) => {

    let wrapperClass = `${s.user__about} ${wrapperInfoClassName}`;

    return <div className={wrapperClass}>
            {title && <h3 className={s.user__title}><b>{title}</b></h3>}
            <div className={s.user__description}>
                {lookingForAJob !== null && <p className={s['user__item-about']}><b>Working status:</b>
                    {lookingForAJob ? ' looking for' : ' not looking for'}</p>}
                {lookingForAJobDescription
                    && <p className={s['user__item-about']}><b>My skills: </b> {lookingForAJobDescription} </p>}
                {aboutMe && <p className={s['user__item-about']}><b>About me:</b> {aboutMe}</p>}
                {contacts && <div className={s['user__item-contact']}><div><b>Contact me: </b></div>
                    {Object.keys(contacts).map(key => contacts[key]
                        ? <Contact key={key} contactKey={key} contactValue={contacts[key]}/>
                        :null)}
                </div>}
            </div>
            {changeIsEditMode && <CustomButton text='Change data'
                wrapClassName={s.wrapperStyle}
                callbackOnClick={() => changeIsEditMode(true)} />}
        </div>
}

const Contact = ({contactKey, contactValue}) => {
    return <div className={s['user__item-about-link']}><a href={contactValue}>{contactKey}</a></div>
}

export default ProfileData;