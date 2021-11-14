import React from 'react';
import DialogMessage from './message';
import AddMessage from './add-message';

// import s from './Messages.module.sass';

const DialogMessages = ({dialogs: {messagesData, placeholderText, newMessageBody}, addMessage}) => {

    const messages = messagesData.map(m => <DialogMessage key={m.id} name={m.name} message={m.message}/>);

    return (
        <>
            {messages}
            <AddMessage placeholder={placeholderText}
                newMessageBody={newMessageBody}
                addMessage={addMessage} />
        </>

    )
}

export default DialogMessages;