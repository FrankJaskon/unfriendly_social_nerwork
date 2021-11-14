import React from 'react';
import User from './user';
import Preloader from '../common/preloader';
import Pagination from '../common/pagination';

import s from './Users.module.sass';

const Users = ({authId, usersList, usersNumber, totalPagesNumber, paginatorTotalCount, currentPage,
    showNextPage, showNextTenPage, showPrevPage, showPrevTenPage, showNumberPage,
    isFetching, clickOnSubscription, usersFollowingInProgress}) => {

    const users = usersList.map(u => <User key={u.id}
        userData={u}
        clickOnSubscription={clickOnSubscription}
        usersFollowingInProgress={usersFollowingInProgress}
        authId={authId} />);

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
                    paginatorTotalCount={paginatorTotalCount} /></h3>
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
                        paginatorTotalCount={paginatorTotalCount} />
                </div>
            }
        </div>
    )
}

export default Users;
