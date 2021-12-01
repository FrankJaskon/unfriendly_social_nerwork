import React from 'react';
import User from './user';
import Preloader from '../common/preloader';
import Pagination from '../common/pagination';
import {useMediaQuery} from 'react-responsive';
import DivWrapper from '../common/finished-components/div-wrapper';
import {compose} from 'redux';
import {connect} from 'react-redux';
import HOC from '../common/hoc';
import {setLoadingError} from '../../redux/profile-reducer';
import {setResponseWarning} from '../../redux/app-reducer';
import {withRouter} from 'react-router';
import {getResponseWarning} from '../../redux/app-selectors';

import s from './Users.module.sass';
import { getLoadingError } from '../../redux/profile-selectors';

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
            <DivWrapper className={s.usersPageTitle}>Users
                <Pagination totalPagesNumber={totalPagesNumber}
                    usersNumber={usersNumber}
                    currentPage={currentPage}
                    showNumberPage={showNumberPage}
                    showPrevPage={showPrevPage}
                    showPrevTenPage={showPrevTenPage}
                    showNextPage={showNextPage}
                    showNextTenPage={showNextTenPage}
                    isTop={true}
                    paginatorTotalCount={!isMobile ? 10 : 5} /></DivWrapper>
            <div className={s.blank}></div>
            {isFetching ? <Preloader />
                :<div className={s.usersWrapper}>
                    {users}
                    <DivWrapper className={s.bottomPaginatorWrapper}>
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
                    </DivWrapper>
                </div>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    loadingError: getLoadingError(state),
    responseWarning: getResponseWarning(state)
});

export default compose(
    connect(mapStateToProps, {setLoadingError, setResponseWarning}),
    withRouter,
    HOC.showPageErrorWrapperComponent
)(Users);
