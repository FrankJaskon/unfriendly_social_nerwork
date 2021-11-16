import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getIsMyPage, getUserStatus} from '../../../redux/profile-selectors';
import {validateTextFieldCreator} from '../../common/validators';
import {changeUserStatus, applyNewStatus} from '../../../redux/profile-reducer';
import {stopChangingOnEscape} from '../../common/helpers';
import CustomButton from '../../common/buttons/submit/custom-button';

import s from './Status.module.sass';

const maxLength = validateTextFieldCreator(300);

const ProfileStatus = React.memo(({status, isMyPage, applyNewStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [statusBody, setStatusBody] = useState(status);

    useEffect(() => {
        setStatusBody(status);
    }, [status]);

    const onClickEditMode = () => {
        if (isMyPage) setEditMode(true);
    }

    const onExitEditMode = () => {
        setEditMode(false);
    }

    const onChangeInput = ({target}) => {
        setStatusBody(target.value);
    }

    const onSetNewStatus = (event) => {
        event.preventDefault();

        const error = maxLength(statusBody);
            if (!error) {
                if (statusBody !== status) {
                    setEditMode(false);
                    applyNewStatus(statusBody);
                } else alert('Oops, some problem. New status cannot equal the old status');
            } else alert(error);
    }

    return (
        <div className={s.wrapper}>
            <form className={s.statusField} onSubmit={onSetNewStatus}>
            {editMode ?
                <><input className={s.statusInput}
                    autoFocus
                    name='status'
                    id='status'
                    value={statusBody}
                    onKeyDown={(e) => stopChangingOnEscape(e, editMode, setEditMode)}
                    onBlur={onExitEditMode}
                    onChange={onChangeInput} ></input>
                </>
                : <div className={s.statusField}
                    onDoubleClick={onClickEditMode}>{status ? status : 'User has no status'}</div>}
            </form>
            <CustomButton wrapClassName={s.wrapperStyle}
                callbackOnClick={() => 'setIsEditMode(true)'}>Change status</CustomButton>
        </div>
    )
});

const mapStateToProps = (state) => ({
    status: getUserStatus(state),
    isMyPage: getIsMyPage(state)
});

export default compose(
    connect(mapStateToProps, {changeUserStatus, applyNewStatus})
)(ProfileStatus);
