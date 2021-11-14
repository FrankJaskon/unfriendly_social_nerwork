import React from 'react';
import {compose} from 'redux';
import HOC from '../common/hoc';

import s from './News.module.sass';

const News = (props) => {
    return (
        <div className={s.newsPage}>
            <h1>News</h1>
        </div>
    )
}

export default compose(
    HOC.redirectAuthWrapperComponent.bind(HOC)
)(News);