import React from 'react';
import {connect} from 'react-redux';
import {showUsers, toggleSubscription, clearUserPage} from '../../redux/users-reducer';
import Users from './users';
import {compose} from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.showUsers(this.props.currentPage);
    }
    showPrevPage = () => {
        this.props.showUsers(this.props.currentPage - 1);
    }
    showPrevTenPage = () => {
        this.props.showUsers(this.props.currentPage - 10);
    }
    showNextPage = () => {
        this.props.showUsers(this.props.currentPage + 1);
    }
    showNextTenPage = () => {
        this.props.showUsers(this.props.currentPage + 10);
    }
    showNumberPage = (page) => {
        this.props.showUsers(page);
    }
    clickOnSubscription = (userId, value) => {
        this.props.toggleSubscription(userId, value);
    }
    componentWillUnmount() {
        this.props.clearUserPage();
    }
    render() {
        const {authId, isAuth, usersList, usersNumber, totalPagesNumber, paginatorTotalCount, currentPage,
            isFetching, usersFollowingInProgress} = this.props;

        return <Users
            usersList={usersList}
            usersNumber={usersNumber}
            totalPagesNumber={totalPagesNumber}
            currentPage={currentPage}
            clickOnSubscription={this.clickOnSubscription}
            showPrevPage={this.showPrevPage}
            showPrevTenPage={this.showPrevTenPage}
            showNextPage={this.showNextPage}
            showNextTenPage={this.showNextTenPage}
            showNumberPage={this.showNumberPage}
            usersFollowingInProgress={usersFollowingInProgress}
            isAuth={isAuth}
            authId={authId}
            isFetching={isFetching}
            paginatorTotalCount={paginatorTotalCount} />
    }
}

const mapStateToProps = ({auth: {id : authId}, users: {usersList, usersNumber, totalPagesNumber,
    paginatorTotalCount, currentPage, isFetching, usersFollowingInProgress}}) => {
    return {authId, usersList, usersNumber, totalPagesNumber,
        paginatorTotalCount, currentPage, isFetching, usersFollowingInProgress}
}

export default compose(
    connect(mapStateToProps,{showUsers, toggleSubscription, clearUserPage})
)(UsersContainer);