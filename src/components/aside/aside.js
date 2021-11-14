import React, {useState} from 'react';
import Navbar from './navbar';
import Friends from './friends';
import {Spin as Hamburger} from 'hamburger-react'
import {useMediaQuery} from 'react-responsive'

import s from './Aside.module.sass';

const Aside = ({navbar, friends, isAuth}) => {

    const Mobile = ({ children }) => {
      const isMobile = useMediaQuery({ maxWidth: 767 })
      return isMobile ? children : null
    }

    const [isOpen, setOpen] = useState(false)

    const [asideStyle, setAsideStyle] = useState(s.aside)

    const onOpenMenu = () => {
        setAsideStyle(`${s.aside} ${s.onOpenStyle}`);
    }

    const onCloseMenu = () => {
        setAsideStyle(s.aside);
    }

    return (
        <div className={s.additionalWrapper}>
            <aside className={asideStyle}>
                <Mobile>
                    <div className={s.hamburgerMenuIcon}>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={24}
                        onToggle={toggled => {if (toggled) onOpenMenu(); else onCloseMenu();}}/>
                    </div>
                </Mobile>
                <div className={s.navbarFriendsWrapper} >
                    <Navbar navbar={navbar} />
                    {isAuth ? <Friends friendsData={friends} /> : ''}</div>
            </aside>
        </div>
    )
}

export default Aside;
