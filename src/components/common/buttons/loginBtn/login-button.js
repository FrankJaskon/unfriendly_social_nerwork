import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import ButtonSubmit from '../submit';
import {deleteAuthLogin} from '../../../../redux/auth-reducer';
import {NavLink} from 'react-router-dom';

const LoginButton = ({isAuth, deleteAuthLogin, wrapClassName = '', btnClassName = ''}) => {

    return isAuth
        ? <ButtonSubmit
            wrapClassName={wrapClassName}
            btnClassName={btnClassName}
            text={'Log out'}
            callbackOnClick={deleteAuthLogin} />
        : <NavLink to={'/login'} style={{textDecoration: 'none'}} className={wrapClassName}>
            <ButtonSubmit
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