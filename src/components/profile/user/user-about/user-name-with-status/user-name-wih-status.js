import React from 'react';
import ProfileStatus from '../../../status';

import s from './UserNameWithStatus.module.sass';

const UserNameWithStatus = ({fullName, setServerResponse}) => {
    return <div className={s.userNameWithStatus}>
        <h3 className={s.user__name}>
            {fullName}
        </h3>
        <ProfileStatus setServerResponse={setServerResponse}/>
    </div>
    }

export default UserNameWithStatus;