import React from 'react';
import {compose} from 'redux';
import HOC from '../common/hoc';

// import s from './News.module.sass';

const News = (props) => {
    return (
        <h1>News</h1>
    )
}

export default compose(
    HOC.redirectAuthWrapperComponent.bind(HOC)
)(News);