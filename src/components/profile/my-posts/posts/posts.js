import React from 'react';
import Post from './post';

import s from './Posts.module.sass';
const Posts = React.memo(props => {
    const {postsData} = props;
    const posts = postsData.map(p => <Post key={p.id} text={p.message} counterLike={p.likesCount} />);

    return (
        <div className={s.posts}>
            {posts}
        </div>
    )
});

export default Posts;