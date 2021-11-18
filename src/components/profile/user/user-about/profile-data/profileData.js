import React from 'react';
import CustomButton from '../../../../common/buttons/submit/custom-button';

import s from '../UserAbout.module.sass';

const ProfileData = ({title, lookingForAJob = null, lookingForAJobDescription,
    aboutMe, contacts, changeIsEditMode, wrapperInfoClassName, itemInfoClass, contactsWrapperInfoClass}) => {

    let wrapperClass = `${s.user__about} ${wrapperInfoClassName}`;
    let itemClass = `${s['user__item-about']} ${itemInfoClass}`;
    let contactsWrapperClass = `${s['user__item-contact']} ${contactsWrapperInfoClass}`;

    return <div className={wrapperClass}>
            {title && <h3 className={s.user__title}><b>{title}</b></h3>}
            {lookingForAJob !== null && <p className={itemClass}><b>Working status:</b>
                {lookingForAJob ? ' looking for' : ' not looking for'}</p>}
            {lookingForAJobDescription
                && <p className={itemClass}><b>My skills: </b> {lookingForAJobDescription} </p>}
            {aboutMe && <p className={itemClass}><b>About me:</b> {aboutMe}</p>}
            {contacts && <div className={contactsWrapperClass}><div><b>My contacts: </b></div>
                {Object.keys(contacts).map(key => contacts[key]
                    ? <Contact key={key} contactKey={key} contactValue={contacts[key]}/>
                    :null)}
            </div>}
            {changeIsEditMode && <CustomButton text='Change data'
                wrapClassName={s.wrapperStyle}
                callbackOnClick={() => changeIsEditMode(true)} />}
        </div>
}

const Contact = ({contactKey, contactValue}) => {
    return <div className={s['user__item-about-link']}><a href={contactValue}>{contactKey}</a></div>
}

export default ProfileData;