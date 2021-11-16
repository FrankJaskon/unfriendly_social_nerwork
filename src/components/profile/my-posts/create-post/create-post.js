import React from 'react';
import CustomButton from '../../../common/buttons/submit/custom-button';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {validateTextFieldCreator} from '../../../common/validators';

import s from './CreatePost.module.sass';

const validateTextField = validateTextFieldCreator(200);

const CreatePost = React.memo(({isAuth, isMyPage, placeholderText, addPost}) => {

    const isDisabled = isAuth ? false : true;

    return <Formik initialValues={{
                newPostBody: '',
            }}
            onSubmit={({newPostBody}, actions) => {
                addPost(newPostBody);
                actions.resetForm();
        }} >
        {
            ({values,
                errors,
                touched,
                handleChange,
                handleSubmit}) => <Form className={s['create-post']} onSubmit={handleSubmit} >
                <h3 className={s['create-post__title title']}>
                    {isMyPage ? 'My post' : 'Send post'}
                </h3>
                <div className={s['create-post__input_wrap']}
                    style={errors.newPostBody && touched.newPostBody ? {border: '2px solid #ff0000'} : {}} >
                    <Field
                        validate={validateTextField}
                        className={s['create-post__input']}
                        type='text'
                        placeholder={isAuth ? placeholderText : 'You cannot post any comments if you are not logged in.'}
                        id='newPostBody'
                        name='newPostBody'
                        onChange={handleChange}
                        value={values.newPostBody}
                        disabled={isDisabled} />
                        <ErrorMessage className={s.error} name='newPostBody' component='div' />
                </div>
                <CustomButton
                    isDisabled={isDisabled}
                    btnClassName={s.btnStyle}
                    wrapClassName={s.wrapperStyle}
                    text={'Send'} />
            </Form>
        }
    </Formik>
});

export default CreatePost;