import React from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {deleteAuthLogin} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    render() {
        const {header, deleteAuthLogin} = this.props;
        return (
            <Header header={header} deleteAuthLogin={deleteAuthLogin} />
         )
    }
}

const mapStateToProps = ({auth}) => ({
    header: auth
});

export default connect(mapStateToProps, ({deleteAuthLogin}))(HeaderContainer);