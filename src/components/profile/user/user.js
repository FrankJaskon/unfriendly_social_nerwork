import React from 'react';
import UserAbout from './user-about';
import UserNameWithStatus from './user-about/user-name-with-status';
import UserImg from './user-img';

import s from './User.module.sass';

const User = ({saveUserInfoFormData, userId, aboutMe, contacts, lookingForAJob,
    lookingForAJobDescription, fullName, photo, isMyPage
}) => {
    return (
        <div className={s.user}>
            <UserImg
                src={photo}
                isMyPage={isMyPage} />
            <UserNameWithStatus fullName={fullName} />
            <UserAbout
                saveUserInfoFormData={saveUserInfoFormData}
                fullName={fullName}
                lookingForAJob={lookingForAJob}
                lookingForAJobDescription={lookingForAJobDescription}
                aboutMe={aboutMe}
                contacts={contacts}
                isMyPage={isMyPage}
                userId={userId} />
        </div>
    )
}

export default User;