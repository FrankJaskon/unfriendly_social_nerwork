import React from 'react';
import {validateTextFieldCreator} from '../../common/validators';

import s from './Status.module.sass';

const maxLength = validateTextFieldCreator(100);

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        localStatus: this.props.status
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({localStatus: this.props.status});
        } else if (prevState.editMode !== this.state.editMode && !this.state.editMode) {
            this.setState({localStatus: this.props.status});
        }
    }
    onKeyDown = (event) => {
        if (+event.keyCode === 27 && this.state.editMode) {
            this.setState({editMode: false});
        } else if (+event.keyCode === 13 && this.state.editMode) {
            const error = maxLength(this.state.localStatus);
            if (!error) {
                if (this.state.localStatus !== this.props.status) {
                    this.setState({editMode: false});
                    this.props.applyNewStatus(this.state.localStatus);
                } else alert('Oops, some problem. New status cannot equal old status');
            } else alert(error);
        }
    }
    onClickEdit = () => {
        if (this.props.isMyPage) this.setState({editMode: true});
    }
    onChangeInput = (event) => {
        const value = event.target.value;
        this.setState({localStatus: value});
    }
    render() {
        const {status} = this.props;
        const {editMode, localStatus} = this.state;
        return (
            <div className={s.wrapper} onKeyDown={this.onKeyDown}>
                <div className={s.statusField}>
                {editMode ?
                    <><input className={s.statusInput}
                        autoFocus
                        value={localStatus}
                        onChange={this.onChangeInput} ></input>
                    </>
                    : <div className={s.statusField}
                        onDoubleClick={this.onClickEdit}>{status ? status : 'User has no status'}</div>}
                </div>
            </div>
        )
    }
}