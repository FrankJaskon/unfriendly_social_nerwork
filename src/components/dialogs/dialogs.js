import React from 'react';
import DialogMessages from './messages';
import DialogItem from './dialog-item';
import {Route} from 'react-router-dom';

import s from './Dialogs.module.sass';

const Dialogs = ({dialogs, addMessage}) => {

    const {dialogsData} = dialogs;

    const dialogsList = dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            <h3 className={s.dialogs__title}>
                    Dialogs
            </h3>
            <ul className={s.dialogs__wrapper}>
                {dialogsList}
            </ul>
            <div className={s.dialog__messages}>
                <div className={s.messages}>
                    <Route
                        path={`/dialogs/dialog/0`}
                        render={() => <DialogMessages
                            dialogs={dialogs}
                            addMessage={addMessage} />} />
                </div>
            </div>
        </div>
    )
}
export default Dialogs;