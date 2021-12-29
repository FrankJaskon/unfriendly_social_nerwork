import React,  {useEffect} from 'react';
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
import {getLoadingError} from '../../redux/profile-selectors';
import {showUsers, toggleSubscription, clearUserPage} from '../../redux/users-reducer';

import s from './Users.module.sass';

const Users = ({clearUserPage, showUsers, toggleSubscription, isAuth,
    authId, usersList, usersNumber, totalPagesNumber, currentPage,
    isFetching, usersFollowingInProgress}) => {

    // const dispatch = useDispatch();

    // const necessaryState = useSelector(({auth: {id : authId, isAuth}, users: {usersList, usersNumber, totalPagesNumber,
    //     currentPage, isFetching, usersFollowingInProgress}}) => ({isAuth, authId, usersList, usersNumber, totalPagesNumber,
    //         currentPage, isFetching, usersFollowingInProgress}));

    // const selectorChecking = useSelector(state => state);

    // console.log(selectorChecking);
    // console.log(necessaryState);

    // console.log('Hello');

    const showPrevPage = () => {
        showUsers(currentPage - 1);
    }
    const showPrevTenPage = () => {
        showUsers(currentPage - 10);
    }
    const showNextPage = () => {
        showUsers(currentPage);
    }
    const showNextTenPage = () => {
        showUsers(currentPage + 10);
    }
    const showNumberPage = (page) => {
        showUsers(page);
    }
    const clickOnSubscription = (userId, value) => {
        toggleSubscription(userId, value);
    }

    const isMobile = useMediaQuery({maxWidth: 767});

    useEffect(() => {
        showUsers(currentPage);
        return clearUserPage;
    }, []);

    const users = usersList.map(u => <User key={u.id}
        isAuth={isAuth}
        userData={u}
        clickOnSubscription={clickOnSubscription}
        usersFollowingInProgress={usersFollowingInProgress}
        authId={authId} />);

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

const mapStateToPropsWrapper = ({auth: {id : authId, isAuth}, users: {usersList, usersNumber, totalPagesNumber,
    currentPage, isFetching, usersFollowingInProgress}}) => {
    return {isAuth, authId, usersList, usersNumber, totalPagesNumber,
        currentPage, isFetching, usersFollowingInProgress}
}

export default compose(
    connect(mapStateToPropsWrapper, {showUsers, toggleSubscription, clearUserPage}),
    connect(mapStateToProps, {setLoadingError, setResponseWarning}),
    withRouter,
    HOC.showPageErrorWrapperComponent
)(Users);


//     render() {
//         const {authId, isAuth, usersList, usersNumber, totalPagesNumber, currentPage,
//             isFetching, usersFollowingInProgress} = this.props;

//         return <Users
//             usersList={usersList}
//             usersNumber={usersNumber}
//             totalPagesNumber={totalPagesNumber}
//             currentPage={currentPage}
//             clickOnSubscription={this.clickOnSubscription}
//             showPrevPage={this.showPrevPage}
//             showPrevTenPage={this.showPrevTenPage}
//             showNextPage={this.showNextPage}
//             showNextTenPage={this.showNextTenPage}
//             showNumberPage={this.showNumberPage}
//             usersFollowingInProgress={usersFollowingInProgress}
//             isAuth={isAuth}
//             authId={authId}
//             isFetching={isFetching} />
//     }
// }


// export default compose(
//     connect(mapStateToProps,{showUsers, toggleSubscription, clearUserPage})
// )(UsersContainer);
