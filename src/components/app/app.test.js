import React from 'react';
import ReactDOM from 'react-dom';
import UnfriendlySocialNetworkApp from './app';
import {store} from '../../redux/redux-store';

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnfriendlySocialNetworkApp store={store}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});