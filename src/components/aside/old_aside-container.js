import Aside from './aside';
import {connect} from 'react-redux';

const mapStateToProps = ({aside: {navbar, friends}, auth: {isAuth}}) => ({navbar, friends, isAuth});
const mapDispatchToProps = (dispatch) => ({});

const AsideContainer = connect(mapStateToProps, mapDispatchToProps)(Aside);

export default AsideContainer;