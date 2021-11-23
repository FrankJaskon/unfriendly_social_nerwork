import classNames from 'classnames';
import React from 'react';
import CustomButton from '../submit';

import s from './TwoButtons.module.sass';

const TwoButtons = ({wrapClassName, onCancel, onSave}) => {
    return <div className={classNames(s.wrapper, wrapClassName)}>
        <CustomButton type='button' callbackOnClick={onCancel} btnClassName={s.cancelButton}>Cancel</CustomButton>
        <CustomButton callbackOnClick={onSave ? onSave : () => {}}>Save</CustomButton>
    </div>
}

export default TwoButtons;