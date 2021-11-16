import React from 'react';
import {Field, withFormik} from 'formik';
import CustomButton from '../../../../common/buttons/submit/custom-button';
// import {validateTextFieldCreator} from '../../../../common/validators';

import s from '../UserAbout.module.sass';

const DataForm = ({onEscapeSetEditModeFalse, setIsEditMode, contacts,
    values, touched, errors, handleChange, handleBlur, handleSubmit}) => {

    return <form onSubmit={handleSubmit} onKeyDown={(e) => onEscapeSetEditModeFalse(e)}>
        <h3 className={s.user__title}>User about:</h3>
        <div className={s.user__description}>
            <label name='fullName' className={s['user__item-about']}>Full name:</label>
            <Field className={s.statusInput}
                autoFocus
                // validate={validateTextFieldCreator(50)}
                name='fullName'
                id='fullName'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName || ''} ></Field>
            {errors.fullName && touched.fullName && <div id="feedback">{errors.fullName}</div>}
            <label name='lookingForAJob' className={s['user__item-about']}>Looking for a job?</label>
            <Field className={s.statusInput}
                type='checkbox'
                name='lookingForAJob' ></Field>
            <label name='lookingForAJobDescription' className={s['user__item-about']}>Descriptions:</label>
            <Field className={s.statusInput}
                // validate={validateTextFieldCreator(50)}
                name='lookingForAJobDescription'
                id='lookingForAJobDescription'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJobDescription || ''} ></Field>
            {errors.lookingForAJobDescription && touched.lookingForAJobDescription
            && <div id="feedback">{errors.lookingForAJobDescription}</div>}
            <label name='aboutMe' className={s['user__item-about']}>About me:</label>
            <Field className={s.statusInput}
                // validate={validateTextFieldCreator(50)}
                name='aboutMe'
                id='aboutMe'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aboutMe || ''} ></Field>
            {errors.aboutMe && touched.aboutMe && <div id="feedback">{errors.aboutMe}</div>}
            {Object.keys(contacts).map(key => <FormContactField key={key}
                contactKey={key}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.contacts[key]}
                touched={touched}
                errors={errors} />)}
        </div>
        <CustomButton type='submit'>Save</CustomButton>
        <CustomButton type='button' callbackOnClick={() => setIsEditMode(false)}>Cancel</CustomButton>
    </form>
}

const FormContactField = React.memo(({contactKey, handleChange, handleBlur, value, errors, touched}) => {
    return <>
    <label name={contactKey} className={s['user__item-about']}>{`${contactKey}: `}</label>
    <Field className={s.statusInput}
        // validate={validateTextFieldCreator(50)}
        name={`contacts.${contactKey}`}
        id={contactKey}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value} ></Field>
    {errors.aboutMe && touched.aboutMe && <div id="feedback">{errors.aboutMe}</div>}
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
        contacts: {...newContacts}})},
    handleSubmit: (values, {props: {saveUserInfoFormData}}) => {
        saveUserInfoFormData(values);
    },

    displayName: 'BasicForm',
})(DataForm);

export default ProfileDataForm;