import React from 'react';
import Post from './post';

import s from './Posts.module.sass';
const Posts = React.memo(({postsData, userId}) => {

    const posts = postsData.map(p => <Post key={p.id} userId={userId} text={p.message} counterLike={p.likesCount} pageId={p.pageId} />);

    return (
        <div className={s.posts}>
            {posts}
        </div>
    )
});

export default Posts;