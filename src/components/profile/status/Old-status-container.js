import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import ProfileStatus from './status';
import {changeUserStatus, applyNewStatus} from '../../../redux/profile-reducer';
import {getIsMyPage, getUserStatus} from '../../../redux/profile-selectors';

class ProfileStatusContainer extends React.Component {
    render() {
        const {status, isMyPage, changeUserStatus, applyNewStatus} = this.props;
        return <ProfileStatus
            status={status}
            isMyPage={isMyPage}
            changeUserStatus={changeUserStatus}
            applyNewStatus={applyNewStatus} />
    }
}

const mapStateToProps = (state) => ({
    status: getUserStatus(state),
    isMyPage: getIsMyPage(state)
});

export default compose(
    connect(mapStateToProps, {changeUserStatus, applyNewStatus})
)(ProfileStatusContainer);