import React from 'react';
import {compose} from 'redux';
import HOC from '../common/hoc';

// import s from './Music.module.sass';

const Music = (props) => {
    return (
        <h1>Music</h1>
    )
}

export default compose(
    HOC.redirectAuthWrapperComponent.bind(HOC)
)(Music);