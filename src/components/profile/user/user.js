import React from 'react';
import WarningField from '../../common/warning-field';
import UserAbout from './user-about';
import ProfileData from './user-about/profile-data';
import UserNameWithStatus from './user-about/user-name-with-status';
import UserImg from './user-img';

import s from './User.module.sass';

const User = ({setIsSuccessResponse, isSuccessResponse, setServerResponse, saveNewUserPhoto, serverResponse,
    saveUserInfoFormData, userId, aboutMe, contacts, lookingForAJob,
    lookingForAJobDescription, fullName, photo, isMyPage
}) => {
    return (
        <div className={s.user}>
            <WarningField hideFieldFunction={setServerResponse}>{serverResponse}</WarningField>
            <div className={s.userHeader}>
                <UserImg
                    src={photo}
                    isMyPage={isMyPage}
                    saveNewUserPhoto={saveNewUserPhoto} />
                <div className={s.infoPartOfUserHeader}>
                    <UserNameWithStatus fullName={fullName} setServerResponse={setServerResponse} />
                    <ProfileData aboutMe={aboutMe}
                        contacts={contacts}
                        wrapperInfoClassName={s.wrapperInfoStyle}
                        itemInfoClass={s.userItemAbout}
                        contactsWrapperInfoClass={s.contactsWrapperInfoClass} />
                </div>
            </div>
            <UserAbout
                saveUserInfoFormData={saveUserInfoFormData}
                fullName={fullName}
                lookingForAJob={lookingForAJob}
                lookingForAJobDescription={lookingForAJobDescription}
                aboutMe={aboutMe}
                contacts={contacts}
                isMyPage={isMyPage}
                userId={userId}
                serverResponse={serverResponse}
                isSuccessResponse={isSuccessResponse}
                setIsSuccessResponse={setIsSuccessResponse} />
        </div>
    )
}

export default User;