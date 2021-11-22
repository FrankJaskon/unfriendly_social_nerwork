import React from 'react';
import DivWrapper from '../common/finished-components/div-wrapper';
import LoginButton from '../common/buttons/loginBtn';

import s from './Settings.module.sass';

const Settings = (props) => {
// const Settings = ({isAuth, photoIsLoading}) => {
    return (
        <div className={s.settingsPage}>
            <DivWrapper className={s.pageTitle} >Settings</DivWrapper>
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