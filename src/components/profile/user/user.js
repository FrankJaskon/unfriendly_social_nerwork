import React from 'react';
import UserAbout from './user-about';
import UserImg from './user-img';

import s from './User.module.sass';

const User = ({aboutMe, contacts, lookingForAJob,
    lookingForAJobDescription, fullName, photo, isMyPage
}) => {
    const showWebSites = (websites) => {
        return Object.values(websites)
        .filter(w => { return w !== null
        })
    }
    return (
        <div className={s.user}>
            <UserImg
                src={photo}
                isMyPage={isMyPage} />
            <UserAbout
                fullName={fullName}
                lookingForAJob={lookingForAJob}
                lookingForAJobDescription={lookingForAJobDescription}
                aboutMe={aboutMe}
                webSites={showWebSites(contacts)} />
        </div>
    )
}

export default User;