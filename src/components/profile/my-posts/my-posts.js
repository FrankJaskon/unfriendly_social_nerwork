import React from 'react';
import Posts from './posts'
import CreatePost from './create-post';

import s from './MyPosts.module.sass';

const MyPosts = (props) => {
    const {userId, isAuth, isMyPage, postsData, newPostBody, placeholderText, addPost} = props;
    return <div className={s['my-posts']}>
            <CreatePost
                userId={userId}
                newPostBody={newPostBody}
                placeholderText={placeholderText}
                addPost={addPost}
                isAuth={isAuth}
                isMyPage={isMyPage} />
            <div className={s.posts}>
                <Posts
                    postsData={postsData}
                    userId={userId} />
            </div>
        </div>
}

export default MyPosts;