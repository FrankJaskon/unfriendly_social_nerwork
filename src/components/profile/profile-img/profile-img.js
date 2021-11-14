import React from 'react';
import profilePhoto from '../../../assets/images/profile-wallpaper.jpg';

import s from './ProfileImg.module.sass';

const Wallpaper = (props) => {
    return (
        <div className={s.wallpaperWrapper}>
            <img src={profilePhoto} alt='profile-wallpaper'></img>
        </div>
    )
}

export default Wallpaper;