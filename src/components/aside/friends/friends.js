
import React from 'react';
import Friend from './friend';

import s from './Friends.module.sass';

const Friends = (props) => {
    const {friendsData} = props;
    const friends = friendsData.map(f => <Friend name={f.name} key={f.id} />);

    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>Imaginary friends</h3>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;