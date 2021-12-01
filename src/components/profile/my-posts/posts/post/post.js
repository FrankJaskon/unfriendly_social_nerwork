import React from 'react';
import userPhoto from '../../../../../assets/images/icon-default-other-users.png';
import DivWrapper from '../../../../common/finished-components/div-wrapper';

import s from './Post.module.sass';

const Post = ({userId, pageId, text, counterLike}) => {

    const isShowCondition = userId === pageId;

    return isShowCondition
        ? <DivWrapper className={s.postWrapper}>
        <div className={s['post__user-img']}>
            <img src={userPhoto}  alt='user-icon'></img>
        </div>
        <div className={s.post}>
            <p className={s.post__text}>{text}</p>
            <div className={s.post__like}>like: {counterLike}</div>
        </div>
    </DivWrapper>
    : null
}

export default Post;