import Dialogs from './dialogs';
import {addMessage} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import HOC from '../common/hoc';
import {compose} from 'redux';


const mapStateToProps = ({auth: {isAuth}, dialogs}) => {
    return {
        dialogs,
        isAuth
    };

}

export default compose(
    connect(mapStateToProps, {addMessage}),
    HOC.redirectAuthWrapperComponent.bind(HOC)
)(Dialogs);

