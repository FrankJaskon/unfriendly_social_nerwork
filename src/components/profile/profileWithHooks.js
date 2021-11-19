import React, { useEffect } from 'react';
// import MyPosts from './my-posts';
import User from './user';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router';
import HOC from '../common/hoc';
import {getIsAuth, getMyId} from '../../redux/auth-selectors';
import {getIsMyPage, getIsPageLoaded, getLoadingError,
    getProfile, getServerResponse, getIsSuccessResponse} from '../../redux/profile-selectors';
import {setIsSuccessResponse, addPost, showUserPage, setLoadingError,
    saveUserInfoFormData, setServerResponse, saveNewUserPhoto} from '../../redux/profile-reducer';
// import ProfileImg from './profile-img';

import s from './Profile.module.sass';
import Preloader from '../common/preloader';

const Profile = ({setIsSuccessResponse, isSuccessResponse, saveNewUserPhoto, serverResponse, setServerResponse,
    profile: {postsData, newPostBody, placeholderText,
    aboutMe, contacts, lookingForAJob, lookingForAJobDescription,
    fullName, userId, photos: {large}},
    addPost, isAuth, isLoaded, isMyPage, showUserPage, saveUserInfoFormData,
    id, match: {params: {userId : urlId}}}) => {

    const pageId = urlId ? urlId : id;

    useEffect(() => {
        if (pageId) showUserPage(pageId);
        return setServerResponse('');
    }, [pageId, showUserPage, setServerResponse]);

    if (!pageId) return <Redirect to='/login' />;
    return  <div className={s.profile__wrapper}>
        {!isLoaded
            ? <Preloader />
            : <>
            {/* <ProfileImg /> */}
            <User
                aboutMe={aboutMe}
                contacts={contacts}
                lookingForAJob={lookingForAJob}
                lookingForAJobDescription={lookingForAJobDescription}
                fullName={fullName}
                photo={large}
                userId={userId}
                isMyPage={isMyPage}
                saveUserInfoFormData={saveUserInfoFormData}
                setServerResponse={setServerResponse}
                serverResponse={serverResponse}
                saveNewUserPhoto={saveNewUserPhoto}
                isSuccessResponse={isSuccessResponse}
                setIsSuccessResponse={setIsSuccessResponse} />
            {/* <MyPosts
                postsData={postsData}
                newPostBody={newPostBody}
                placeholderText={placeholderText}
                addPost={addPost}
                isAuth={isAuth}
                isMyPage={isMyPage} /> */}
            </>
        }
    </div>
};

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    isAuth: getIsAuth(state),
    id: getMyId(state),
    isLoaded: getIsPageLoaded(state),
    isMyPage: getIsMyPage(state),
    loadingError: getLoadingError(state),
    serverResponse: getServerResponse(state),
    isSuccessResponse: getIsSuccessResponse(state)
});


export default compose(
    connect(mapStateToProps, {setIsSuccessResponse, addPost, showUserPage, setLoadingError,
        saveUserInfoFormData, setServerResponse, saveNewUserPhoto}),
    withRouter,
    HOC.showPageErrorWrapperComponent
)(Profile);

// setLoadingError is used for HOC.showPageErrorWrapperComponent