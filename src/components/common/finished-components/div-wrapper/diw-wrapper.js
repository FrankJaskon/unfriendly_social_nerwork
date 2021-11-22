import React from 'react';

import s from './DiwWrapper.module.sass';

const DivWrapper = ({children, className}) => {

    const divWrapper = `${s.divWrapper} ${className}`

    return <div className={divWrapper}>
        {children}
    </div>
}

export default DivWrapper;