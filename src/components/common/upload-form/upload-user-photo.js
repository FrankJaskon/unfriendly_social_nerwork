import React, {useState} from 'react';
import CustomButton from '../../common/buttons/submit';

import s from './UploadUserPhoto.module.sass';

const UploadPhotoForm = ({saveNewUserPhoto}) => {


    const [file, setFile] = useState(null);

    const getFile = (event) => {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);
        setFile(formData);
    }
    const onSubmit = () => {
        saveNewUserPhoto(file);
    }

    return <form className={s.wrapper}>
            {!file
                ? <label htmlFor='userPhotoFile' className={s.fakeButton}>Change photo</label>
                : <CustomButton type='button'
                    btnClassName={s.btnStyle}
                    wrapClassName={s.wrapperStyle}
                    callbackOnClick={onSubmit} >
                    Save new photo
                </CustomButton>}
                <input id='userPhotoFile' type='file' onChange={getFile} className={s.fileInput} />
        </form>

}

export default UploadPhotoForm;