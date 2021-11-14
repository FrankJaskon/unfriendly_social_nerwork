import {connect} from 'react-redux';
import {compose} from 'redux';
import Login from './login';
import {setUserAuth} from '../../redux/auth-reducer';
import HOC from '../common/hoc';
import {getIsAuth, getIsCaptcha, getCaptcha} from '../../redux/auth-selectors';

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    isCaptcha: getIsCaptcha(state),
    captcha: getCaptcha(state)
})

export default compose(
    connect(mapStateToProps, {setUserAuth}),
    HOC.redirectProfileWrapperComponent.bind(HOC)
)(Login);