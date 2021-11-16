import React, {useState} from 'react';
import CustomButton from '../../../common/buttons/submit/custom-button';
import {stopChangingOnEscape} from '../../../common/helpers';
import ProfileData from './profile-data';
import ProfileDataForm from './profile-data-form';

import s from './UserAbout.module.sass';

const UserAbout = (props) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const onEscapeSetEditModeFalse = (event) => {
        stopChangingOnEscape(event, isEditMode, setIsEditMode);
    }

    const saveUserInfoFormData = (data) => {
        data.userId = props.userId;
        props.saveUserInfoFormData(data);
    }

    return !isEditMode
                ? <><ProfileData {...props} />
                {props.isMyPage && <CustomButton text='Change data'
                wrapClassName={s.wrapperStyle}
                callbackOnClick={() => setIsEditMode(true)} />}</>
                : <ProfileDataForm {...props}
                saveUserInfoFormData={saveUserInfoFormData}
                onEscapeSetEditModeFalse={onEscapeSetEditModeFalse}
                setIsEditMode={setIsEditMode}/>
}

export default UserAbout;