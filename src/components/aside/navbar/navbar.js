
import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './Navbar.module.sass';

const Navbar = (props) => {
    const {navbar} = props;
    const navigation = navbar.map(page => {
        return (
            <li key={page.id} className={s['nav-list__item']}>
                <NavLink to={`${page.url}`}
                    className={s['nav-list__link']}
                    activeClassName={s.active_link} >
                    {page.title}
                </NavLink>
            </li>
        )
    })
    return (
            <ul className={s['nav-list']}>
                {navigation}
            </ul>
        )
}

export default Navbar;