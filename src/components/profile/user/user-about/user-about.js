import React, {useEffect, useState} from 'react';
import {stopChangingOnEscape} from '../../../common/helpers';
import ProfileData from './profile-data';
import ProfileDataForm from './profile-data-form';

// import s from './UserAbout.module.sass';

const UserAbout = (props) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const {setIsSuccessResponse, isSuccessResponse, lookingForAJob, lookingForAJobDescription} = props;

    useEffect(() => {
        if (isSuccessResponse) {
            setIsEditMode(false)
            setIsSuccessResponse(false);

        };
    }, [isSuccessResponse, setIsSuccessResponse]);

    const changeIsEditMode = (value) => {
        setIsEditMode(value);
    }

    const onEscapeSetEditModeFalse = (event) => {
        stopChangingOnEscape(event, isEditMode, changeIsEditMode);
    }

    const saveUserInfoFormDataWithId = (data, setErrors) => {
        props.saveUserInfoFormData({...data, userId : props.userId}, setErrors);
    }

    return !isEditMode
                ? <ProfileData lookingForAJob={lookingForAJob}
                    lookingForAJobDescription={lookingForAJobDescription}
                    changeIsEditMode={changeIsEditMode}
                    title='Professional info' />
                : <ProfileDataForm {...props}
                    saveUserInfoFormDataWithId={saveUserInfoFormDataWithId}
                    onEscapeSetEditModeFalse={onEscapeSetEditModeFalse}
                    changeIsEditMode={changeIsEditMode} />
}

export default UserAbout;