import {connect} from 'react-redux';
import {compose} from 'redux';
import Settings from './settings';

const mapStateToProps = ({auth: {isAuth}}) => ({
    isAuth
});

export default compose(
    connect(mapStateToProps, {})
)(Settings);
