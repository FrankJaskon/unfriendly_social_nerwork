import React from 'react';
import preloAder from '../../../assets/images/spinner.svg';

import s from './Preloader.module.sass';

const Preloader = ({preloaderClass}) => {
    const wrapperClass = `${s.preloader} ${preloaderClass}`;
    return (
        <div className={wrapperClass}>
        <img src={preloAder} alt='' />
    </div>
    )
}

export default Preloader;