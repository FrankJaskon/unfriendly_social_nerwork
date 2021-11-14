import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router';
import {compose} from 'redux';
import Profile from './profile';
import {addPost, showUserPage, setLoadingError} from '../../redux/profile-reducer';
import {getIsMyPage, getIsPageLoaded, getLoadingError, getProfile} from '../../redux/profile-selectors';
import {getIsAuth, getMyId} from '../../redux/auth-selectors';
import Preloader from '../common/preloader';
// import ErrorPage from '../common/error/error-page';
import HOC from '../common/hoc';

class ProfileContainer extends React.Component {
    componentDidMount() {
        if (this.props.isAuth) {
            this.props.showUserPage(this.props.match.params.userId ? this.props.match.params.userId : this.props.id);
        } else if (this.props.match.params.userId) this.props.showUserPage(this.props.match.params.userId);
    }
    componentDidUpdate(prevProps) {
        const urlId = this.props.match.params.userId;
        if (prevProps.match.params.userId !== urlId) {
            urlId
            ? this.props.showUserPage(urlId)
            : this.props.showUserPage(this.props.id);
        }
    }
    render() {
        const {isLoaded, isAuth, isMyPage, profile, addPost, match: {params: {userId}}} = this.props;

        if (!isAuth && !userId) return <Redirect to='/login' />;
        if (!isLoaded) return <Preloader />

        return <Profile
                profile={profile}
                addPost={addPost}
                isAuth={isAuth}
                isMyPage={isMyPage} />
    }
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    isAuth: getIsAuth(state),
    id: getMyId(state),
    isLoaded: getIsPageLoaded(state),
    isMyPage: getIsMyPage(state),
    loadingError: getLoadingError(state)
});

export default compose(
    connect(mapStateToProps, {addPost, showUserPage, setLoadingError}),
    withRouter,
    HOC.showPageErrorWrapperComponent.bind(HOC)
)(ProfileContainer);