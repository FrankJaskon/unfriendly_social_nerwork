import React from 'react';
import DivWrapper from '../../../../common/finished-components/div-wrapper';
import ProfileStatus from '../../../status';

import s from './UserNameWithStatus.module.sass';

const UserNameWithStatus = ({fullName, setResponseWarning}) => {
    return <DivWrapper className={s.userNameWithStatus}>
        <h3 className={s.user__name}>
            {fullName}
        </h3>
        <ProfileStatus setResponseWarning={setResponseWarning}/>
    </DivWrapper>
    }

export default UserNameWithStatus;