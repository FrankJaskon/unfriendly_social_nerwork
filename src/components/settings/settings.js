import React from 'react';

import s from './Settings.module.sass';
import LoginButton from '../common/buttons/loginBtn';

const Settings = ({isAuth, photoIsLoading}) => {
    return (
        <div className={s.settingsPage}>
            <h3 className={s.title}>Settings</h3>
            {/* {isAuth ? <UploadForm btnName='Upload profile photo' photoIsLoading={photoIsLoading} /> : ''} */}
            <div className={s.wrapperLogin}>
                <p className={s.titleOption} >Enter/exit your user profile</p>
                <LoginButton btnClassName={s.btnStyle}
                    wrapClassName={s.wrapperStyle} />
            </div>
        </div>
    )
}

export default Settings;