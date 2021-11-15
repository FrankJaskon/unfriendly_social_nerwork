import React, {useState} from 'react';
import Navbar from './navbar';
import Friends from './friends';
import Hamburger from 'hamburger-react'
import {useMediaQuery} from 'react-responsive'

import s from './Aside.module.sass';

const Aside = ({navbar, friends, isAuth}) => {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    const unitedStyles = `${s.aside} ${s.onOpenStyle}`;

    const [isOpen, setOpen] = useState(false)

    const [asideStyle, setAsideStyle] = useState(s.aside)

    const onOpenMenu = () => {
        setAsideStyle(unitedStyles);
    }

    const onCloseMenu = () => {
        setAsideStyle(s.aside);
    }

    const onClickMenuItem = () => {
        setOpen(false);
        setAsideStyle(s.aside);
    }

    return (
        <div className={s.additionalWrapper}>
            <aside className={asideStyle}>
                {isMobile
                    ? <div className={s.hamburgerMenuIcon}>
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            size={24}
                            duration={0.4}
                            onToggle={toggled => {if (toggled) {onOpenMenu();} else {onCloseMenu();}}} />
                    </div>
                    : null}
                <div className={s.navbarFriendsWrapper} >
                    <Navbar navbar={navbar} onClickMenuItem={onClickMenuItem} />
                    {isAuth ? <Friends friendsData={friends} /> : ''}</div>
            </aside>
        </div>
    )
}

export default Aside;
