import React from 'react';
import userPhoto from '../../../../../assets/images/icon-default-other-users.png';

import s from './Post.module.sass';

const Post = (props) => {
    const {text, counterLike} = props;

    return (
        <div className={s.post}>
            <div className={s['post__user-img']}>
                <img src={userPhoto}  alt='user-icon'></img>
            </div>
            <div className={s.post__text}>
                {text} <span className={s.post__like}>like: {counterLike}</span>
            </div>
        </div>
    )
}

export default Post;