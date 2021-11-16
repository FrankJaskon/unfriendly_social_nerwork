import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import CustomButton from '../submit';
import {deleteAuthLogin} from '../../../../redux/auth-reducer';
import {NavLink} from 'react-router-dom';

const LoginButton = ({isAuth, deleteAuthLogin, wrapClassName = '', btnClassName = ''}) => {

    return isAuth
        ? <CustomButton
            wrapClassName={wrapClassName}
            btnClassName={btnClassName}
            text={'Log out'}
            callbackOnClick={deleteAuthLogin} />
        : <NavLink to={'/login'} style={{textDecoration: 'none'}} className={wrapClassName}>
            <CustomButton
                wrapClassName={wrapClassName}
                btnClassName={btnClassName}
                text={'Log in'} />
        </NavLink>
}

const mapStateToProps = ({auth: {isAuth}}) => ({
    isAuth: isAuth
});

export default compose(
    connect(mapStateToProps, {deleteAuthLogin}))(LoginButton);