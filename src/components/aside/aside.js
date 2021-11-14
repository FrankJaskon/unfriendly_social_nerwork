import React from 'react';
import Navbar from './navbar';
import Friends from './friends';

import s from './Aside.module.sass';

export default class Aside extends React.Component {
    render() {
        const {navbar, friends, isAuth} = this.props;
        return (
            <aside className={s.aside}>
                <Navbar navbar={navbar} />
                {isAuth ? <Friends friendsData={friends} /> : ''}
            </aside>
        )
    }
}