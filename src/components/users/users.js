import React from 'react';
import User from './user';
import Preloader from '../common/preloader';
import Pagination from '../common/pagination';
import {useMediaQuery} from 'react-responsive';

import s from './Users.module.sass';

const Users = ({isAuth, authId, usersList, usersNumber, totalPagesNumber, currentPage,
    showNextPage, showNextTenPage, showPrevPage, showPrevTenPage, showNumberPage,
    isFetching, clickOnSubscription, usersFollowingInProgress}) => {

    const users = usersList.map(u => <User key={u.id}
        isAuth={isAuth}
        userData={u}
        clickOnSubscription={clickOnSubscription}
        usersFollowingInProgress={usersFollowingInProgress}
        authId={authId} />);

    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <div className={s.users}>
            <h3 className={s.usersPageTitle}>Users
                <Pagination totalPagesNumber={totalPagesNumber}
                    usersNumber={usersNumber}
                    currentPage={currentPage}
                    showNumberPage={showNumberPage}
                    showPrevPage={showPrevPage}
                    showPrevTenPage={showPrevTenPage}
                    showNextPage={showNextPage}
                    showNextTenPage={showNextTenPage}
                    isTop={true}
                    paginatorTotalCount={!isMobile ? 10 : 5} /></h3>
            <div className={s.blank}></div>
            {
                isFetching ? <Preloader />
                :<div className={s.usersWrapper}>
                    {users}
                    <Pagination totalPagesNumber={totalPagesNumber}
                        usersNumber={usersNumber}
                        currentPage={currentPage}
                        showNumberPage={showNumberPage}
                        showPrevPage={showPrevPage}
                        showPrevTenPage={showPrevTenPage}
                        showNextPage={showNextPage}
                        showNextTenPage={showNextTenPage}
                        isTop={false}
                        paginatorTotalCount={!isMobile ? 10 : 5} />
                </div>
            }
        </div>
    )
}

export default Users;
