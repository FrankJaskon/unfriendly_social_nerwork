import React from 'react';
import CustomButton from '../../common/buttons/submit';
import {sendFile} from '../../../redux/settings-reducer';

import s from './UploadForm.module.sass';

export default class UploadForm extends React.Component {
    state = {
        file: null
    }
    getFile = (event) => {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);
        this.setState({file: formData});
    }
    onSubmit = () => {
        sendFile(this.state.file);
    }
    render() {
        const {btnName} = this.props;

        return (
            <form className={s.wrapper} >
                <input type='file' onChange={this.getFile} className={s.fileInput} />
                <CustomButton
                    btnClassName={s.btnStyle}
                    wrapClassName={s.wrapperStyle}
                    text={btnName}
                    callbackOnClick={(event) => {event.preventDefault(); return this.onSubmit()}} />
            </form>
        )
    }
}