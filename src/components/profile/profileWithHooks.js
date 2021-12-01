import React, { useEffect } from 'react';
import MyPosts from './my-posts';
import User from './user';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router';
import HOC from '../common/hoc';
import {getIsAuth, getMyId} from '../../redux/auth-selectors';
import {setResponseWarning} from '../../redux/app-reducer';
import {getResponseWarning} from '../../redux/app-selectors';
import {getIsMyPage, getIsPageLoaded, getLoadingError,
    getProfile, getIsSuccessResponse} from '../../redux/profile-selectors';
import {setIsSuccessResponse, addPost, showUserPage, setLoadingError,
    saveUserInfoFormData, saveNewUserPhoto} from '../../redux/profile-reducer';
// import ProfileImg from './profile-img';

import s from './Profile.module.sass';
import Preloader from '../common/preloader';

const Profile = ({setIsSuccessResponse,
    isSuccessResponse, saveNewUserPhoto, responseWarning,
    setResponseWarning, profile: {postsData, newPostBody,
    placeholderText, aboutMe, contacts, lookingForAJob,
    lookingForAJobDescription, fullName, userId, photos: {large}},
    addPost, isAuth, isLoaded, isMyPage, showUserPage,
    saveUserInfoFormData, id, match: {params: {userId : urlId}}}) => {

    const pageId = urlId ? urlId : id;

    useEffect(() => {
        if (pageId) showUserPage(pageId);
        return setResponseWarning('');
    }, [pageId, showUserPage, setResponseWarning]);

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
                setResponseWarning={setResponseWarning}
                responseWarning={responseWarning}
                saveNewUserPhoto={saveNewUserPhoto}
                isSuccessResponse={isSuccessResponse}
                setIsSuccessResponse={setIsSuccessResponse} />
            <MyPosts
                userId={userId}
                postsData={postsData}
                newPostBody={newPostBody}
                placeholderText={placeholderText}
                addPost={addPost}
                isAuth={isAuth}
                isMyPage={isMyPage} />
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
    responseWarning: getResponseWarning(state),
    isSuccessResponse: getIsSuccessResponse(state)
});


export default compose(
    connect(mapStateToProps, {setIsSuccessResponse, addPost, showUserPage, setLoadingError,
        saveUserInfoFormData, setResponseWarning, saveNewUserPhoto}),
    withRouter,
    HOC.showPageErrorWrapperComponent
)(Profile);

// setLoadingError is only used for HOC.showPageErrorWrapperComponent