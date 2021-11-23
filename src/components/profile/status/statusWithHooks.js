import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getIsMyPage, getUserStatus} from '../../../redux/profile-selectors';
import {validateTextFieldCreator} from '../../common/validators';
import {applyNewStatus} from '../../../redux/profile-reducer';
import {stopChangingOnEscape} from '../../common/helpers';
import CustomButton from '../../common/buttons/submit/custom-button';
import TwoButtons from '../../common/buttons/two-buttons';

import s from './Status.module.sass';


const maxLength = validateTextFieldCreator(300);

const ProfileStatus = React.memo(({status, isMyPage, applyNewStatus, setResponseWarning}) => {

    const [editMode, setEditMode] = useState(false);
    const [statusBody, setStatusBody] = useState(status);

    useEffect(() => {
        setStatusBody(status);
    }, [status]);

    const onClickEditMode = () => {
        if (isMyPage) setEditMode(true);
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
            } else setResponseWarning('Oops, some problem. New status cannot equal the old status');
        } else alert(error);
    }

        const onCancelChange = () => {
            setStatusBody(status);
            setEditMode(false)
        }

        return <form className={s.statusForm} onSubmit={onSetNewStatus}>
                {editMode ? <> <input className={s.statusInput}
                            autoFocus
                            name='status'
                            id='status'
                            value={statusBody}
                            onKeyDown={(e) => stopChangingOnEscape(e, editMode, setEditMode)}
                            onChange={onChangeInput} ></input>
                        <TwoButtons wrapClassName={s.wrapperStyle} onCancel={onCancelChange}/></>
                    : <><div className={s.statusField}
                            onDoubleClick={onClickEditMode}>{status ? status : 'User has no status'}</div>
                        {isMyPage && <CustomButton wrapClassName={s.wrapperStyle} type='button'
                            callbackOnClick={() => setEditMode(true)}>Change status</CustomButton>}
                </>}
        </form>
});

const mapStateToProps = (state) => ({
    status: getUserStatus(state),
    isMyPage: getIsMyPage(state)
});

export default compose(
    connect(mapStateToProps, {applyNewStatus})
)(ProfileStatus);