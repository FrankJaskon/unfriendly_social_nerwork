import React from 'react';
import MyPosts from './my-posts';
import User from './user';
import ProfileImg from './profile-img';

import s from './Profile.module.sass';

const Profile = ({profile: {postsData, newPostBody, placeholderText,
    aboutMe, contacts, lookingForAJob, lookingForAJobDescription,
    fullName, userId, photos: {large, small}}, addPost, isAuth, isMyPage}) => {

    return  <div className={s.profile__wrapper}>
        <ProfileImg />
        <User
            aboutMe={aboutMe}
            contacts={contacts}
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
            fullName={fullName}
            photo={large}
            userId={userId} />
        <MyPosts
            postsData={postsData}
            newPostBody={newPostBody}
            placeholderText={placeholderText}
            addPost={addPost}
            isAuth={isAuth}
            isMyPage={isMyPage} />
    </div>
}

export default Profile;

