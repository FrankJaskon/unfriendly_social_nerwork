import React, {useState} from 'react';
import Navbar from './navbar';
// import Friends from './friends';
import {Squash as Hamburger} from 'hamburger-react'
import {useMediaQuery} from 'react-responsive'

import s from './Aside.module.sass';

const Aside = ({navbar, friends, isAuth}) => {

    const isMobile = useMediaQuery({maxWidth: 767});

    const unitedStyles = `${s.aside} ${s.onOpenStyle}`;

    const [isOpen, setOpen] = useState(false)

    const [asideStyle, setAsideStyle] = useState(s.aside)

    const onOpenMenu = () => {
        setAsideStyle(unitedStyles);
    }

    const onCloseMenu = () => {
        setAsideStyle(s.aside);
    }

    const closeAside = () => {
        setOpen(false);
        setAsideStyle(s.aside);
    }


    return (
        <div className={s.additionalWrapper}>
            <aside className={asideStyle} onBlur={isMobile ? closeAside : null}>
                {isMobile
                    ? <div className={s.hamburgerMenuIcon}>
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            size={24}
                            duration={0.8}
                            onToggle={toggled => {if (toggled) {onOpenMenu();} else {onCloseMenu();}}} />
                    </div>
                    : null}
                <div className={s.navbarFriendsWrapper} >
                    <Navbar navbar={navbar} onClickMenuItem={closeAside} />
                    {/* {isAuth ? <Friends friendsData={friends} /> : ''} */}
                </div>
            </aside>
        </div>
    )
}

export default Aside;
