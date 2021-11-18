import React, {useState} from 'react';
import {stopChangingOnEscape} from '../../../common/helpers';
import ProfileData from './profile-data';
import ProfileDataForm from './profile-data-form';

// import s from './UserAbout.module.sass';

const UserAbout = (props) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const {lookingForAJob, lookingForAJobDescription} = props;

    const changeIsEditMode = (value) => {
        setIsEditMode(value);
    }

    const onEscapeSetEditModeFalse = (event) => {
        stopChangingOnEscape(event, isEditMode, changeIsEditMode);
    }


    const saveUserInfoFormData = (data) => {
        props.saveUserInfoFormData({...data, userId : props.userId});
    }

    return !isEditMode
                ? <ProfileData lookingForAJob={lookingForAJob}
                    lookingForAJobDescription={lookingForAJobDescription}
                    changeIsEditMode={changeIsEditMode}
                    title='Professional info' />
                : <ProfileDataForm {...props}
                    saveUserInfoFormData={saveUserInfoFormData}
                    onEscapeSetEditModeFalse={onEscapeSetEditModeFalse}
                    changeIsEditMode={changeIsEditMode} />
}

export default UserAbout;