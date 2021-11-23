import React, {useState} from 'react';
import TwoButtons from '../buttons/two-buttons';

import s from './UploadUserPhoto.module.sass';

const UploadPhotoForm = ({saveNewUserPhoto}) => {

    const [file, setFile] = useState(null);

    const clearInput = ({target}) => {
        target.value = null;
    }

    const getFile = ({target : {files}}) => {
        const formData = new FormData();
        formData.append('image', files[0]);
        setFile(formData);
    }

    const onSubmit = () => {
        saveNewUserPhoto(file);
        setFile(null);
    }

    const onCancel = () => {
        setFile(null);
    }

    return <form className={s.wrapper}>
            {!file
                ? <label htmlFor='userPhotoFile' className={s.fakeButton}>Change photo</label>
                : <TwoButtons wrapClassName={s.wrapperStyle} onSave={onSubmit} onCancel={onCancel} />}
                <input id='userPhotoFile' type='file' onClick={clearInput} onChange={getFile} className={s.fileInput} />
        </form>

}

export default UploadPhotoForm;