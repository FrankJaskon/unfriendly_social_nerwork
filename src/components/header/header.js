import React from 'react';
import {NavLink} from 'react-router-dom';
import LoginButton from '../common/buttons/loginBtn';

import s from './Header.module.sass';

const Header = ({header: {login, isAuth}}) => {
    return (
        <header className={s.header}>
            <div className={s.headerTitleWrapper}>
                <h1 className={s.headerMainTitle}><div>Hello,
                    <NavLink to={'/profile'}>
                        <span className={s.userName}> {login}.</span>
                    </NavLink> {isAuth ? `This is the place where you aren't expected.`
                        : `Welcome to unfriendly social network` }</div>
                        <LoginButton wrapClassName={s.wrapperStyle} btnClassName={s.btnStyle} />
                </h1>
            </div>
        </header>
    )
}

export default Header;