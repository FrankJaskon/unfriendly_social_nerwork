import React from 'react';
import {Field, withFormik} from 'formik';
import CustomButton from '../../../../common/buttons/submit/custom-button';
import WarningField from '../../../../common/warning-field';
import DivWrapper from '../../../../common/finished-components/div-wrapper';
// import {validateTextFieldCreator} from '../../../../common/validators';

import s from '../UserAbout.module.sass';

const checkbox = `${s.statusInput} ${s.checkbox}`;

const DataForm = React.memo(({onEscapeSetEditModeFalse, setIsEditMode, contacts,
    values, touched, errors, handleChange, handleBlur, handleSubmit}) => {

    return <form onSubmit={handleSubmit} onKeyDown={(e) => onEscapeSetEditModeFalse(e)}>
        <DivWrapper className={s.userInfoForm}>
    {/* return <form className={s.userInfoForm} onSubmit={handleSubmit} onKeyDown={(e) => onEscapeSetEditModeFalse(e)}> */}
        <h3 className={s.user__title}>User about</h3>
        <div className={s.user__description}>
            <label name='fullName' className={s['user__item-about']}>Full name:</label>
            <div>
                <Field className={s.statusInput}
                // validate={validateTextFieldCreator(50)}
                name='fullName'
                id='fullName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName || ''} ></Field>
                {errors.fullName && touched.fullName && <div id="feedback">{errors.fullName}</div>}
            </div>
            <label name='lookingForAJob' className={s['user__item-about']}>Looking for a job?</label>
            <Field className={checkbox}
                type='checkbox'
                name='lookingForAJob' ></Field>
            <label name='lookingForAJobDescription' className={s['user__item-about']}>My skills:</label>
            <div>
                <Field className={s.statusInput}
                // validate={validateTextFieldCreator(50)}
                name='lookingForAJobDescription'
                id='lookingForAJobDescription'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJobDescription || ''} ></Field>
                {errors.lookingForAJobDescription && touched.lookingForAJobDescription
                    && <div id="feedback">{errors.lookingForAJobDescription}</div>}
            </div>
            <label name='aboutMe' className={s['user__item-about']}>About me:</label>
            <div>
                <Field className={s.statusInput}
                // validate={validateTextFieldCreator(50)}
                name='aboutMe'
                id='aboutMe'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aboutMe || ''} ></Field>
                {errors.aboutMe && touched.aboutMe && <div id="feedback">{errors.aboutMe}</div>}
            </div>
            {Object.keys(contacts).map(key => <FormContactField key={key}
                contactKey={key}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.contacts[key]}
                touched={touched}
                errors={errors} />)}
            {errors.serverResponse && <WarningField className={s.requestResponse}
                filedStyle={s.filedStyle} >
                {errors.serverResponse}
            </WarningField>}
        <CustomButton wrapClassName={s.cancelWrapperStyle}
            type='button' callbackOnClick={() => setIsEditMode(false)}>Cancel</CustomButton>
        <CustomButton wrapClassName={s.saveWrapperStyle} type='submit'>Save</CustomButton>
        </div>
        </DivWrapper>
    </form>
});

const FormContactField = React.memo(({contactKey, handleChange, handleBlur, value, errors, touched}) => {
    return <>
        <label name={contactKey} className={s['user__item-about']}>{`${contactKey}: `}</label>
        <div>
            <Field className={s.statusInput}
            // validate={validateTextFieldCreator(50)}
            name={`contacts.${contactKey}`}
            placeholder={contactKey}
            id={contactKey}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value} ></Field>
            {errors.aboutMe && touched.aboutMe && <div id="feedback">{errors.aboutMe}</div>}
        </div>
    </>
});

const ProfileDataForm = withFormik({
    mapPropsToValues: ({fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts}) => {
        const newContacts = {};
        Object.keys(contacts).map(key => newContacts[key] = contacts[key] || '');
        return ({fullName,
                lookingForAJob,
                lookingForAJobDescription,
                aboutMe,
                contacts: {...newContacts}})
    },
    handleSubmit: (values, {setErrors, props: {saveUserInfoFormDataWithId}}) => {
        saveUserInfoFormDataWithId(values, setErrors);
    },
    displayName: 'UserInfoForm'
})(DataForm);

export default ProfileDataForm;